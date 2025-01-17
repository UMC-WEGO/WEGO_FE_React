import styled from 'styled-components';

// 고정 2개
const SignUpPageLayout = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
`;
const ViewContainer = styled.form`
  width: 95%;
  height: 100%;
  /* background-color: bisque; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

// 섹션 분리
const LogoSection = styled.section`
  width: 340px;
  height: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainSection = styled.div`
  width: 340px;
  height: 45%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 25px;
`;

// 하위 요소들
const SignInputLable = styled.label`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.32px;

  color: #0059FF;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  margin-top: 25px;
  margin-bottom: 15px;
`
const SignUpTextBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;

  font-family: Pretendard-Bold;
  font-size: 24px;
  line-height: 36px;

  color: #000000;

  margin-top: 30px;
`;
const SignUpInputsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;
const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;
const PasswordOpenToggleButton = styled.button`
  position: absolute;
  background-color: transparent;
  right: 15px;
  bottom: 13px;
  /* top: 10px; */
`;

export {
  SignUpPageLayout,
  ViewContainer,
  LogoSection,
  MainSection,
  SignInputLable,
  SignUpTextBox,
  SignUpInputsBox,
  InputWrapper,
  PasswordOpenToggleButton,
};
