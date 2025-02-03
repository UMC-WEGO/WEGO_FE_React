import * as S from './MyPage.style';
import Group from '../../../images/feat5/Group.svg';
import Alarm from '../../../images/feat5/alarm.svg';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Profile from '../../../components/feat5/MypageHome/Profile';
import ProfileMenu from '../../../components/feat5/MypageHome/ProfileMenu';
import TempContainer from '../../../components/feat5/MypageHome/Temperature';
import MenuList from '../../../components/feat5/MypageHome/MenuList';
import { userinfoApis } from '../../../apis/feat5/userinfoApis';
import { UserInfoData } from '../../../types/feat5/UserInfoData';

function MyPage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const urlUserId = userId; // url에 있는 userId
  const [userData, setUserData] = useState<UserInfoData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await userinfoApis();
        console.log('API 받은 데이터', data);
        setUserData(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log('API Error:', err.message);
          setError(err.message || 'error');
        } else {
          console.log('Unknown Error:', err);
          setError('error');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // 로딩, 에러처리
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // user_id가 다른 경우 접근 처리
  if (userData && urlUserId !== String(userData.user_id)) {
    return (
      <S.Container>
        <S.Header>
          <h1>마이페이지</h1>
        </S.Header>
        <p className="noaccess">
          잘못된 접근입니다.
          <span className="line">다시 시도해주세요!</span>
        </p>
      </S.Container>
    );
  }

  // 경로 이동
  const handleNavigate = (path: string) => {
    if (userData) {
      navigate(`/mypage/${userData.user_id}/${path}`);
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

  if (!userData) {
    return (
      <S.Container>
        <S.Header>
          <h1>마이페이지</h1>
        </S.Header>
        <p className="noaccess">사용자 정보를 찾을 수 없습니다.</p>
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
        <Profile userData={userData} />
      </S.ProfileContainer>
      <ProfileMenu handleNavigate={handleNavigate} />

      <S.TempContainer>
        <TempContainer temperature={userData.temperature} />{' '}
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
