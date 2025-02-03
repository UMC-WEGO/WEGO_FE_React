import React, { useState } from 'react';
import * as S from './PasswordFindPage.style';
import logo from '../../../images/feat1/logo.svg';
import BackArrow from '../../../components/feat1/backArrow/BackArrow';
import Input from '../../../components/feat1/input/Input';

import Button from '../../../components/feat1/button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TReturnsOfUseForm } from '../../../types/SignUpFormData';
import { EmailSchema } from '../../../constants/schema';
import { useNavigate } from 'react-router';
import { usePasswordFindStore } from '../../../store/passwordFind/usePasswordFindStore';
import {
  passwordAuthCodeSendApi,
  passwordAuthCodeVerifyApi,
} from '../../../apis/feat1/passwordFindApis';

export type TEmailFormData = {
  email: string;
  code: string;
};

function PasswordFindPage() {
  const [isVerifyStarted, setIsVerifyStarted] = useState(false);
  const [isVerifySuccess, setIsVerifySuccess] = useState(false);
  const [verifyCode, setVerifyCode] = useState('');
  const [isCodeDiff, setIsCodeDiff] = useState(true);
  const verifyButtonText = {
    default: '인증번호 받기',
    retry: '다시받기',
  };

  const navigate = useNavigate();
  const userId = 1;

  // zustand
  const { data, setData } = usePasswordFindStore();

  //--------------------------------------------
  //--------------- hook form ------------------
  const initVal: TEmailFormData = {
    email: '',
    code: '',
  };

  // react-hook-form 정의
  const returnsOfUseForm: TReturnsOfUseForm<TEmailFormData> =
    useForm<TEmailFormData>({
      mode: 'onChange',
      resolver: yupResolver(EmailSchema),
      defaultValues: initVal, // zustand 상태를 기본값으로 설정
    });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = returnsOfUseForm;

  const emailValue = watch('email', ''); // 'myField'는 필드 이름, 기본값은 빈 문자열
  const codeValue = watch('code', '');

  const onSubmit = async data => {
    const { email } = data;
    setData({
      email: email,
    });
    console.log('폼 데이터 제출:', data);
    // API 호출 및 로직 처리
  };

  const getPasswordVerifyCode = async () => {
    setIsVerifyStarted(true);

    passwordAuthCodeSendApi({
      email: emailValue,
    });
  };

  const postEmailVerify = async () => {
    const verifyResult = await passwordAuthCodeVerifyApi({
      email: emailValue,
      code: codeValue,
    });

    if (verifyResult == 1) {
      console.log(verifyResult);
      setIsVerifySuccess(true);
      setIsVerifyStarted(false);
      setIsCodeDiff(false);
    } else {
      setIsVerifySuccess(false);
      setIsVerifyStarted(true);
      setIsCodeDiff(true);
    }
  };

  return (
    <S.PasswordFindPageLayout>
      <S.ViewContainer>
        <BackArrow />
        <S.LogoSection>
          <img src={logo} alt="logo" />
        </S.LogoSection>
        <S.MainSection onSubmit={handleSubmit(onSubmit)}>
          <S.PasswordTextBox>비밀번호 찾기</S.PasswordTextBox>
          <S.PasswordInputsBox>
            <p>가입한 이메일 주소 *</p>
            <S.PasswordInputWrapper>
              <Input
                placeholder="아이디(이메일)을 입력하세요."
                register={register}
                signUpInputType="email"
                isError={Boolean(errors.email)}
              />
              <S.VerifyButton
                type="button"
                $color={
                  errors.email || !emailValue.length
                    ? '--color-gray-300'
                    : '--color-main-blue'
                }
                onClick={getPasswordVerifyCode}
              >
                {!isVerifyStarted
                  ? verifyButtonText.default
                  : verifyButtonText.retry}
              </S.VerifyButton>
            </S.PasswordInputWrapper>
            <S.SignUpErrorText>
              {errors?.email
                ? errors?.email?.message
                : isVerifyStarted
                  ? '인증번호가 전송되었습니다'
                  : ''}
            </S.SignUpErrorText>
          </S.PasswordInputsBox>
          <S.PasswordInputsBox>
            <p>인증 번호 *</p>
            <S.PasswordInputWrapper>
              <Input
                placeholder="인증번호를 입력해주세요."
                register={register}
                signUpInputType="code"
                isError={Boolean(errors.email)}
              />
              <S.VerifyButton
                type="button"
                $color={
                  !isVerifyStarted ? '--color-gray-300' : '--color-main-blue'
                }
                onClick={postEmailVerify}
              >
                {isVerifyStarted ? '인증하기' : '인증완료'}
              </S.VerifyButton>
            </S.PasswordInputWrapper>
            <S.SignUpErrorText>
              {isVerifyStarted &&
                isCodeDiff &&
                Boolean(codeValue.length) &&
                '인증 코드가 불일치합니다'}
            </S.SignUpErrorText>
          </S.PasswordInputsBox>
          <Button
            type={'submit'}
            color={isVerifySuccess ? '--color-main-blue' : '--color-gray-300'} // css 전역변수명을 그대로 사용 -> 받아서 var()로 처리
            content={'비밀번호 찾기'}
            disabled={Boolean(errors.email)}
            onClickHandler={() => navigate(`/user/${userId}/password/change`)}
          ></Button>
        </S.MainSection>
      </S.ViewContainer>
    </S.PasswordFindPageLayout>
  );
}

export default PasswordFindPage;
