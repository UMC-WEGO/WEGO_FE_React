import * as S from './MyPointsCompletePage.style';
import { useNavigate } from 'react-router-dom';
import X from '../../../images/feat5/X.svg';

function MyPointsCompletePage() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <button className="x-btn" onClick={() => navigate(-2)}>
            <img src={X} alt="x" className="x-img" />
          </button>
        </S.Header>
        <S.PointContent>
          <h1>구매 완료!</h1>
          <h2>1일 내 이메일로 구매 상품을 보내드립니다.</h2>
        </S.PointContent>
        <S.GoHome>
          <button onClick={() => navigate('/home')}>홈으로</button>
        </S.GoHome>
      </S.Content>
    </S.Container>
  );
}

export default MyPointsCompletePage;
