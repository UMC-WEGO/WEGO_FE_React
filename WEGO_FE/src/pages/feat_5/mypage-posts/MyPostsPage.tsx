import * as S from './MyPostsPage.style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import Arrow from '../../../images/feat5/Arrow.svg';
import PostButton from '../../../images/feat5/Post_button.svg';
import PostList from '../../../components/feat4/PostList';
import Modal from '../../../components/feat5/Modal/Modal';
import {
  userpostsApis,
  deletepostsApis,
} from '../../../apis/feat5/userpostsApis';
import { UserPostsData } from '../../../types/feat5/UserPostsData';
import { Post } from '../../../types/feat5/UserPostsData'; // 삭제버튼
import Loading from '../../../components/feat5/Loading';
import ErrorMessage from '../../../components/feat5/ErrorMessage';

function MyPostsPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  // API (내가 쓴 글 조회)
  const { data, isLoading, error } = useQuery<UserPostsData, Error>({
    queryKey: ['userPosts'],
    queryFn: userpostsApis,
  });

  // API (내가 쓴 글 삭제)
  const deleteMutation = useMutation({
    mutationFn: (post_id: number) => deletepostsApis(post_id),
    onSuccess: (_, post_id) => {
      console.log('내가 쓴 글 삭제 성공');
      setUserPosts(prevPosts =>
        prevPosts.filter(post => post.postId !== post_id),
      );
      handleCloseModal();
    },
    onError: error => {
      console.error('내가 쓴 글 삭제 실패:', error);
    },
  });

  const [userPosts, setUserPosts] = useState<Array<Post>>([]);
  // useEffect로 데이터 설정
  useEffect(() => {
    if (data?.posts) {
      setUserPosts(data.posts.filter(post => post.userId));
    }
  }, [data]);

  // 로딩, 에러 처리
  if (isLoading) return <Loading />;
  if (error instanceof Error) return <ErrorMessage error={error} />;

  console.log('API 받은 데이터', data);

  const handleOpenModal = (postId: number) => {
    setSelectedPostId(postId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPostId(null);
    setIsModalOpen(false);
  };

  // 삭제 버튼
  const handleDelete = (selectedPostId: number) => {
    if (selectedPostId !== null) {
      deleteMutation.mutate(selectedPostId);
    }
  };

  // 내가 쓴 글 시간 계산
  const CalculateCreatedAt = (createdAt: string) => {
    const createdDate = new Date(createdAt);
    const now = new Date();
    const isToday =
      createdDate.getFullYear() === now.getFullYear() &&
      createdDate.getMonth() === now.getMonth() &&
      createdDate.getDate() === now.getDate();

    if (isToday) {
      const diffInHours = Math.floor(
        (now.getTime() - createdDate.getTime()) / (1000 * 60 * 60),
      );
      return diffInHours > 0 ? `${diffInHours}시간 전` : '방금 전';
    } else {
      return `${(createdDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}.${createdDate
        .getDate()
        .toString()
        .padStart(2, '0')}`;
    }
  };

  return (
    <S.Container>
      <S.Header>
        <button className="arrow-btn" onClick={() => navigate(-1)}>
          <img src={Arrow} alt="Arrow" className="arrow-img" />
        </button>
        <h1>내가 쓴 글</h1>
      </S.Header>

      <S.Content noScroll={userPosts.length === 0}>
        {userPosts.length > 0 ? (
          userPosts.map(post => (
            <S.PostWrapper key={post.postId}>
              <PostList // PostList 컴포넌트 사용
                posts={[
                  {
                    id: String(post.postId),
                    category: String(post.categoryId), // 카테고리 id가 아닌 문자열로 나와야 함
                    time: CalculateCreatedAt(post.createdAt),
                    location: `${post.localId}`, // 현재 지역 id인데, 지역 이름으로 바꾸어야 함
                    ...post,
                  },
                ]}
              />
              <S.Button onClick={() => handleOpenModal(post.postId)}>
                <img src={PostButton} alt="Post Button" />
              </S.Button>
            </S.PostWrapper>
          ))
        ) : (
          <S.NoPostMessage>작성한 글이 없습니다.</S.NoPostMessage>
        )}
      </S.Content>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onCancel={handleCloseModal}
          onDelete={handleDelete}
          postId={selectedPostId}
        />
      )}
    </S.Container>
  );
}

export default MyPostsPage;
