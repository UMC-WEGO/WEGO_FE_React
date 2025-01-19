import * as S from './MyQAPage.style';
import { useNavigate, useParams } from 'react-router-dom';
import Arrow from '../../../images/feat5/Arrow.svg';
import { allQnA } from '../../../mocks/feat5/QnAData';

function MyQAPage() {
  const navigate = useNavigate();
  const { qId } = useParams();

  const qna = allQnA.find(item => item.qId === qId);

  if (!qna) {
    return <S.Container></S.Container>;
  }

  return (
    <S.Container>
      <S.Header>
        <button className="arrow-btn" onClick={() => navigate(-1)}>
          <img src={Arrow} alt="Arrow" className="arrow-img" />
        </button>
        <h1>자주 묻는 질문</h1>
      </S.Header>
      <S.Content>
        <h2>{qna.title}</h2>
        <img src={qna.content} alt={qna.title} />
      </S.Content>
    </S.Container>
  );
}

export default MyQAPage;
