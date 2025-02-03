import * as S from './MyPostsPage.style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Arrow from '../../../images/feat5/Arrow.svg';
import PostButton from '../../../images/feat5/Post_button.svg';
import PostList from '../../../components/feat4/PostList';
import Modal from '../../../components/feat5/Modal/Modal';
import { userpostsApis } from '../../../apis/feat5/userpostsApis';
import { UserPostsData } from '../../../types/feat5/UserPostsData';

function MyPostsPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [allPosts, setAllPosts] = useState<UserPostsData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // API
  useEffect(() => {
    const fetchPostsData = async () => {
      try {
        const data = await userpostsApis();
        console.log('API 받은 데이터', data);
        setAllPosts(data.posts || []);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log('API Error', err.message);
          setError(err.message || 'error');
        } else {
          console.log('Unknown Error', err);
          setError('error');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPostsData();
  }, []);

  // 로딩, 에러처리
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // 해당 사용자 게시물 필터링
  const userPosts = Array.isArray(allPosts)
    ? allPosts.filter(post => post.userId)
    : [];

  const handleOpenModal = (postId: number) => {
    setSelectedPostId(postId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPostId(null);
    setIsModalOpen(false);
  };

  // 포스트 삭제 처리
  const handleDelete = () => {
    if (selectedPostId !== null) {
      const updatedPosts = allPosts.filter(
        post => post.postId !== selectedPostId,
      );
      setAllPosts(updatedPosts);
      handleCloseModal();
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
                    category: String(post.categoryId),
                    time: post.createdAt,
                    location: `${post.localId}`,
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
