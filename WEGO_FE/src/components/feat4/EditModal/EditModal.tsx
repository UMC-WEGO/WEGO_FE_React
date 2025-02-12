import * as S from './EditModal.style';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  onDelete,
  onEdit,
}) => {
  if (!isOpen) return null;

  const handleDeleteClick = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onDelete();
      onClose();
    }
  };

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={e => e.stopPropagation()}>
        <S.ButtonContainer>
          <S.TopicButton onClick={onEdit}>수정</S.TopicButton>
          <S.TopicButton onClick={handleDeleteClick}>삭제</S.TopicButton>
        </S.ButtonContainer>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default EditModal;
