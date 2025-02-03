import * as S from './MyPostsPage.style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Arrow from '../../../images/feat5/Arrow.svg';
import PostButton from '../../../images/feat5/Post_button.svg';
import PostList from '../../../components/feat4/PostList';
import Modal from '../../../components/feat5/Modal/Modal';
import { userpostsApis } from '../../../apis/feat5/userpostsApis';
import { UserPostsData } from '../../../types/feat5/UserPostsData';
import { Post } from '../../../types/feat5/UserPostsData'; // 삭제버튼
import Loading from '../../../components/feat5/loading';
import ErrorMessage from '../../../components/feat5/ErrorMessage';

function MyPostsPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  // API
  const { data, isLoading, error } = useQuery<UserPostsData, Error>({
    queryKey: ['userPosts'],
    queryFn: userpostsApis,
  });

  // 삭제버튼
  const [userPosts, setUserPosts] = useState<Array<Post>>([]);
  // const userPosts = Array.isArray(data?.posts)
  //   ? data.posts.filter(post => post.userId)
  //   : [];

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

  // 삭제 버튼 / API 필요
  const handleDelete = () => {
    if (selectedPostId !== null) {
      const updatedPosts = userPosts.filter(
        post => post.postId !== selectedPostId,
      );
      setUserPosts(updatedPosts); //
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
