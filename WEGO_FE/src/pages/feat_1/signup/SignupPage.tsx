import React, { useEffect, useState } from 'react';
import * as S from './SignupPage.style';

import BackArrow from '../../../components/feat1/backArrow/BackArrow';
import EmailView from '../../../components/feat1/signupSubPages/EmailView';
import { useParams } from 'react-router';
import EmailVerificationView from '../../../components/feat1/signupSubPages/EmailVerificationView';
import PasswordView from '../../../components/feat1/signupSubPages/PasswordView';
import TermsView from '../../../components/feat1/signupSubPages/TermsView';
import NickNameView from '../../../components/feat1/signupSubPages/NickNameView';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpSchema } from '../../../constants/schema';
import {
  TSignUpFormData,
  TReturnsOfUseForm,
} from '../../../types/SignUpFormData';
import { useSignUpStore } from '../../../store/signup/useSignUpStore';

function SignupPage() {
  // step : email - emailVerification - password - terms - nickName
  const { step } = useParams();

  const initVal: TSignUpFormData = {
    email: '',
    verificationCode: '',
    password: '',
    passwordCheck: '',
    termsAgree: false,
    nickname: '',
  };

  // react-hook-form 정의 + zustand 사용안함
  const returnsOfUseForm: TReturnsOfUseForm<TSignUpFormData> =
    useForm<TSignUpFormData>({
      mode: 'onChange',
      resolver: yupResolver(SignUpSchema),
      defaultValues: initVal, // zustand 상태를 기본값으로 설정
    });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = returnsOfUseForm;

  const postSignUp = async data => {
    // api 로직
  };

  const onSubmit = data => {
    console.log('폼 데이터 제출');
    console.log(data);
    postSignUp(data);
  };

  return (
    <S.SignUpPageLayout>
      {/* 여기에서 viewContainer는 form 태그로 생성 */}
      <S.ViewContainer>
        <BackArrow />
        {/* 이 위치의 S.Mainsection => view 컴포넌트들로 대체, 각 컴포넌트에서 필요한 입력 항목 관리 상태값 props 전달 */}
        {step === 'email' && <EmailView returnsOfUseForm={returnsOfUseForm} />}
        {step === 'emailVerification' && (
          <EmailVerificationView returnsOfUseForm={returnsOfUseForm} />
        )}
        {step === 'password' && (
          <PasswordView returnsOfUseForm={returnsOfUseForm} />
        )}
        {step === 'terms' && <TermsView returnsOfUseForm={returnsOfUseForm} />}
        {step === 'nickname' && (
          <NickNameView returnsOfUseForm={returnsOfUseForm} />
        )}
      </S.ViewContainer>
    </S.SignUpPageLayout>
  );
}

export default SignupPage;
