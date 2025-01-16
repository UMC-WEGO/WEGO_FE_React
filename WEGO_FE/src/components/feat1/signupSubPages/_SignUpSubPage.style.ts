import styled from 'styled-components';
import * as S from '../../../pages/feat_1/signup/SignupPage.style';

const SignUpViewSection = styled(S.MainSection)`
  height: 100%;
`;

const SignUpInputsBox = styled(S.SignUpInputsBox)`
  align-items: flex-start;
`;

const SignUpTextBox = styled(S.SignUpTextBox)`
  height: 15%;
  margin-bottom: 10px;
`;

const SignUpErrorText = styled.p`
  font-family: 'Pretendard-500';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 11px;
  /* identical to box height, or 100% */
  letter-spacing: -0.32px;

  color: #dc0000;
`;

export { SignUpViewSection, SignUpInputsBox, SignUpTextBox, SignUpErrorText };
