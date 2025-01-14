import * as S from './BoardWritePage.style';
import { LuDot, LuMapPin } from 'react-icons/lu';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import TopicModal from '../../../components/feat4/TopicModal/TopicModal';

function BoardWritePage() {
  const [isActive, setIsActive] = useState(false); // 클릭 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [selectedTopic, setSelectedTopic] = useState('전체'); // 주제 상태
  const navigate = useNavigate();

  const handleSelectButtonClick = () => {
    setIsModalOpen(true);
    setIsActive(prev => !prev);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsActive(false);
  };

  const handleBack = () => {
    navigate(-1); // 이전 페이지
  };

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic); // 선택된 주제 업데이트
    setIsModalOpen(false);
    setIsActive(false);
  };

  return (
    <S.Container>
      <S.Header>
        <button className="cancel" onClick={handleBack}>
          취소
        </button>
        <S.TopicButton $active={isActive} onClick={handleSelectButtonClick}>
          주제
          <LuDot />
          {selectedTopic}&nbsp;
          {isActive ? <FaCaretUp /> : <FaCaretDown />}
        </S.TopicButton>
        <button className="complete">완료</button>
      </S.Header>

      <TopicModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onTopicSelect={handleTopicSelect}
      />

      <S.Content>
        <input placeholder="제목" />
        <textarea placeholder="위고의 즉흥여행러들과 이야기를 나눠보세요!" />
      </S.Content>

      <S.Region>
        <p>지역 선택</p>
        <span>
          <LuMapPin />
        </span>
      </S.Region>

      <S.Photo>
        <h1>사진 업로드</h1>
        <p>
          위고에서 즉흥 미션을 해결하며 여행했던 사진을 업로드 해주세요.
          <br />
          여행지와 관련 없거나 부적절한 사진을 등록하시는 경우, 사전경고 없이
          포인트 회수와 함께 사진이 삭제될 수 있습니다.
        </p>
        <S.UploadBox>
          <input type="file" accept="image" />
          <span>+</span>
          <span>0/5</span>
        </S.UploadBox>
      </S.Photo>
    </S.Container>
  );
}

export default BoardWritePage;
