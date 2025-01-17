import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  width: 420px;
  height: 837px;
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
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: 100vw;
  height: 203px;
  padding: 59px 44px 59px 44px;
  border-radius: 25px;
  background: #f9f9f9;
  font-size: 16px;
  margin-top: 638px;
  box-sizing: border-box;
  position: relative;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: 45px;
  padding: 10px;

  button {
    border: none;
    cursor: pointer;

    &.edit-btn {
      background-color: #f9f9f9;
      font-size: 16px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: -0.3199999928474426px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: #000000;
    }

    &.delete-btn {
      background-color: #f9f9f9;
      font-size: 16px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: -0.3199999928474426px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: #dc0000;
    }

    &:hover {
      opacity: 0.8; /* Add hover effect */
    }
  }
`;

export const ConfirmOverlay = styled(ModalOverlay)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
`;

export const ConfirmContent = styled(ModalContent)`
  width: 270px;
  height: 122.5px;
  margin: 0px;
  gap: 0px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  width: 270px;
  height: 78px;
  padding: 19px 16px;
  padding-top: 20px;

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.07800000160932541px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`;

export const DButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 269.5px;
  height: 44px;
  padding: 11px 8px 11px 8px;
  gap: 104px;
  border-top: 1px solid #ddd;
  position: relative;

  .cancel-btn {
    background-color: #f9f9f9;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: black;
    font-size: 17px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    z-index: 2;
    &:hover {
      opacity: 0.8;
    }
  }

  .delete-btn {
    background-color: #f9f9f9;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #0a7aff;
    font-size: 17px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    z-index: 2;
    &:hover {
      opacity: 0.8;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1px;
    height: 40px;
    background-color: #ddd;
    z-index: 1;
  }
`;
