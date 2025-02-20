import * as S from './BoardDetailPage.style';
import { TbArrowLeft, TbShare2, TbDotsVertical } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { deletePostApi } from '../../../apis/feat4/postApi';
import {
  PiChatTextBold,
  PiThumbsUpBold,
  PiBookmarkSimpleBold,
} from 'react-icons/pi';
import { LuDot } from 'react-icons/lu';
import CommentInput_chanmin from '../../../components/feat4/CommentInput/CommentInput_chanmin';
import CommentList_chanmin from '../../../components/feat4/CommentList/CommentList_chanmin';
import {
  usePostActions,
  usePostDetail,
} from '../../../hooks/feat4/usePostActions';
import EditModal from '../../../components/feat4/EditModal/EditModal';

export type TCommentData = {
  comment_author_name: string;
  comment_author_profile: string;
  comment_content: string;
  comment_created_at: string;
  user_id: number;
  comment_id: number;
};

export type TPostInfo = {
  viewer_id: number;
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

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const year = date.getFullYear().toString().slice(2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}/${month}/${day} ${hours}:${minutes}`;
};

// 상대 시간 변환 함수
const timeAgoFormat = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffDay > 0) return `${diffDay}일 전`;
  if (diffHour > 0) return `${diffHour}시간 전`;
  if (diffMin > 0) return `${diffMin}분 전`;
  return '방금 전';
};

function BoardDetailPage() {
  const navigate = useNavigate();
  const { postId } = useParams<{ postId: string }>(); // URL에서 id를 가져와
  const { isLoading, error, data: post } = usePostDetail(Number(postId));
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

  const {
    addComment,
    deleteComment,
    likePost,
    unlikePost,
    scrapPost,
    unscrapPost,
  } = usePostActions(Number(postId));

  const [activeIcons, setActiveIcons] = useState({
    like: false,
    comment: false,
    scrap: post ? post.scraped : false,
  });

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleBack = () => {
    navigate('/board'); // 이전 페이지
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

  const handleDelete = async () => {
    if (!postId) return;

    const success = await deletePostApi(Number(postId));
    if (success) {
      alert('게시글이 삭제되었습니다.');
      navigate('/board');
    } else {
      alert('게시글 삭제에 실패했습니다.');
    }
  };

  const handleEditClick = () => {
    if (!postId) return;
    console.log(post);
    navigate('/board/edit', {
      state: { editPostData: post?.post.post_info, postId: postId }, // 기존 게시글 데이터
    });
  };

  const handleProfileButtonClick = (authorId: number) => {
    navigate(`/board/author/profile/${authorId}`, {
      state: { authorId },
    });
  };

  // 로딩
  if (isLoading) return <div>게시글 불러오는 중</div>;

  // 에러
  if (error || !post) return <div>게시글을 찾을 수 없습니다.</div>;

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
            <span onClick={handleModalOpen}>
              <TbDotsVertical />
            </span>
          </div>
        </S.Header>

        <EditModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onDelete={handleDelete}
          onEdit={handleEditClick}
        />

        <S.Content>
          <p> # {post.post.post_info.category_name}</p>
          <S.Profile>
            <img
              src={
                post.post.post_info.post_author_profile ||
                'https://buly.kr/CsipNnM'
              }
              alt="Profile"
              onClick={() =>
                handleProfileButtonClick(post.post.post_info.viewer_id)
              }
            />
            <div>
              <span>{post.post.post_info.post_author_nickname}</span>
              <p>
                {formatDate(post.post.post_info.created_at)}
                <LuDot />
                {timeAgoFormat(post.post.post_info.created_at)}
                <LuDot />
                {post.post.post_info.location_name}
              </p>
            </div>
          </S.Profile>
          <h1>{post.post.post_info.title}</h1>
          <img
            src={
              post.post.post_info.picture_urls &&
              post.post.post_info.picture_urls.length > 0
                ? post.post.post_info.picture_urls[0] // 이미지 여러 장 나오게 수정
                : 'https://buly.kr/AaoydRw'
            }
            alt="Post Image"
          />
          <h6>{post.post.post_info.content}</h6>
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
        <CommentList_chanmin
          comments={post.post.comments}
          onDeleteComment={deleteComment}
          postId={post.post.post_info.id}
        />
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
