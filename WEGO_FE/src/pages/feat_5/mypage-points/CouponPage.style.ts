import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 59px;
  border-top: 1px solid #ddd;
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
    left: 20px;
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

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar {
    display: none;
  }

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
    font-family: Pretendard;
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
    font-family: Pretendard;
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
    font-family: Pretendard;
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
