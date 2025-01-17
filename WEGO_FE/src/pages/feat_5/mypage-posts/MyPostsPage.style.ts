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
  margin-bottom: 5px;
  position: relative;
  border-bottom: 1px solid #ddd;
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
    left: 10px;
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
  overflow: hidden; /* 기본 스크롤 숨기기 */

  /* 스크롤을 할 수 있는 컨테이너 */
  &::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* 스크롤바 트랙 배경색 */
  }

  /* 기본 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }

  /* 스크롤 활성화 */
  overflow-y: scroll; /* 세로 스크롤 활성화 */
`;

export const PostWrapper = styled.div`
  position: relative;
`;

export const Button = styled.div`
  position: absolute;
  top: 14px;
  right: 15px;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;

  img {
    width: 16px;
    height: 16px;
  }
`;
