import * as S from './MyPostsPage.style';
import { useNavigate, useParams } from 'react-router-dom';
import Arrow from '../../../images/feat5/Arrow.svg';
import PostButton from '../../../images/feat5/Post_button.svg';
import PostList from '../../../components/feat4/PostList';
import { allPosts } from '../../../mocks/board/postData';
import { users } from '../../../mocks/feat5/UserData';

function MyPostsPage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const user = users.find(user => user.userId === userId);
  if (!user) {
    return <div>찾을 수 없는 사용자</div>;
  }
  const userPosts = allPosts.filter(post => post.id === userId);

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
            <S.Button>
              <img src={PostButton} alt="Post Button" />
            </S.Button>
          </S.PostWrapper>
        ))}
      </S.Content>
    </S.Container>
  );
}

export default MyPostsPage;
