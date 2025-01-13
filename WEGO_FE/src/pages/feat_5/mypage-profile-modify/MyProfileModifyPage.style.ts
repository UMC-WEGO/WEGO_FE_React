import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 59px;
  border-top: 1px solid #ddd;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20px;
  border-bottom: 1px solid #ddd;
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

  .arrow-btn,
  .text-btn {
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
    left: 1px;
  }

  .text-btn {
    right: 1px;
  }

  .arrow-img {
    width: 20px;
    height: 20px;
  }

  .text-btn h1 {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.32px;
    text-align: right;
    color: #d9d9d9;
    margin: 0;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  border-bottom: 1px solid #ddd;
`;

export const ProfilePic = styled.img`
  width: 109px;
  height: 100px;
  border-radius: 50%;
  margin-top: 43px;
  position: relative;
`;

export const CameraButton = styled.button`
  position: absolute;
  top: 99px;
  left: 215px;
  background: none;
  cursor: pointer;
  border: none;

  .camera-icon {
    width: 36px;
    height: 36px;
  }
`;

export const InputContainer = styled.div``;
