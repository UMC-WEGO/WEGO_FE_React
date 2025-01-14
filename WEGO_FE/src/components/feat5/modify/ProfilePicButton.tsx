import * as S from '../../../pages/feat_5/mypage-profile-modify/MyProfileModifyPage.style';

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
        <img src={profilePic} alt="Default Profile" />
      )}
    </S.ProfilePicButton>
  );
};

export default ProfilePicButton;
