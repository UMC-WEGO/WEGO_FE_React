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
  margin-top: 60px;
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
