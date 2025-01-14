import * as S from './MyProfileModifyPage.style';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { users } from '../../../mocks/feat5/UserData';
import Arrow from '../../../images/feat5/Arrow.svg';
import Profile_cam from '../../../images/feat5/Profile_cam.svg';
import ProfilePicButton from '../../../components/feat5/modify/ProfilePicButton';
import InputFieldWrapper from '../../../components/feat5/modify/InputWrapper';

function MyProfileModifyPage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const user = users.find(user => user.userId === userId);
  const [username, setUsername] = useState(user?.username || '');
  const [useremail, setUseremail] = useState(user?.useremail || '');
  const [profilePic, setProfilePic] = useState(user?.profilePic || '');
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    setIsModified(
      username !== user?.username ||
        useremail !== user?.useremail ||
        profilePic !== user?.profilePic,
    );
  }, [username, useremail, profilePic, user]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newProfilePic = URL.createObjectURL(e.target.files[0]);
      setProfilePic(newProfilePic);
    }
  };
  const handleProfilePictureClick = () => {
    const fileInput = document.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };
  const handleSave = () => {
    // UserData 업데이트(로컬 데이터만 변경)
    if (user) {
      user.username = username;
      user.useremail = useremail;
      user.profilePic = profilePic;
    }
    navigate(`/mypage/${userId}`); // 저장 후 페이지 이동
  };

  return (
    <S.Container>
      <S.Header>
        <button className="arrow-btn" onClick={() => navigate(-1)}>
          <img src={Arrow} alt="Arrow" className="arrow-img" />
        </button>
        <h1>프로필 수정</h1>
        <button className="text-btn" onClick={handleSave}>
          <h1 className={isModified ? 'modified' : ''}>완료</h1>
        </button>
      </S.Header>

      <S.ProfileContainer>
        {user ? (
          <>
            <ProfilePicButton
              profilePic={profilePic}
              onClick={handleProfilePictureClick}
            />
            <S.CameraButton onClick={handleProfilePictureClick}>
              <img src={Profile_cam} alt="Camera" />
            </S.CameraButton>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </>
        ) : (
          <div>찾을 수 없는 사용자</div>
        )}
      </S.ProfileContainer>

      <S.InputWrapper>
        <InputFieldWrapper
          label="닉네임"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="닉네임을 입력하세요."
        />
        <InputFieldWrapper
          label="이메일"
          value={useremail}
          onChange={e => setUseremail(e.target.value)}
          placeholder="이메일을 입력하세요."
        />
      </S.InputWrapper>
    </S.Container>
  );
}

export default MyProfileModifyPage;
