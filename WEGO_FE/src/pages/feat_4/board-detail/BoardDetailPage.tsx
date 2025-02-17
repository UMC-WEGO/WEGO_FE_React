import * as S from './BoardDetailPage.style';
import { TbArrowLeft, TbShare2, TbDotsVertical } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { allPosts } from '../../../mocks/board/postData';
import {
  PiChatTextBold,
  PiThumbsUpBold,
  PiBookmarkSimpleBold,
} from 'react-icons/pi';
import { LuDot } from 'react-icons/lu';
import CommentList from '../../../components/feat4/CommentList/CommentList';
import CommentInput from '../../../components/feat4/CommentInput/CommentInput';
import CommentInput_chanmin from '../../../components/feat4/CommentInput/CommentInput_chanmin';
import CommentList_chanmin from '../../../components/feat4/CommentList/CommentList_chanmin';
import usePostComments, {
  usePostActions,
  usePostDetail,
} from '../../../hooks/feat4/usePostActions';
import { tokenRefreshApi } from '../../../apis/feat1/loginApis';
import { useTokenStore } from '../../../store/token/useTokenStore';
import { authInstance } from '../../../apis/axiosInstance';

export type TCommentData = {
  comment_author_name: string;
  comment_author_profile: string;
  comment_content: string;
  comment_created_at: string;
  user_id: number;
};

type TPostInfo = {
  category_name: string;
  content: string;
  created_at: string;
  id: number;
  location_name: string;
  picture_urls: string[];
  post_author_nickname: string;
  post_author_profile: string | null;
  title: string;
  total_comment: number;
  total_like: number;
  total_scrap: number | null;
  updated_at: string;
};

export type TPostDetailResData = {
  liked: boolean;
  post: {
    comments: TCommentData[];
    post_info: TPostInfo;
  };
  scraped: boolean;
};

function BoardDetailPage() {
  const navigate = useNavigate();
  const { postId } = useParams<{ postId: string }>(); // URL에서 id를 가져와
  // const post = allPosts.find(post => post.id === postId); // id로 게시글 찾아
  const { isLoading, error, data: post } = usePostDetail(Number(postId));
  const { data: tokens } = useTokenStore();

  const {
    addComment,
    deleteComment,
    likePost,
    unlikePost,
    scrapPost,
    unscrapPost,
  } = usePostActions(Number(postId));

  const [activeIcons, setActiveIcons] = useState<{
    like: boolean;
    comment: boolean;
    scrap: boolean;
  }>({
    like: post ? post.liked : false,
    comment: false,
    scrap: false,
  });

  const handleBack = () => {
    navigate(-1); // 이전 페이지
  };

  const handleClick = (icon: 'like' | 'comment' | 'scrap') => {
    if (icon == 'comment') {
      return;
    }

    setActiveIcons(prev => ({
      ...prev,
      [icon]: !prev[icon], // 클릭할 때마다 해당 아이콘의 상태를 토글
    }));

    switch (icon) {
      case 'like':
        if (activeIcons.like) {
          unlikePost({
            postId: Number(postId),
          });
        } else {
          likePost({
            postId: Number(postId),
          });
        }
        break;
      case 'scrap':
        if (activeIcons.scrap) {
          unscrapPost({
            postId: Number(postId),
          });
        } else {
          scrapPost({
            postId: Number(postId),
          });
        }
        break;
      default:
        break;
    }
  };

  // 게시글 존재하는지 확인
  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <S.Container>
      <S.Scroll>
        <S.Header>
          <span onClick={handleBack}>
            <TbArrowLeft />
          </span>
          <div>
            <span>
              <TbShare2 />
            </span>
            <span>
              <TbDotsVertical />
            </span>
          </div>
        </S.Header>
        <S.Content>
          <p> # {post.category}</p>
          <S.Profile>
            <img src="https://buly.kr/CsipNnM" alt="Profile" />
            <div>
              <span>위고 닉네임</span>
              <p>
                {post.timestamp}
                <LuDot />
                {post.time}
              </p>
            </div>
          </S.Profile>
          <h1>{post.title}</h1>
          <img src="https://buly.kr/AaoydRw" alt="Post Image" />
          <h6>{post.content}</h6>
        </S.Content>
        <hr />
        <S.Response>
          <span onClick={() => handleClick('like')}>
            <PiThumbsUpBold
              className={`icon ${activeIcons.like ? 'active' : ''}`}
            />
            <p>공감 {post.post.post_info.total_like || 0}</p>
          </span>
          <span onClick={() => handleClick('comment')}>
            <PiChatTextBold
              className={`icon ${activeIcons.comment ? 'active' : ''}`}
            />
            <p>댓글 {post.post.post_info.total_comment || 0}</p>
          </span>
          <span onClick={() => handleClick('scrap')}>
            <PiBookmarkSimpleBold
              className={`icon ${activeIcons.scrap ? 'active' : ''}`}
            />
            <p>스크랩 {post.post.post_info.total_scrap || 0}</p>
          </span>
        </S.Response>
        <S.CommentHr />
        <CommentList_chanmin comments={post.post.comments} />
      </S.Scroll>

      <S.InputBox>
        <CommentInput_chanmin
          onAddComment={addComment}
          userId={1}
          postId={Number(postId)}
        />
      </S.InputBox>
    </S.Container>
  );
}

export default BoardDetailPage;
