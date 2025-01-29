import React, { useState } from 'react';
import Navbar from '../../../components/navbar/Navbar';
import * as S from './LoginPage.style';
import logo from '../../../images/feat1/logo.svg';
import kakaoLogin from '../../../images/feat1/kakao_login.svg';
import naverLogin from '../../../images/feat1/naver_login.svg';
import appleLogin from '../../../images/feat1/apple_login.svg';
import GlobalStyle from '../../../styles/GlobalStyles';

import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from 'react-icons/io';

import Input from '../../../components/feat1/input/Input';
import Button from '../../../components/feat1/button/Button';
import { loginApi } from '../../../apis/feat1/loginApis';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { isTokenExpired } from '../../../utils/feat1/authUtils';

type TLoginInputs = {
  email: string;
  password: string;
};

function LoginPage() {
  const navigate = useNavigate();
  const userId = 1; // 테스트용

  const LoginButtonText = '로그인';
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleClickPasswordOpenButton = () => {
    setIsPasswordOpen(prev => !prev);
  };

  const handleClickOAuth2Button = type => {
    // login logic
  };

  return (
    <S.LoginPageLayout>
      <S.ViewContainer>
        <S.LogoSection>
          <img src={logo} alt="logo" />
        </S.LogoSection>
        <S.MainSection
          onSubmit={async e => {
            e.preventDefault();
            console.log(123);

            const loginResult = await loginApi({
              email: loginEmail,
              password: loginPassword,
            });

            if (loginResult === -1) {
              alert('아이디 또는 비밀번호가 잘못되었습니다.');
            } else {
              navigate('/home');
            }
          }}
        >
          <S.LoginTextBox>로그인해주세요.</S.LoginTextBox>
          <S.LoginInputsBox>
            <Input
              placeholder="아이디(이메일)를 입력하세요"
              value={loginEmail}
              onChange={e => setLoginEmail(e.target.value)}
            />
            <S.InputWrapper>
              <Input
                placeholder="비밀번호를 입력하세요"
                type={isPasswordOpen ? 'text' : 'password'}
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
              />
              <S.PasswordOpenToggleButton
                type="button"
                onClick={handleClickPasswordOpenButton}
              >
                {isPasswordOpen ? (
                  <IoMdEyeOff></IoMdEyeOff>
                ) : (
                  <IoMdEye></IoMdEye>
                )}
              </S.PasswordOpenToggleButton>
            </S.InputWrapper>
            <S.SubButtonsBox>
              <button
                type="button"
                onClick={() => navigate(`/user/${userId}/password/find`)}
              >
                비밀번호 찾기
              </button>
              <button type="button" onClick={() => navigate('/signup/email')}>
                회원가입
              </button>
            </S.SubButtonsBox>
            <Button
              type={'submit'}
              color={
                loginEmail && loginPassword
                  ? '--color-main-blue'
                  : '--color-gray-300'
              } // css 전역변수명을 그대로 사용 -> 받아서 var()로 처리
              content={LoginButtonText}
              disabled={loginEmail && loginPassword ? false : true}
            ></Button>
          </S.LoginInputsBox>
        </S.MainSection>
        <S.OAuth2Section>
          <S.OAuth2TopBox>
            <article></article>
            <p>간편 로그인</p>
            <article></article>
          </S.OAuth2TopBox>
          <S.OAuth2IconsBox>
            <img
              src={kakaoLogin}
              alt="카카오 로그인"
              onClick={() => handleClickOAuth2Button('kakao')}
            />
            <img
              src={naverLogin}
              alt="네이버 로그인"
              onClick={() => handleClickOAuth2Button('naver')}
            />
            <img
              src={appleLogin}
              alt="애플 로그인"
              onClick={() => handleClickOAuth2Button('apple')}
            />
          </S.OAuth2IconsBox>
        </S.OAuth2Section>
      </S.ViewContainer>
      {/* <Navbar /> */}
    </S.LoginPageLayout>
  );
}

export default LoginPage;
