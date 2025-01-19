import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 59px;
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
  margin-bottom: 5px;
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
    left: -1px;
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
  margin-top: 29px;
  border-top: 1px solid #eaeaea;

  h1 {
    font-size: 13px;
    font-weight: 600;
    line-height: 13px;
    letter-spacing: -0.3199999928474426px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #a5a5a5;
  }
`;

export const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
`;

export const QuestionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0px;
  cursor: pointer;
  border-bottom: 1px solid #eaeaea;

  p {
    margin-bottom: 8px;
    font-size: 16px;

    .qId {
      color: #0059ff;
      font-size: 16px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: -0.3199999928474426px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    }

    .title {
      color: #262626;
      font-size: 15px;
      font-weight: 500;
      line-height: 15px;
      letter-spacing: -0.3199999928474426px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      margin-left: 16px;
    }
  }

  &.last-item {
    border-bottom: none;

    .title {
      margin-left: 10.5px;
    }
  }
`;
