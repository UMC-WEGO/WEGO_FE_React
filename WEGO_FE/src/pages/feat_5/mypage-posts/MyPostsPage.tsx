import * as S from './MyPostsPage.style';
import { useNavigate } from 'react-router-dom';
import Arrow from '../../../images/feat5/Arrow.svg';

function MyPostsPage() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Header>
        <button className="arrow-btn" onClick={() => navigate(-1)}>
          <img src={Arrow} alt="Arrow" className="arrow-img" />
        </button>
        <h1>내가 쓴 글</h1>
      </S.Header>
    </S.Container>
  );
}

export default MyPostsPage;
