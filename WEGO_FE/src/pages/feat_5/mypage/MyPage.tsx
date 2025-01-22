import * as S from './MyPage.style';
import Group from '../../../images/feat5/Group.svg';
import Alarm from '../../../images/feat5/alarm.svg';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Profile from '../../../components/feat5/Profile';
import ProfileMenu from '../../../components/feat5/ProfileMenu';
import TempContainer from '../../../components/feat5/Temperature';
import MenuList from '../../../components/feat5/MenuList';
import { users } from '../../../mocks/feat5/UserData';

function MyPage() {
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const user = users.find(user => user.userId === userId);

  const handleNavigate = (path: string) => {
    if (userId) {
      navigate(`/mypage/${userId}/${path}`);
    }
  };

  const handleCancel = () => {
    setShowLogoutModal(false);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const toggleLogoutModal = () => {
    setShowLogoutModal(!showLogoutModal);
  };

  if (!user) {
    return (
      <S.Container>
        <S.Header>
          <h1>마이페이지</h1>
        </S.Header>
        <S.ProfileContainer>
          <Profile></Profile>
        </S.ProfileContainer>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Header>
        <h1>마이페이지</h1>
        <img src={Group} alt="Group" className="group-img" />
        <img src={Alarm} alt="Alarm" className="alarm-img" />
      </S.Header>

      <S.ProfileContainer>
        <Profile></Profile>
      </S.ProfileContainer>
      <ProfileMenu handleNavigate={handleNavigate} />

      <S.TempContainer>
        <TempContainer />
      </S.TempContainer>

      <MenuList handleNavigate={handleNavigate} />

      <S.LogoutButton onClick={toggleLogoutModal}>로그아웃</S.LogoutButton>

      {showLogoutModal && (
        <S.LogoutModal>
          <S.ModalContent>
            <S.TextContainer>
              <p>정말 로그아웃 하시겠습니까?</p>
            </S.TextContainer>
            <S.DButtonContainer>
              <button className="cancel-btn" onClick={handleCancel}>
                취소
              </button>
              <button className="logout-btn" onClick={handleLogout}>
                로그아웃
              </button>
            </S.DButtonContainer>
          </S.ModalContent>
        </S.LogoutModal>
      )}
    </S.Container>
  );
}

export default MyPage;
