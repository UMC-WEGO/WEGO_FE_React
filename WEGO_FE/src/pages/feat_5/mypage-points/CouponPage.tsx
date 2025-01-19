import * as S from './CouponPage.style';
import { useNavigate, useParams } from 'react-router-dom';
import Arrow from '../../../images/feat5/Arrow.svg';
import p_warning from '../../../images/feat5/p_warning.svg';
import { users } from '../../../mocks/feat5/UserData';
import { allPoints } from '../../../mocks/feat5/PointsData';

function CouponPage() {
  const navigate = useNavigate();
  const { userId, pointId } = useParams();
  const user = users.find(user => user.userId === userId);
  const points = user ? user.points : '0';
  const selectedPoint = allPoints.find(item => item.pointId === pointId);
  const price = selectedPoint ? selectedPoint.price : '0';

  const handlePurchase = () => {
    if (points < price) {
      alert('포인트가 부족합니다. 구매할 수 없습니다.');
    } else {
      alert('진짜 구매하시겠습니까?');
    }
  };

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <button className="arrow-btn" onClick={() => navigate(-1)}>
            <img src={Arrow} alt="Arrow" className="arrow-img" />
          </button>
          <h1>포인트 사용</h1>
        </S.Header>

        <S.PayContent>
          {selectedPoint ? (
            <div className="selected-point">
              <img src={selectedPoint.pointContent} alt={`${pointId} 콘텐츠`} />
            </div>
          ) : (
            <p>해당 쿠폰 정보를 찾을 수 없습니다.</p>
          )}
        </S.PayContent>

        <S.PointContent>
          <h1>네이버페이</h1>
          <h2>네이버페이 포인트 {price}원</h2>
          <h3>{price}P</h3>
        </S.PointContent>

        <S.WarningContent>
          <img src={p_warning} alt={`유의사항`} />
        </S.WarningContent>

        <S.Purchase>
          <button onClick={handlePurchase}>구매하기</button>
        </S.Purchase>
      </S.Content>
    </S.Container>
  );
}

export default CouponPage;
