import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 59px;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20px;
  margin-bottom: 96px;
  position: relative;

  .x-btn {
    position: absolute;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    height: 20px;
  }

  .x-btn {
    left: 373px;
  }

  .x-img {
    width: 24px;
    height: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const PointContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 27px;

  h1 {
    font-size: 35px;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: -0.3199999928474426px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #0059ff;
    margin-bottom: 19px;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.3199999928474426px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #262626;
    margin-bottom: 19px;
  }
`;

export const GoHome = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 438px;

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
