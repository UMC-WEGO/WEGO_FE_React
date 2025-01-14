import * as S from './BoardWritePage.style';
import { LuDot, LuMapPin } from 'react-icons/lu';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import TopicModal from '../../../components/feat4/TopicModal/TopicModal';

function BoardWritePage() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [selectedTopic, setSelectedTopic] = useState('전체'); // 선택된 주제
  const [title, setTitle] = useState(''); // 제목 상태
  const [content, setContent] = useState(''); // 내용 상태
  const navigate = useNavigate();

  // 주제 선택 버튼 -> 모달 열기
  const handleSelectButtonClick = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // 이전 페이지
  const handleBack = () => {
    navigate(-1);
  };

  // 주제 선택
  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic); // 선택된 주제
    setIsModalOpen(false);
  };

  // 완료 버튼 클릭
  const handleComplete = () => {
    console.log('완료:', { title, content, selectedTopic });
  };

  // 완료 버튼 활성화
  const isCompleteEnabled = title.trim() !== '' && content.trim() !== '';

  return (
    <S.Container>
      <S.Header>
        <button className="cancel" onClick={handleBack}>
          취소
        </button>
        <S.TopicButton $active={isModalOpen} onClick={handleSelectButtonClick}>
          주제
          <LuDot />
          {selectedTopic}&nbsp;
          {isModalOpen ? <FaCaretUp /> : <FaCaretDown />}
        </S.TopicButton>
        <S.CompleteButton
          $isActive={isCompleteEnabled}
          onClick={handleComplete}
          disabled={!isCompleteEnabled}
        >
          완료
        </S.CompleteButton>
      </S.Header>

      <TopicModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onTopicSelect={handleTopicSelect}
      />

      <S.Content>
        <input
          placeholder="제목"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="위고의 즉흥여행러들과 이야기를 나눠보세요!"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
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
