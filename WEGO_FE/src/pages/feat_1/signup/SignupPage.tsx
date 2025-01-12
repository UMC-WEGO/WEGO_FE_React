import React, { useState } from 'react';
import * as S from './SignupPage.style';

import BackArrow from '../../../components/feat1/backArrow/BackArrow';
import EmailView from '../../../components/feat1/signupSubPages/EmailView';
import { useParams } from 'react-router';
import EmailVerificationView from '../../../components/feat1/signupSubPages/EmailVerificationView';
import PasswordView from '../../../components/feat1/signupSubPages/PasswordView';
import TermsView from '../../../components/feat1/signupSubPages/TermsView';
import NickNameView from '../../../components/feat1/signupSubPages/NickNameView';


function SignupPage() {
  // step : email - emailVerification - password - terms - nickName
  const { step } = useParams();

  // zustand + react-hook-form 정의

  return (
    <S.SignUpPageLayout>
      {/* 여기에서 viewContainer는 form 태그로 생성 */}
      <S.ViewContainer>
        <BackArrow />
        {/* 이 위치의 S.Mainsection => view 컴포넌트들로 대체, 각 컴포넌트에서 필요한 입력 항목 관리 상태값 props 전달 */}
        {step === 'email' && <EmailView />}
        {step === 'emailVerification' && <EmailVerificationView />}
        {step === 'password' && <PasswordView />}
        {step === 'terms' && <TermsView />}
        {step === 'nickname' && <NickNameView />}
      </S.ViewContainer>
    </S.SignUpPageLayout>
  );
}

export default SignupPage;
