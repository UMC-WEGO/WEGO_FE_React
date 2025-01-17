import * as S from './MyQuestionPage.style';
import { useNavigate } from 'react-router-dom';
import Arrow from '../../../images/feat5/Arrow.svg';

function MyQuestionPage() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Header>
        <button className="arrow-btn" onClick={() => navigate(-1)}>
          <img src={Arrow} alt="Arrow" className="arrow-img" />
        </button>
        <h1>자주 묻는 질문</h1>
      </S.Header>
      <S.Content></S.Content>
    </S.Container>
  );
}

export default MyQuestionPage;
