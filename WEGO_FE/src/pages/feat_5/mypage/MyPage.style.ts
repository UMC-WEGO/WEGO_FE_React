import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 59px;
  margin-bottom: 90px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  flex-direction: column;
  font-family: Pretendard, sans-serif;
  overflow-y: auto;
  // max-height: 300px;
  // padding-right: 10px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 65px;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  position: relative;

  h1 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.32px;
    margin: 0;
  }

  .group-img {
    display: flex;
    cursor: pointer;
    position: absolute;
    right: 10px;
    width: 24px;
    height: 24px;
    margin-right: 20px;
  }

  .alarm-img {
    display: flex;
    cursor: pointer;
    position: absolute;
    right: 32px;
    width: 6px;
    height: 6px;
    top: 22px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  height: 143px;
  align-items: center;
  position: relative;
`;

export const ProfileMenu = styled.div`
  display: flex;
  height: 36px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
  top: 267px;
  gap: 12px;

  button {
    width: 185px;
    height: 36px;
    border-radius: 6px 6px 6px 6px;
    border: 1px solid #a5a5a5;
    width: Fixed (167px) px;
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
  height: 130px;
  border-bottom: 1px solid #ddd;
  padding-left: 20px;

  h1 {
    font-size: 15px;
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 19px;
  margin-top: 20px;
  padding-left: 20px;

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
  padding-left: 20px;
  margin-top: 70px;
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
