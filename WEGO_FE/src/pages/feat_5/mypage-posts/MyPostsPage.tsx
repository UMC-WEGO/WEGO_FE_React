import * as S from './MyPostsPage.style';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Arrow from '../../../images/feat5/Arrow.svg';
import PostButton from '../../../images/feat5/Post_button.svg';
import PostList from '../../../components/feat4/PostList';
import { allPosts as initialPosts } from '../../../mocks/board/postData';
import { users } from '../../../mocks/feat5/UserData';
import Modal from '../../../components/feat5/Modal/Modal';

function MyPostsPage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [allPosts, setAllPosts] = useState(initialPosts);

  const user = users.find(user => user.userId === userId);
  if (!user) {
    return <div>찾을 수 없는 사용자</div>;
  }

  // 추후 post.userId로 수정해야 함 !!!
  const userPosts = allPosts.filter(post => post.id === userId);

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
        post => post.id !== String(selectedPostId),
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
      <S.Content>
        {userPosts.map(post => (
          <S.PostWrapper key={post.id}>
            <PostList posts={[post]} />
            <S.Button onClick={() => handleOpenModal(Number(post.id))}>
              <img src={PostButton} alt="Post Button" />
            </S.Button>
          </S.PostWrapper>
        ))}
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
