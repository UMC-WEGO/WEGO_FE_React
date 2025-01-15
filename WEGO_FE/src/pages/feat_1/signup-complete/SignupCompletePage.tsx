import React from 'react';
import * as S from '../signup/SignupPage.style';
import CloseX from '../../../components/feat1/closeX/CloseX';
import styled from 'styled-components';
import Button from '../../../components/feat1/button/Button';

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
`;

function SignupCompletePage() {
  return (
    <S.SignUpPageLayout>
      {/* 여기에서 viewContainer는 form 태그로 생성 */}
      <S.ViewContainer>
        <CloseX></CloseX>
        <Re_MainSection>
          <BoldText>
            지금 위고와 <br></br> 즉흥여행을 시작하세요!
          </BoldText>
          <SmallText>랜덤 여행지부터 즉흥 미션까지</SmallText>
          <Button content="시작하기" color="--color-main-blue" />
        </Re_MainSection>
      </S.ViewContainer>
    </S.SignUpPageLayout>
  );
}

export default SignupCompletePage;
