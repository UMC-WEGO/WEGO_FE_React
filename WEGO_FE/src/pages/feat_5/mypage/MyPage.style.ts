import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 59px;
  margin-bottom: 90px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 20px;
  width: 100%;
  justify-content: space-between;
  position: relative;

  h1 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    letter-spacing: -0.32px;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.3199999928474426px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  .group-img {
    display: flex;
    cursor: pointer;
    position: absolute;
    right: 20px;
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  .alarm-img {
    display: flex;
    cursor: pointer;
    position: absolute;
    right: 32px;
    width: 6px;
    height: 6px;
    top: 0px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  height: 143px;
  align-items: center;
  position: relative;
  margin-top: 38px;
  padding-left: 15px;
  padding-right: 20px;
`;

export const ProfileMenu = styled.div`
  display: flex;
  height: 36px;
  justify-content: center;
  align-items: center;
  top: 267px;
  gap: 12px;
  padding-left: 20px;
  padding-right: 20px;

  button {
    width: 167px;
    height: 36px;
    border-radius: 6px 6px 6px 6px;
    border: 1px solid #a5a5a5;
    gap: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.3199999928474426px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    background-color: white;
    cursor: pointer;
  }
`;

export const TempContainer = styled.div`
  display: flex;
  height: 80px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 19px;
  margin-top: 36px;
  padding-left: 32px;

  button {
    display: flex;
    align-items: center;
    gap: 13px;
    font-size: 15px;
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: -0.3199999928474426px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    img {
      width: 19.46px;
      height: 19.87px;
      top: 0.07px;
      left: 0.27px;
      gap: 0px;
    }
  }
`;

export const LogoutButton = styled.div`
  border: none;
  padding-left: 32px;
  margin-top: 100px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.3199999928474426px;
  text-align: left;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-underline-position: from-font;
  text-decoration-skip-ink: auto;
  color: #a5a5a5;
`;

export const LogoutModal = styled.div`
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
  width: 270px;
  height: 104.5px;
  margin: 0px;
  gap: 0px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
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
  .logout-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    border: none;
    border-radius: 5px;
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

  .logout-btn {
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
