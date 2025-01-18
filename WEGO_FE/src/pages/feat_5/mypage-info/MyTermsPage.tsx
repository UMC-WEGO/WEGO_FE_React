import * as S from './MyTermsPage.style';
import { useNavigate } from 'react-router-dom';
import Arrow from '../../../images/feat5/Arrow.svg';
import Terms from '../../../images/feat5/terms.svg';

function MyTermsPage() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <button className="arrow-btn" onClick={() => navigate(-1)}>
            <img src={Arrow} alt="Arrow" className="arrow-img" />
          </button>
          <h1>이용약관</h1>
        </S.Header>
        <img src={Terms} alt="Terms" />
        <div></div>
      </S.Content>
    </S.Container>
  );
}

export default MyTermsPage;
