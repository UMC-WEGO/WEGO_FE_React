import styled from 'styled-components';
import * as SS from '../../../components/feat1/signupSubPages/_SignUpSubPage.style';

// 고정 2개
const PasswordFindPageLayout = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
`;
const ViewContainer = styled.div`
  width: 95%;
  height: 100%;
  /* background-color: bisque; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 섹션 분리
const LogoSection = styled.section`
  height: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainSection = styled.form`
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;
const PasswordTextBox = styled.div`
  width: 100%;
  height: 18%;
  display: flex;
  align-items: center;

  font-family: Pretendard-Bold;
  font-size: 24px;
  line-height: 36px;

  color: #000000;
`;

const PasswordInputsBox = styled(SS.SignUpInputsBox)`
  position: relative;
  margin-bottom: 30px;
  &:nth-child(3) {
    margin-bottom: 70px;
  }
`;
const PasswordInputWrapper = styled.div`
  display: flex;
  width: 100%;
  button {
    position: absolute;
    right: 22px;
    top: 33px;
    color: white;
  }
`;

const VerifyButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  font-size: 14px;

  width: 100px;
  height: 40px;

  background: #0059ff;
  border-radius: 40px;
`;

export {
  PasswordFindPageLayout,
  ViewContainer,
  LogoSection,
  MainSection,
  PasswordTextBox,
  PasswordInputsBox,
  PasswordInputWrapper,
  VerifyButton,
};
