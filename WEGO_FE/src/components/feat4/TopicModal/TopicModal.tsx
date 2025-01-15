import * as S from './TopicModal.style';

interface TopicModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTopicSelect: (topic: string) => void;
}

const TopicModal: React.FC<TopicModalProps> = ({
  isOpen,
  onClose,
  onTopicSelect,
}) => {
  if (!isOpen) return null;

  const handleTopicClick = (topic: string) => {
    onTopicSelect(topic);
  };

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={e => e.stopPropagation()}>
        <h2>글의 주제를 선택해주세요</h2>
        <p>주제는 한 가지만 선택 가능해요</p>
        <S.ButtonContainer>
          <div>
            <S.TopicButton onClick={() => handleTopicClick('즉흥 자랑')}>
              # 즉흥 자랑
            </S.TopicButton>
            <S.TopicButton onClick={() => handleTopicClick('미션 제안')}>
              # 미션 제안
            </S.TopicButton>
          </div>
          <div>
            <S.TopicButton onClick={() => handleTopicClick('현지 정보')}>
              # 현지 정보
            </S.TopicButton>
            <S.TopicButton onClick={() => handleTopicClick('즉흥 여행 팁')}>
              # 즉흥 여행 팁
            </S.TopicButton>
          </div>
        </S.ButtonContainer>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default TopicModal;
