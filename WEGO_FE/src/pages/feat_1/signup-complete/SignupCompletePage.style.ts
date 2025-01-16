import styled from 'styled-components';
import * as S from '../signup/SignupPage.style';

const Re_MainSection = styled(S.MainSection)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
`;

const SmallText = styled.p`
  /* 환영합니다! */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  /* identical to box height, or 100% */
  text-align: center;
  letter-spacing: -0.32px;

  color: #8a8a8a;

  margin-bottom: 50px;
`;

const BoldText = styled.p`
  /* (회원가입 환영 메시지) */

  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  /* or 150% */
  text-align: center;

  color: #000000;

  margin-bottom: 20px;
`;
export { Re_MainSection, SmallText, BoldText };
