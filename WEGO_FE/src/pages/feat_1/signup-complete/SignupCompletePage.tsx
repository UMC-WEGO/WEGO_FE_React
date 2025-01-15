import React from 'react';
import * as S from '../signup/SignupPage.style';
import * as SS from './SignupCompletePage.style';
import CloseX from '../../../components/feat1/closeX/CloseX';
import styled from 'styled-components';
import Button from '../../../components/feat1/button/Button';

function SignupCompletePage() {
  return (
    <S.SignUpPageLayout>
      {/* 여기에서 viewContainer는 form 태그로 생성 */}
      <S.ViewContainer>
        <CloseX></CloseX>
        <SS.Re_MainSection>
          <SS.BoldText>
            지금 위고와 <br></br> 즉흥여행을 시작하세요!
          </SS.BoldText>
          <SS.SmallText>랜덤 여행지부터 즉흥 미션까지</SS.SmallText>
          <Button content="시작하기" color="--color-main-blue" />
        </SS.Re_MainSection>
      </S.ViewContainer>
    </S.SignUpPageLayout>
  );
}

export default SignupCompletePage;
