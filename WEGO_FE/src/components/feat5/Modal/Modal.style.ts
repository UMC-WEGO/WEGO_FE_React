import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 420px;
  height: 768px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
`;

export const ModalContent = styled.div`
  width: 270px;
  background: #f9f9f9;
  border-radius: 10px;
  text-align: center;
  padding-top: 20px;
  font-size: 14px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  border-top: 1px solid #d1d1d1;
  margin-top: 20px;

  button {
    flex: 1;
    padding: 12px 0;
    background: transparent;
    font-size: 14px;
    cursor: pointer;
  }

  .button1 {
    border-right: 1px solid #d1d1d1;
  }
`;
export const ConfirmOverlay = styled(ModalOverlay)`
  z-index: 1000; // 기존 모달보다 위에 표시
`;

export const ConfirmContent = styled(ModalContent)`
  width: 250px;
  p {
    font-size: 16px;
    color: #333;
  }
`;
