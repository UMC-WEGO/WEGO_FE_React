import * as S from './Modal.style';

interface ModalProps {
  isOpen: boolean;
  onContinue: () => void;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onContinue, onCancel }) => {
  if (!isOpen) return null;

  return (
    <S.ModalOverlay onClick={onCancel}>
      <S.ModalContent onClick={e => e.stopPropagation()}>
        <p>작성된 글을 임시저장 하시겠습니까?</p>
        <p>취소할 경우 글이 삭제됩니다.</p>
        <S.ButtonContainer>
          <button className="button1" onClick={onCancel}>
            취소
          </button>
          <button onClick={onContinue}>임시저장</button>
        </S.ButtonContainer>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
