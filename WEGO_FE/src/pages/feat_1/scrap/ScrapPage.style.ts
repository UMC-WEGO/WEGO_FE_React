import styled from 'styled-components';

// 고정 2개
const ScrapPageLayout = styled.div`
  width: 100%;
  height: 100%;
  /* padding-top: 15px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ViewContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  p {
    margin-left: 26px;
    margin-top: 20px;
    font-family: pretendard-semiBold;
    font-size: 20px;
  }
`;

export { ScrapPageLayout, ViewContainer };
