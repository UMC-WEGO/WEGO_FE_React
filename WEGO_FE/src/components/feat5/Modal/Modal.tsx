import { useNavigate } from 'react-router-dom';
import * as S from './modal.style';
import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onDelete: (postId: number) => void;
  postId: number | null;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onCancel,
  onDelete,
  postId,
}) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const navigate = useNavigate();

  // 수정 버튼 클릭 시 수정 페이지로 이동
  const handleEdit = () => {
    if (postId !== null) {
      navigate(`/board/detail/${postId}`);
    }
  };

  // 삭제 버튼 클릭 시 삭제 확인 모달 열기
  const handleDeleteClick = () => {
    setIsConfirmOpen(true);
  };

  // 삭제 확인 모달에서 삭제 클릭
  const handleDelete = () => {
    if (postId !== null) {
      onDelete(postId);
    }
  };

  // 삭제 확인 모달에서 취소 클릭
  const handleCancelDelete = () => {
    setIsConfirmOpen(false);
    onCancel();
  };

  if (!isOpen) return null;

  return (
    <S.ModalOverlay onClick={onCancel}>
      <S.ModalContent onClick={e => e.stopPropagation()}>
        {/* 메인 모달 */}
        <S.ButtonContainer>
          <button className="edit-btn" onClick={handleEdit}>
            수정
          </button>
          <button className="delete-btn" onClick={handleDeleteClick}>
            삭제
          </button>
        </S.ButtonContainer>

        {/* 삭제 확인 모달 */}
        {isConfirmOpen && (
          <S.ConfirmOverlay onClick={handleDelete}>
            <S.ConfirmContent onClick={e => e.stopPropagation()}>
              <S.TextContainer>
                <p>작성한 글을 삭제하시겠습니까?</p>
                <p>취소를 누르면 이전 화면으로 이동합니다.</p>
              </S.TextContainer>
              <S.DButtonContainer>
                <button className="cancel-btn" onClick={handleCancelDelete}>
                  취소
                </button>
                <button className="delete-btn" onClick={handleDelete}>
                  삭제
                </button>
              </S.DButtonContainer>
            </S.ConfirmContent>
          </S.ConfirmOverlay>
        )}
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
