import * as S from './Profile.style';
import profile_circle from '../../images/feat5/profile_circle.svg';

// 추후 수정
const user = {
  username: 'tndbskrd',
  useremail: 'yunsookang0326@naver.com',
  profilePic: profile_circle,
  points: '1,400',
  trips: 3,
  missionsCompleted: 8,
};

function Profile() {
  return (
    <>
      <S.ProfileContainer>
        <S.ProfileHeader>
          <S.ProfilePic src={user.profilePic} alt="ProfilePicture" />
          <S.InfoSection>
            <S.InfoCard>
              <h3>{user.points}</h3>
              <p>포인트</p>
            </S.InfoCard>
            <S.InfoCard>
              <h3>{user.trips}</h3>
              <p>여행</p>
            </S.InfoCard>
            <S.InfoCard>
              <h3>{user.missionsCompleted}</h3>
              <p>미션 달성</p>
            </S.InfoCard>
          </S.InfoSection>
        </S.ProfileHeader>

        <S.UserInfo>
          <h3>{user.username}</h3>
          <p>{user.useremail}</p>
        </S.UserInfo>
      </S.ProfileContainer>
    </>
  );
}

export default Profile;
