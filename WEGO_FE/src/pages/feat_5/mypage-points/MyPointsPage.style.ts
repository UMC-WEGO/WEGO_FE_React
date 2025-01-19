import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 59px;
  border-top: 1px solid #ddd;
  flex-direction: column;
  margin-left: 13px;
  margin-right: 13px;
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
    left: 7px;
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
`;

export const PointContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 6px;

  h1 {
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.3199999928474426px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin-bottom: 10px;
  }

  h2 {
    font-family: Pretendard;
    font-size: 36px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.3199999928474426px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #0059ff;
    margin-bottom: 20px;
  }

  h3 {
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.3199999928474426px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #a5a5a5;
  }
`;

export const PointsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 45px;

  .point-btn {
    background: none;
    border: none;
    cursor: pointer;

    img {
      width: 100%;
      height: auto;
      margin-bottom: 16.5px;
    }
  }
`;
