import * as S from './MyProfileModifyPage.style';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { users } from '../../../mocks/feat5/UserData';
import Arrow from '../../../images/feat5/Arrow.svg';
import InputFieldWrapper from '../../../components/feat5/modify/InputWrapper';
import ProfilePicUpload from '../../../components/feat5/modify/ProfilePicUpload';
import { validateInputs } from '../../../utils/feat5/validation';
import {
  userinfoApis,
  userprofilemodifyApis,
} from '../../../apis/feat5/userinfoApis';

function MyProfileModifyPage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [isModified, setIsModified] = useState(false);
  const [error, setError] = useState<{ username: string; useremail: string }>({
    username: '',
    useremail: '',
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userData = await userinfoApis();
        if (userData) {
          setUsername(userData.nickname || '');
          setUseremail(userData.email || '');
          setProfilePic(userData.profile_image || null);
        }
      } catch (error) {
        console.error('사용자 정보 불러오기 실패', error);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const errors = validateInputs(username, useremail, [], userId);
    setError({
      username: errors.username || '',
      useremail: errors.useremail || '',
    });
    setIsModified(
      !errors.username &&
        !errors.useremail &&
        Boolean(
          username || useremail || (profilePic && profilePic instanceof File),
        ),
    );
  }, [username, useremail, profilePic, userId]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePic(file);
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

  const handleSave = async () => {
    try {
      const formData = new FormData();
      if (username) formData.append('nickname', username);
      if (useremail) formData.append('email', useremail);
      if (profilePic instanceof File) {
        console.log('1', profilePic);
        formData.append('profile_image', profilePic);
      } else if (profilePic && typeof profilePic === 'string') {
        console.log('2', profilePic);
        formData.append('profile_image', profilePic);
      }

      const result = await userprofilemodifyApis(formData);
      console.log('프로필 수정 완료', result);

      const updatedUserData = await userinfoApis();
      console.log('updatedUserData:', updatedUserData);
      if (updatedUserData && updatedUserData.profile_image) {
        setProfilePic(updatedUserData.profile_image);
      }

      navigate(`/mypage/${userId}`);
    } catch (error) {
      console.error('프로필 수정 실패', error);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <button className="arrow-btn" onClick={() => navigate(-1)}>
          <img src={Arrow} alt="Arrow" className="arrow-img" />
        </button>
        <h1>프로필 수정</h1>
        <button
          className={`text-btn ${isModified ? 'active' : ''}`}
          onClick={handleSave}
          disabled={!isModified}
        >
          <h1>완료</h1>
        </button>
      </S.Header>

      <ProfilePicUpload
        profilePic={
          profilePic instanceof File
            ? URL.createObjectURL(profilePic)
            : profilePic
        }
        handleProfilePictureClick={handleProfilePictureClick}
        handleFileChange={handleFileChange}
      />

      <S.InputWrapper>
        <InputFieldWrapper
          label="닉네임"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="닉네임을 입력하세요."
          error={error.username}
        />
        <InputFieldWrapper
          label="이메일"
          value={useremail}
          onChange={e => setUseremail(e.target.value)}
          placeholder="이메일을 입력하세요."
          error={error.useremail}
        />
      </S.InputWrapper>
    </S.Container>
  );
}

export default MyProfileModifyPage;
