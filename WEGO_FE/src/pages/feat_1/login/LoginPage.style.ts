import styled from 'styled-components';

interface StyledProps {
  borderOn?: string;
}

// 고정 2개
const LoginPageLayout = styled.div`
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
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const OAuth2Section = styled.section`
  margin-top: 30px;
  width: 80%;
  height: 14%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;

    color: #8b8b8b;
  }

  article {
    width: 35%;
    height: 3px;

    background: linear-gradient(
      269.97deg,
      #0059ff 4.18%,
      rgba(196, 196, 196, 0) 77.28%
    );
    transform: rotate(-180deg);
  }
  article:first-child {
    transform: rotate(-360deg);
  }
`;

// 하위 요소들
const LoginTextBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;

  font-family: Pretendard-Bold;
  font-size: 24px;
  line-height: 36px;

  color: #000000;
`;
const LoginInputsBox = styled.div`
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
const SubButtonsBox = styled.div<StyledProps>`
  button {
    background-color: transparent;
    color: var(--color-gray-400);
    font-size: 11px;
  }
  button:first-child {
    border-right: 1px solid rgba(165, 165, 165, 1);
    padding-right: 5px;
  }
  button:nth-child(2) {
    padding-left: 5px;
  }
  margin-top: -10px;
`;
const OAuth2TopBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const OAuth2IconsBox = styled.div`
  width: 60%;
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
`;

export {
  LoginPageLayout,
  ViewContainer,
  LogoSection,
  MainSection,
  OAuth2Section,
  LoginTextBox,
  LoginInputsBox,
  InputWrapper,
  PasswordOpenToggleButton,
  SubButtonsBox,
  OAuth2TopBox,
  OAuth2IconsBox,
};
