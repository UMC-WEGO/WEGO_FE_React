import * as S from './BoardPage.style';
import { CgProfile, CgMathPlus } from 'react-icons/cg';
import { PiBellBold } from 'react-icons/pi';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import FreeBoard from '../../../components/feat4/FreeBoard';
import PopularBoard from '../../../components/feat4/PopularBoard';
import logoImg from '../../../images/feat1/logo.svg';

function BoardPage() {
  const [activeTab, setActiveTab] = useState('instant'); // 'instant' 또는 'popular'
  const navigate = useNavigate();

  const handleWriteButtonClick = () => {
    navigate(`/board/write`);
  };

  return (
    <S.Container>
      <S.Header>
        <img src={logoImg} alt="Icon" />
        <div>
          <span>
            <CgProfile />
          </span>
          <span>
            <PiBellBold />
          </span>
        </div>
      </S.Header>

      {/* 탭 전환 */}
      <S.TabSwitcher>
        <button
          onClick={() => setActiveTab('instant')}
          className={activeTab === 'instant' ? 'active' : ''}
        >
          즉흥 게시판
        </button>
        <button
          onClick={() => setActiveTab('popular')}
          className={activeTab === 'popular' ? 'active' : ''}
        >
          인기
        </button>
      </S.TabSwitcher>

      {/* 조건부 렌더링으로 게시판 전환 */}
      {activeTab === 'instant' ? <FreeBoard /> : <PopularBoard />}

      <S.WriteButton onClick={handleWriteButtonClick}>
        <CgMathPlus /> 글쓰기
      </S.WriteButton>
    </S.Container>
  );
}

export default BoardPage;
