import * as S from './BoardPage.style';
import { CgProfile, CgMathPlus } from 'react-icons/cg';
import { PiBellBold } from 'react-icons/pi';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import FreeBoard from '../../../components/feat4/FreeBoard/FreeBoard';
import PopularBoard from '../../../components/feat4/PopularBoard/PopularBoard';
import logoImg from '../../../images/feat1/logo.svg';
import Modal from '../../../components/feat4/Modal/Modal';

function BoardPage() {
  const [activeTab, setActiveTab] = useState('instant'); // 'instant' 또는 'popular'
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [savedData, setSavedData] = useState(null); // 임시 저장 데이터
  const navigate = useNavigate();

  const handleWriteButtonClick = () => {
    const savedData = localStorage.getItem('boardWriteData');

    if (savedData) {
      setSavedData(JSON.parse(savedData)); // 임시 저장된 데이터 가져오기
      setIsModalOpen(true); // 모달 열기
    } else {
      navigate(`/board/write`); // 임시 저장 데이터 없으면 글쓰기 페이지 이동
    }
  };

  const handleModalContinue = () => {
    setIsModalOpen(false);
    navigate('/board/write', { state: savedData }); // 임시 저장된 데이터를 가지고 글쓰기 페이지로 이동
  };

  const handleModalCancel = () => {
    localStorage.removeItem('boardWriteData');
    setIsModalOpen(false);
    navigate(`/board/write`);
  };

  const handleProfileButtonClick = () => {
    const tempAuthorId = '12345'; // 임시 아이디 값
    navigate(`/board/author/profile/${tempAuthorId}`);
  };

  const handleAlertButtonClick = () => {
    navigate(`/board/alert`);
  };

  return (
    <S.Container>
      <S.Header>
        <img src={logoImg} alt="Icon" />
        <div>
          <span onClick={handleProfileButtonClick}>
            <CgProfile />
          </span>
          <span onClick={handleAlertButtonClick}>
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

      <Modal
        isOpen={isModalOpen}
        onContinue={handleModalContinue} // 임시 저장된 글로 이어쓰기
        onCancel={handleModalCancel} // 모달 닫기
        message1="임시 저장된 글이 있습니다."
        message2="취소할 경우 기존 글이 삭제됩니다."
        buttontext="이어쓰기"
      />
    </S.Container>
  );
}

export default BoardPage;
