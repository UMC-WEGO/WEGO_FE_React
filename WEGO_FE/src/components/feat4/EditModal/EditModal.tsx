import * as S from './EditModal.style';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent>
        <S.ButtonContainer>
          <S.TopicButton>수정</S.TopicButton>
          <S.TopicButton>삭제</S.TopicButton>
        </S.ButtonContainer>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default EditModal;
