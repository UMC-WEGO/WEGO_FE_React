import React, { useState } from 'react';
import * as S from '../../../pages/feat_1/signup/SignupPage.style';
import * as SS from './_SignUpSubPage.style';
import Input from '../../../components/feat1/input/Input';
import Button from '../../../components/feat1/button/Button';

import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from 'react-icons/io';
import { useNavigate } from 'react-router';
import {
  TSignUpFormData,
  TReturnsOfUseForm,
} from '../../../types/SignUpFormData';

function PasswordView({
  returnsOfUseForm,
}: {
  returnsOfUseForm: TReturnsOfUseForm<TSignUpFormData>;
}) {
  const navigate = useNavigate();
  const nextText = '다음';

  const { register, formState, watch } = returnsOfUseForm;
  const { errors } = formState;

  const [istNextReady, setIsNextReady] = useState();
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [isPasswordCheckOpen, setIsPasswordCheckOpen] = useState(false);

  const inputValue = watch('password', ''); // 'myField'는 필드 이름, 기본값은 빈 문자열

  const handleClickPasswordOpenButton = () => {
    setIsPasswordOpen(prev => !prev);
  };
  const handleClickPasswordCheckOpenButton = () => {
    setIsPasswordCheckOpen(prev => !prev);
  };
  const handleClickOAuth2Button = type => {
    // login logic
  };

  return (
    <S.MainSection>
      <S.SignUpTextBox>
        비밀번호를<br></br>입력해주세요.
      </S.SignUpTextBox>
      <S.SignInputLable>비밀번호</S.SignInputLable>
      <SS.SignUpInputsBox>
        <S.InputWrapper>
          <Input
            placeholder="8자리 이상 영문, 숫자, 특수문자 포함"
            register={register}
            signUpInputType="password"
            isError={Boolean(errors.password)}
            type={isPasswordOpen ? 'text' : 'password'}
          />

          <S.PasswordOpenToggleButton
            type="button"
            onClick={handleClickPasswordOpenButton}
          >
            {isPasswordOpen ? <IoMdEyeOff></IoMdEyeOff> : <IoMdEye></IoMdEye>}
          </S.PasswordOpenToggleButton>
        </S.InputWrapper>
        <S.InputWrapper>
          <Input
            placeholder="비밀번호 확인"
            register={register}
            signUpInputType="passwordCheck"
            isError={Boolean(errors.passwordCheck)}
            type={isPasswordCheckOpen ? 'text' : 'password'}
          />
          <S.PasswordOpenToggleButton
            type="button"
            onClick={handleClickPasswordCheckOpenButton}
          >
            {isPasswordCheckOpen ? (
              <IoMdEyeOff></IoMdEyeOff>
            ) : (
              <IoMdEye></IoMdEye>
            )}
          </S.PasswordOpenToggleButton>
        </S.InputWrapper>
        <SS.SignUpErrorText>{errors?.password?.message}</SS.SignUpErrorText>
        <SS.SignUpErrorText>
          {errors?.passwordCheck?.message}
        </SS.SignUpErrorText>
        <Button
          type={'submit'}
          color={
            !errors.password && !errors.passwordCheck && inputValue.length
              ? '--color-main-blue'
              : '--color-gray-300'
          } // css 전역변수명을 그대로 사용 -> 받아서 var()로 처리
          content={nextText}
          disabled={Boolean(errors.password) || Boolean(errors.passwordCheck)}
          onClickHandler={() => {
            navigate('/signup/terms');
          }}
        ></Button>
      </SS.SignUpInputsBox>
    </S.MainSection>
  );
}

export default PasswordView;
