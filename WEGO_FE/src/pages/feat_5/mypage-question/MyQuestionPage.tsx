import * as S from './MyQuestionPage.style';
import { useNavigate } from 'react-router-dom';
import Arrow from '../../../images/feat5/Arrow.svg';
import { allQnA } from '../../../mocks/feat5/QnAData';

function MyQuestionPage() {
  const navigate = useNavigate();

  const handleQuestionClick = (qId: string) => {
    navigate(`./${qId}`);
  };

  return (
    <S.Container>
      <S.Header>
        <button className="arrow-btn" onClick={() => navigate(-1)}>
          <img src={Arrow} alt="Arrow" className="arrow-img" />
        </button>
        <h1>자주 묻는 질문</h1>
      </S.Header>
      <S.Content>
        <h1>사용자들이 자주 묻는 질문을 확인해보세요</h1>
        <S.QuestionList>
          {/* qId 10인 경우 따로 디자인 */}
          {allQnA.map(({ qId, title }) => (
            <S.QuestionItem
              key={qId}
              onClick={() => handleQuestionClick(qId)}
              className={qId === '10' ? 'last-item' : ''}
            >
              <p>
                <span className="qId">{qId}</span>{' '}
                <span className="title">{title}</span>
              </p>
            </S.QuestionItem>
          ))}
        </S.QuestionList>
      </S.Content>
    </S.Container>
  );
}

export default MyQuestionPage;
