import * as S from '../../pages/feat_5/mypage/MyPage.style';

interface ProfileProps {
  handleNavigate: (path: string) => void;
}

function ProfileMenu({ handleNavigate }: ProfileProps) {
  return (
    <S.ProfileMenu>
      <button onClick={() => handleNavigate('profile/modify')}>
        프로필 수정
      </button>
      <button onClick={() => handleNavigate('schedules')}>지난 여행</button>
    </S.ProfileMenu>
  );
}

export default ProfileMenu;
