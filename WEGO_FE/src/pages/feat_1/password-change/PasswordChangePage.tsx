import React from 'react';
import * as S from '../password-find/PasswordFindPage.style';
import logo from '../../../images/feat1/logo.svg';
import BackArrow from '../../../components/feat1/backArrow/BackArrow';
import Input from '../../../components/feat1/input/Input';
import Button from '../../../components/feat1/button/Button';

function PasswordChangePage() {
  return (
    <S.PasswordFindPageLayout>
      <S.ViewContainer>
        <BackArrow />
        <S.LogoSection>
          <img src={logo} alt="logo" />
        </S.LogoSection>
        <S.MainSection>
          <S.PasswordTextBox>비밀번호 변경</S.PasswordTextBox>
          <S.PasswordInputsBox>
            <p>새 비밀번호 *</p>
            <Input
              placeholder="8자리 이상 영문,숫자,특수문자 포함"
              // register={register}
              // signUpInputType="email"
              // isError={Boolean(errors.email)}
            />
            {/* <SS.SignUpErrorText>{errors?.email?.message}</S.SignUpErrorText> */}
          </S.PasswordInputsBox>
          <S.PasswordInputsBox>
            <p>비밀번호 확인 *</p>
            <Input
              placeholder="새 비밀번호 확인"
              // register={register}
              // signUpInputType="email"
              // isError={Boolean(errors.email)}
            />
            {/* <SS.SignUpErrorText>{errors?.email?.message}</S.SignUpErrorText> */}
          </S.PasswordInputsBox>
          <Button
            color="--color-main-blue"
            content="로그인 하러 가기"
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

export default PasswordChangePage;
