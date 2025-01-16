import React, { useEffect, useState } from 'react';
import * as S from '../../../pages/feat_1/signup/SignupPage.style';
import Input from '../../../components/feat1/input/Input';
import Button from '../../../components/feat1/button/Button';
import { useNavigate } from 'react-router';
import { useSignUpStore } from '../../../store/signup/useSignUpStore';
import * as SS from './_SignUpSubPage.style';
import {
  TSignUpFormData,
  TReturnsOfUseForm,
} from '../../../types/SignUpFormData';

function EmailView({
  returnsOfUseForm,
}: {
  returnsOfUseForm: TReturnsOfUseForm<TSignUpFormData>;
}) {
  const navigate = useNavigate();
  const nextText = '다음';
  const [istNextReady, setIsNextReady] = useState(false);

  const { register, formState, watch } = returnsOfUseForm;
  const { errors } = formState;

  const inputValue = watch('email', ''); // 'myField'는 필드 이름, 기본값은 빈 문자열

  return (
    <S.MainSection>
      <S.SignUpTextBox>
        이메일을<br></br>인증해주세요.
      </S.SignUpTextBox>
      <S.SignInputLable>아이디</S.SignInputLable>
      <SS.SignUpInputsBox>
        <Input
          placeholder="이메일 주소 입력"
          register={register}
          signUpInputType="email"
          isError={Boolean(errors.email)}
        />
        <SS.SignUpErrorText>{errors?.email?.message}</SS.SignUpErrorText>
        <Button
          type={'submit'}
          color={
            !errors.email && inputValue.length
              ? '--color-main-blue'
              : '--color-gray-300'
          } // css 전역변수명을 그대로 사용 -> 받아서 var()로 처리
          content={nextText}
          disabled={Boolean(errors.email)}
          onClickHandler={() => navigate('/signup/emailVerification')}
        ></Button>
      </SS.SignUpInputsBox>
    </S.MainSection>
  );
}

export default EmailView;
