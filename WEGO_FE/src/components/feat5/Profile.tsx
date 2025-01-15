import * as S from './Profile.style';
import { useParams } from 'react-router-dom';
import { users } from '../../mocks/feat5/UserData';

function Profile() {
  const { userId } = useParams();
  const user = users.find(user => user.userId === userId);
  if (!user) {
    return <div>찾을 수 없는 사용자입니다.</div>;
  }

  return (
    <S.ProfileContainer>
      <S.ProfileHeader>
        <S.ProfilePic src={user.profilePic} alt="Profile Picture" />
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
  );
}

export default Profile;
