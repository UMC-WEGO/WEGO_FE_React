import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 59px;
  border-top: 1px solid #ddd;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20px;
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
    transition: color 0.3s ease;
  }

  .text-btn.active h1 {
    color: #0059ff;
    cursor: pointer;
  }

  .text-btn:disabled {
    cursor: not-allowed;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-bottom: 38px;
`;

export const ProfilePicButton = styled.button`
  background: none;
  padding: 0;
  border-radius: 50%;
  margin-top: 43px;
  cursor: pointer;
  border: 1px solid #a5a5a5;

  img {
    width: 100px;
    height: 100px;
    display: block;
    border-radius: 50%;
  }
`;

export const CameraButton = styled.button`
  position: absolute;
  top: 99px;
  left: 215px;
  background: none;
  cursor: pointer;
  border: none;

  img {
    width: 36px;
    height: 36px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 19px;
`;

export const InputContainer = styled.div`
  height: 66px;
  margin: 0px;
  h1 {
    margin: 0px;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.3199999928474426px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`;

export const ErrorMessage = styled.div`
  height: 11px;
  color: #dc0000;
  font-size: 11px;
  font-weight: 500;
  line-height: 11px;
  letter-spacing: -0.3199999928474426px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-top: 0;
`;
