import styled from 'styled-components';

// 고정 2개
const ScheduleMisstionsNextPageLayout = styled.div`
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
  align-items: center;
`;

const TopSection = styled.section`
  width: 100%;
  height: 29%; // 852 % 247 = 0.2899
  background-color: var(--color-main-blue);
`;
const MainSection = styled.section`
  width: 100%;
  height: 60%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MainTextBoxTop = styled.p`
  width: 150px;
  height: 21px;

  margin-top: 5px;

  font-family: 'Pretendard-semiBold';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height, or 117% */
  letter-spacing: -0.32px;

  color: #262626;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const MainTextBoxSub = styled.p`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 7px;
  margin-top: 5px;
  margin-bottom: 15px;

  width: 130px;
  height: 12px;

  font-size: 12px;
  /* Inside auto layout */
  flex: none;

  span {
    margin-left: -3px;
    color: var(--color-main-blue);
  }
`;

const MainMissionsBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const MainMissionsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export {
  ScheduleMisstionsNextPageLayout,
  ViewContainer,
  TopSection,
  MainSection,
  MainTextBoxTop,
  MainTextBoxSub,
  MainMissionsBoxWrapper,
  MainMissionsBox,
};
