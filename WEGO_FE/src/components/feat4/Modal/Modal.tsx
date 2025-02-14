import * as S from './Modal.style';

interface ModalProps {
  isOpen: boolean;
  onContinue: () => void;
  onCancel: () => void;
  message1: string;
  message2: string;
  buttontext: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onContinue,
  onCancel,
  message1,
  message2,
  buttontext,
}) => {
  if (!isOpen) return null;

  return (
    <S.ModalOverlay onClick={onCancel}>
      <S.ModalContent onClick={e => e.stopPropagation()}>
        <p>{message1}</p>
        <p>{message2}</p>
        <S.ButtonContainer>
          <button className="button1" onClick={onCancel}>
            취소
          </button>
          <button onClick={onContinue}>{buttontext}</button>
        </S.ButtonContainer>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
