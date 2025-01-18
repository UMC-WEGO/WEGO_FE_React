import * as S from './AlertsPage.style';
import { TbArrowLeft } from 'react-icons/tb';
import { useNavigate } from 'react-router';
import AlertItem from '../../../components/feat4/AlertItem/AlertItem';

// 임시 알림 데이터
const alertsData = [
  {
    author: '기사식당',
    title: '이런 건 어떤가요',
    content: '갑자기 갓벌핑 ㅋㅋ',
    date: '01/12 13:05',
  },
  {
    author: '여행조아',
    title: '이런 건 어떤가요',
    content: '오 ㅋㅋ',
    date: '12/29 23:03',
  },
];

const AlertsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 이전 페이지
  };

  return (
    <S.Container>
      <S.Header>
        <span onClick={handleBack}>
          <TbArrowLeft />
        </span>
        <h3>알림</h3>
      </S.Header>

      <S.AlertList>
        {alertsData.map((alert, index) => (
          <AlertItem
            key={index}
            author={alert.author}
            title={alert.title}
            content={alert.content}
            date={alert.date}
          />
        ))}
      </S.AlertList>
    </S.Container>
  );
};

export default AlertsPage;
