import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import * as S from './LoginPage.style';

function LoginPage() {
  return (
    <S.LoginPageLayout>
      <S.ViewContainer>
        <div>로그인 페이지입니다</div>
      </S.ViewContainer>
      <Navbar />
    </S.LoginPageLayout>
  );
}

export default LoginPage;
