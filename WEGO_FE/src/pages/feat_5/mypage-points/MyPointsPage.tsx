import * as S from './MyPointsPage.style';
import { useNavigate, useParams } from 'react-router-dom';
import Arrow from '../../../images/feat5/Arrow.svg';
import { users } from '../../../mocks/feat5/UserData';
import { allPoints } from '../../../mocks/feat5/PointsData';

function MyPointsPage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const user = users.find(user => user.userId === userId);
  const points = user ? user.points : '0';

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <button className="arrow-btn" onClick={() => navigate(-1)}>
            <img src={Arrow} alt="Arrow" className="arrow-img" />
          </button>
          <h1>포인트 사용</h1>
        </S.Header>

        <S.PointContent>
          <h1>보유 포인트</h1>
          <h2>{points}P</h2>
          <h3>구매 시 1일 내로 가입한 이메일로 발송해 드려요.</h3>
        </S.PointContent>

        <S.PointsGrid>
          {allPoints.map(item => (
            <button
              key={item.pointId}
              className="point-btn"
              onClick={() => navigate(`./${item.pointId}`)}
            >
              <img src={item.btn} alt={`${item.price} 쿠폰`} />
            </button>
          ))}
        </S.PointsGrid>
      </S.Content>
    </S.Container>
  );
}

export default MyPointsPage;
