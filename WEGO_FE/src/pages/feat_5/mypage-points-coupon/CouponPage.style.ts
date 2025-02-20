import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 59px;
  flex-direction: column;
  margin-left: 0px;
  margin-right: 0px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20px;
  margin-bottom: 20px;
  margin-left: 6px;
  position: relative;

  h1 {
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.3199999928474426px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin: 0px;
  }

  .arrow-btn {
    position: absolute;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    height: 20px;
  }

  .arrow-btn {
    left: 14px;
  }

  .arrow-img {
    width: 20px;
    height: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: scroll;

  div {
    margin-bottom: 20px;
  }
`;

export const PayContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background: #f6f6f6;

  img {
    width: 100%;
    height: 300px;
  }
`;

export const PointContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 6px;
  margin-top: 0px;

  h1 {
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: -0.3199999928474426px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #a5a5a5;
    margin-bottom: 13px;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.3199999928474426px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #262626;
    margin-bottom: 24px;
  }

  h3 {
    font-size: 32px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -0.3199999928474426px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #000000;
  }
`;

export const WarningContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 21px;
  margin-right: 21px;
  padding-top: 25px;
  border-top: 1px solid #eaeaea;
`;

export const Purchase = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 30px;

  button {
    background: #0059ff;
    width: 388px;
    height: 50px;
    padding: 10px;
    gap: 10px;
    border-radius: 5px;
    color: white;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: -0.3199999928474426px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`;

export const PointModal = styled.div`
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
  width: 273px;
  height: 104.5px;
  margin: 0px;
  gap: 0px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f2f2f7;
`;

export const TextContainer = styled.div`
  width: 270px;
  height: 60px;
  padding: 19px 16px;
  padding-top: 20px;

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`;

export const DButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 269.5px;
  height: 45px;
  border-top: 1px solid #ddd;
  position: relative;

  .cancel-btn,
  .confirm-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f7;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 17px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    z-index: 2;
    width: 50%;
    height: 100%;

    &:hover {
      opacity: 0.8;
    }
  }

  .cancel-btn {
    color: black;
    border-right: 1px solid #ddd;
  }

  .confirm-btn {
    color: #0a7aff;
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
