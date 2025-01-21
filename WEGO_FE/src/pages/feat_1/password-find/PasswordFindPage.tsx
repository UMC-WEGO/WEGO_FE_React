import React, { useState } from 'react';
import * as S from './PasswordFindPage.style';
import logo from '../../../images/feat1/logo.svg';
import BackArrow from '../../../components/feat1/backArrow/BackArrow';
import Input from '../../../components/feat1/input/Input';

import Button from '../../../components/feat1/button/Button';

function PasswordFindPage() {
  const [isVerifyStarted, setIsVerifyStarted] = useState(false);
  return (
    <S.PasswordFindPageLayout>
      <S.ViewContainer>
        <BackArrow />
        <S.LogoSection>
          <img src={logo} alt="logo" />
        </S.LogoSection>
        <S.MainSection>
          <S.PasswordTextBox>비밀번호 찾기</S.PasswordTextBox>
          <S.PasswordInputsBox>
            <p>가입한 이메일 주소 *</p>
            <S.PasswordInputWrapper>
              <Input
                placeholder="아이디(이메일)을 입력하세요."
                // register={register}
                // signUpInputType="email"
                // isError={Boolean(errors.email)}
              />
              <S.VerifyButton type="text">
                {!isVerifyStarted ? '인증번호 받기' : '다시받기'}
              </S.VerifyButton>
            </S.PasswordInputWrapper>
            {/* <SS.SignUpErrorText>{errors?.email?.message}</S.SignUpErrorText> */}
          </S.PasswordInputsBox>
          <S.PasswordInputsBox>
            <p>인증 번호 *</p>
            <Input
              placeholder="인증번호를 입력해주세요."
              // register={register}
              // signUpInputType="email"
              // isError={Boolean(errors.email)}
            />
            {/* <SS.SignUpErrorText>{errors?.email?.message}</S.SignUpErrorText> */}
          </S.PasswordInputsBox>
          <Button
            color="--color-main-blue"
            content="비밀번호 찾기"
            // type={'submit'}
            // color={
            //   !errors.email && inputValue.length
            //     ? '--color-main-blue'
            //     : '--color-gray-300'
            // } // css 전역변수명을 그대로 사용 -> 받아서 var()로 처리
            // content={nextText}
            // disabled={Boolean(errors.email)}
            // onClickHandler={() => navigate('/signup/emailVerification')}
          ></Button>
        </S.MainSection>
      </S.ViewContainer>
    </S.PasswordFindPageLayout>
  );
}

export default PasswordFindPage;
