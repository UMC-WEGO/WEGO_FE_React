import * as S from '../../../pages/feat_5/mypage-profile-modify/MyProfileModifyPage.style';
import profile_circle from '../../../images/feat5/profile_circle.svg';

interface ProfilePicButtonProps {
  profilePic: string;
  onClick: () => void;
}

const ProfilePicButton: React.FC<ProfilePicButtonProps> = ({
  profilePic,
  onClick,
}) => {
  return (
    <S.ProfilePicButton onClick={onClick}>
      {profilePic ? (
        <img src={profilePic} alt="Profile" />
      ) : (
        <img src={profile_circle} alt="Default Profile" />
      )}
    </S.ProfilePicButton>
  );
};

export default ProfilePicButton;
