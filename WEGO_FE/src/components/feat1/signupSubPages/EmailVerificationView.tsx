import React, { useState } from 'react';
import * as S from '../../../pages/feat_1/signup/SignupPage.style';
import Input from '../../../components/feat1/input/Input';
import Button from '../../../components/feat1/button/Button';
import { useNavigate } from 'react-router';
import {
  TEmailVerifyResponseApiReqData,
  TReturnsOfUseForm,
  TSignUpFormData,
} from '../../../types/SignUpFormData';
import { useSignUpStore } from '../../../store/signup/useSignUpStore';
import { emailVerifyResponseApi } from '../../../apis/feat1/signupApis';

function EmailVerificationView({
  returnsOfUseForm,
}: {
  returnsOfUseForm: TReturnsOfUseForm<TSignUpFormData>;
}) {
  const navigate = useNavigate();
  const nextText = '인증 완료';
  const [istNextReady, setIsNextReady] = useState(); // 인증 처리 후에 true

  const { register, formState, watch } = returnsOfUseForm;
  const { errors } = formState;

  const inputValue = watch('verificationCode', ''); // 'myField'는 필드 이름, 기본값은 빈 문자열
  const apiReqData = {
    email: watch('email', ''),
    code: watch('verificationCode', ''),
  };

  return (
    <S.MainSection>
      <S.SignUpTextBox>
        이메일로 전송된<br></br>인증코드를 입력해주세요.
      </S.SignUpTextBox>
      <S.SignInputLable>인증코드</S.SignInputLable>
      <S.SignUpInputsBox>
        <Input
          placeholder="인증 코드 입력"
          register={register}
          signUpInputType="verificationCode"
          isError={Boolean(errors.verificationCode)}
        />
        <Button
          type={'submit'}
          color={
            !errors.verificationCode && inputValue.length
              ? '--color-main-blue'
              : '--color-gray-300'
          } // css 전역변수명을 그대로 사용 -> 받아서 var()로 처리
          content={nextText}
          disabled={Boolean(errors.verificationCode)}
          onClickHandler={() => {
            emailVerifyResponseApi(apiReqData);
            navigate('/signup/password');
          }}
        ></Button>
      </S.SignUpInputsBox>
    </S.MainSection>
  );
  // 위에 div를 S.MainSection으로 수정하면서 작업
}

export default EmailVerificationView;
