import * as S from './BoardDetailPage.style';
import { TbArrowLeft, TbShare2, TbDotsVertical } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPostByIdApi, deletePostApi } from '../../../apis/feat4/postApi';
import { PostInfo, Comment } from '../../../types/postType';
import {
  PiChatTextBold,
  PiThumbsUpBold,
  PiBookmarkSimpleBold,
} from 'react-icons/pi';
import { LuDot } from 'react-icons/lu';
import CommentList from '../../../components/feat4/CommentList/CommentList';
import CommentInput from '../../../components/feat4/CommentInput/CommentInput';
import EditModal from '../../../components/feat4/EditModal/EditModal';

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const year = date.getFullYear().toString().slice(2); // "2025" → "25"
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 2 → "02"
  const day = String(date.getDate()).padStart(2, '0'); // 9 → "09"
  const hours = String(date.getHours()).padStart(2, '0'); // 16 → "16"
  const minutes = String(date.getMinutes()).padStart(2, '0'); // 27 → "27"

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

  const [post, setPost] = useState<PostInfo | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

  useEffect(() => {
    const fetchPostData = async () => {
      if (!postId) return;
      try {
        setIsLoading(true);
        const data = await getPostByIdApi(Number(postId));
        if (data) {
          setPost(data.post.post_info);
          setComments(data.post.comments || []);
        } else {
          setIsError(true);
        }
      } catch (error) {
        console.error('게시글 불러오기 실패:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostData();
  }, [postId]);

  const [activeIcons, setActiveIcons] = useState({
    like: false,
    comment: false,
    scrap: false,
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
    setActiveIcons(prev => ({
      ...prev,
      [icon]: !prev[icon], // 클릭할 때마다 해당 아이콘의 상태를 토글
    }));
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
      state: { editPostData: post, postId: postId }, // 기존 게시글 데이터
    });
  };

  // 댓글 예시
  const addComment = (text: string) => {
    const newComment = {
      comment_author_name: '위고 사용자',
      comment_author_profile: 'https://buly.kr/G3CTK8F',
      comment_created_at: '방금 전',
      comment_content: text,
    };
    setComments(prev => [...prev, newComment as Comment]);
  };

  // 로딩
  if (isLoading) return <div>게시글 불러오는 중</div>;

  // 에러
  if (isError || !post) return <div>게시글을 찾을 수 없습니다.</div>;

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
          <p> # {post.category_name}</p>
          <S.Profile>
            <img src="https://buly.kr/CsipNnM" alt="Profile" />
            <div>
              <span>{post.post_author_nickname}</span>
              <p>
                {formatDate(post.created_at)}
                <LuDot />
                {timeAgoFormat(post.created_at)}
                <LuDot />
                {post.location_name}
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
            <p>공감 {post.total_like}</p>
          </span>
          <span onClick={() => handleClick('comment')}>
            <PiChatTextBold
              className={`icon ${activeIcons.comment ? 'active' : ''}`}
            />
            <p>댓글 {post.total_comment}</p>
          </span>
          <span onClick={() => handleClick('scrap')}>
            <PiBookmarkSimpleBold
              className={`icon ${activeIcons.scrap ? 'active' : ''}`}
            />
            <p>스크랩 {post.total_scrap}</p>
          </span>
        </S.Response>
        <S.CommentHr />
        <CommentList comments={comments} />
      </S.Scroll>

      <S.InputBox>
        <CommentInput onAddComment={addComment} />
      </S.InputBox>
    </S.Container>
  );
}

export default BoardDetailPage;
