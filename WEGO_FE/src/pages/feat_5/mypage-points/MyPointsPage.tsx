import * as S from './MyPointsPage.style';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Arrow from '../../../images/feat5/Arrow.svg';
// import { users } from '../../../mocks/feat5/UserData';
import { allPoints } from '../../../mocks/feat5/PointsData';
import { userinfoApis } from '../../../apis/feat5/userinfoApis';
import Loading from '../../../components/feat5/Loading';
import ErrorMessage from '../../../components/feat5/ErrorMessage';

function MyPointsPage() {
  const navigate = useNavigate();

  // API
  const { data, isLoading, error } = useQuery({
    queryKey: ['userData'],
    queryFn: userinfoApis,
  });

  // 로딩, 에러 처리
  if (isLoading) return <Loading />;
  if (error instanceof Error) return <ErrorMessage error={error} />;

  console.log('API 받은 데이터', data);

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
          <h2>{data.point}P</h2>
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
