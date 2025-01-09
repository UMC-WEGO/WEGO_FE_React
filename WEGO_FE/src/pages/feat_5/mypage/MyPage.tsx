import * as S from './MyPage.style';
import Group from '../../../images/feat5/Group.svg';
import alarm from '../../../images/feat5/alarm.svg';
import { useNavigate, useParams } from 'react-router-dom';
import Profile from '../../../components/feat5/Profile';
import ProfileMenu from '../../../components/feat5/ProfileMenu';
import TempContainer from '../../../components/feat5/Temperature';
import MenuList from '../../../components/feat5/MenuList';

function MyPage() {
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();
  const handleNavigate = (path: string) => {
    if (userId) {
      navigate(`/mypage/${userId}/${path}`);
    }
  };
  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <S.Container>
      <S.Header>
        <h1>마이페이지</h1>
        <img src={Group} alt="Group" className="group-img" />
        <img src={alarm} alt="Alarm" className="alarm-img" />
      </S.Header>

      <S.ProfileContainer>
        <Profile></Profile>
      </S.ProfileContainer>
      <ProfileMenu handleNavigate={handleNavigate} />

      <TempContainer />

      <MenuList handleNavigate={handleNavigate} />

      <S.LogoutButton onClick={handleLogout}>로그아웃</S.LogoutButton>

      {/* 인기 미션 */}
    </S.Container>
  );
}

export default MyPage;
