import * as S from './MyProfileModifyPage.style';
import { useNavigate, useParams } from 'react-router-dom';
import { users } from '../../../mocks/feat5/UserData';
import Arrow from '../../../images/feat5/Arrow.svg';
import Profile_cam from '../../../images/feat5/Profile_cam.svg';

function MyProfileModifyPage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const user = users.find(user => user.userId === userId);
  const handleNavigate = () => {
    if (userId) {
      navigate(`/mypage/${userId}`);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <button className="arrow-btn" onClick={handleNavigate}>
          <img src={Arrow} alt="Arrow" className="arrow-img" />
        </button>
        <h1>프로필 수정</h1>
        <button className="text-btn" onClick={handleNavigate}>
          <h1>완료</h1>
        </button>
      </S.Header>

      <S.ProfileContainer>
        {user ? (
          <>
            <S.ProfilePic src={user.profilePic} alt="ProfilePicture" />
            <S.CameraButton onClick={handleNavigate}>
              <img src={Profile_cam} alt="Camera" className="camera-icon" />
            </S.CameraButton>
          </>
        ) : (
          <div>사용자를 찾을 수 없습니다.</div>
        )}
        {/* 경로 추후 수정 */}
        <S.CameraButton onClick={handleNavigate}>
          <img src={Profile_cam} alt="Camera" className="camera-icon" />
        </S.CameraButton>
      </S.ProfileContainer>

      <S.InputContainer></S.InputContainer>
    </S.Container>
  );
}

export default MyProfileModifyPage;
