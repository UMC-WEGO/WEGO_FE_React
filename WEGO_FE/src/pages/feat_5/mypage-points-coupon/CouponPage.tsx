import * as S from './CouponPage.style';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Arrow from '../../../images/feat5/Arrow.svg';
import p_warning from '../../../images/feat5/p_warning.svg';
import { users } from '../../../mocks/feat5/UserData';
import { allPoints } from '../../../mocks/feat5/PointsData';

function CouponPage() {
  const navigate = useNavigate();
  const { userId, pointId } = useParams();
  const userIndex = users.findIndex(user => user.userId === userId);
  const user = userIndex !== -1 ? users[userIndex] : null;
  const points = user ? Number(user.points.replace(',', '')) : 0;

  const selectedPoint = allPoints.find(item => item.pointId === pointId);

  const price = selectedPoint
    ? Number(selectedPoint.price.replace(',', ''))
    : 0;

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isConfirmModal, setIsConfirmModal] = useState(false);

  const handlePurchase = () => {
    if (points < price) {
      setModalMessage('현재 구매 불가한 쿠폰입니다.');
      setIsConfirmModal(false);
    } else {
      setModalMessage('네이버페이 쿠폰을 구매하시겠습니까?');
      setIsConfirmModal(true);
    }
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    if (!isConfirmModal) {
      navigate(-1);
    }
  };

  const confirmPurchase = () => {
    if (user) {
      users[userIndex].points = (points - price).toString();
      navigate(`./complete`);
    }

    closeModal();
  };

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <button className="arrow-btn" onClick={() => navigate(-1)}>
            <img src={Arrow} alt="Arrow" className="arrow-img" />
          </button>
          <h1>포인트 사용</h1>
        </S.Header>

        <S.PayContent>
          {selectedPoint ? (
            <div className="selected-point">
              <img src={selectedPoint.pointContent} alt={`${pointId} 콘텐츠`} />
            </div>
          ) : (
            <p>해당 쿠폰 정보를 찾을 수 없습니다.</p>
          )}
        </S.PayContent>

        <S.PointContent>
          <h1>네이버페이</h1>
          <h2>네이버페이 포인트 {Number(pointId).toLocaleString()}원</h2>{' '}
          <h3>{price.toLocaleString()}P</h3>
        </S.PointContent>

        <S.WarningContent>
          <img src={p_warning} alt={`유의사항`} />
        </S.WarningContent>

        <S.Purchase>
          <button onClick={handlePurchase}>구매하기</button>
        </S.Purchase>
      </S.Content>

      {modalVisible && (
        <S.PointModal>
          <S.ModalContent>
            <S.TextContainer>
              <p>{modalMessage}</p>
            </S.TextContainer>
            <S.DButtonContainer>
              {isConfirmModal ? (
                <>
                  <button className="cancel-btn" onClick={closeModal}>
                    취소
                  </button>
                  <button className="confirm-btn" onClick={confirmPurchase}>
                    확인
                  </button>
                </>
              ) : (
                <button className="confirm-btn" onClick={closeModal}>
                  확인
                </button>
              )}
            </S.DButtonContainer>
          </S.ModalContent>
        </S.PointModal>
      )}
    </S.Container>
  );
}

export default CouponPage;
