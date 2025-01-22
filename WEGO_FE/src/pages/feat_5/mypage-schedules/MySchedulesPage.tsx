import * as S from './MySchedulesPage.style';
import { useNavigate } from 'react-router-dom';
import Arrow from '../../../images/feat5/Arrow.svg';

function MySchedulesPage() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <button className="arrow-btn" onClick={() => navigate(-1)}>
            <img src={Arrow} alt="Arrow" className="arrow-img" />
          </button>
          <h1>지난 여행</h1>
        </S.Header>
      </S.Content>
    </S.Container>
  );
}

export default MySchedulesPage;
