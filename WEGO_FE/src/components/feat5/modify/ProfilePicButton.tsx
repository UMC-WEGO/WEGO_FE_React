import * as S from '../../../pages/feat_5/mypage-profile-modify/MyProfileModifyPage.style';
import profile_circle from '../../../images/feat5/profile_circle.svg';

interface ProfilePicButtonProps {
  profilePic: File | string | null;
  onClick: () => void;
}

const ProfilePicButton: React.FC<ProfilePicButtonProps> = ({
  profilePic,
  onClick,
}) => {
  const profilePicURL =
    profilePic instanceof File
      ? URL.createObjectURL(profilePic)
      : profilePic || profile_circle;

  return (
    <S.ProfilePicButton onClick={onClick}>
      <img src={profilePicURL} alt="Profile" />
    </S.ProfilePicButton>
  );
};
export default ProfilePicButton;
