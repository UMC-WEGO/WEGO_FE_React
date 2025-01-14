import * as S from '../../../pages/feat_5/mypage-profile-modify/MyProfileModifyPage.style';
import ProfilePicButton from './ProfilePicButton';
import Profile_cam from '../../../images/feat5/Profile_cam.svg';

interface ProfilePicUploadProps {
  profilePic: string;
  handleProfilePictureClick: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfilePicUpload: React.FC<ProfilePicUploadProps> = ({
  profilePic,
  handleProfilePictureClick,
  handleFileChange,
}) => {
  return (
    <S.ProfileContainer>
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
    </S.ProfileContainer>
  );
};

export default ProfilePicUpload;
