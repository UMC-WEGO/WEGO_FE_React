import * as S from './MyPrivacyPage.style';
import { useNavigate } from 'react-router-dom';
import Arrow from '../../../images/feat5/Arrow.svg';
import Privacy from '../../../images/feat5/privacy.svg';

function MyPrivacyPage() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <button className="arrow-btn" onClick={() => navigate(-1)}>
            <img src={Arrow} alt="Arrow" className="arrow-img" />
          </button>
          <h1>개인정보 수집 · 이용 동의서</h1>
        </S.Header>
        <img src={Privacy} alt="Privacy" />
        <div></div>
      </S.Content>
    </S.Container>
  );
}

export default MyPrivacyPage;
