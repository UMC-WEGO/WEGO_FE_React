import * as S from './Profile.style';
import { UserInfoData } from '../../../types/feat5/UserInfoData';

interface ProfileProps {
  userData: UserInfoData;
}

function Profile({ userData }: ProfileProps) {
  return (
    <S.ProfileContainer>
      <S.ProfileHeader>
        <S.ProfilePic src={userData.profile_image} alt="Profile Picture" />
        <S.InfoSection>
          <S.InfoCard>
            <h3>{userData.point}</h3>
            <p>포인트</p>
          </S.InfoCard>
          <S.InfoCard>
            <h3>{userData.travelCount}</h3>
            <p>여행</p>
          </S.InfoCard>
          <S.InfoCard>
            {/* 0 처리 */}
            <h3>{userData.completedMissions ?? 'X'}</h3>
            <p>미션 달성</p>
          </S.InfoCard>
        </S.InfoSection>
      </S.ProfileHeader>

      <S.UserInfo>
        <h3>{userData.nickname}</h3>
        <p>{userData.email}</p>
      </S.UserInfo>
    </S.ProfileContainer>
  );
}

export default Profile;
