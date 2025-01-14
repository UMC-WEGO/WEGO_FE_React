import React, { useEffect, useState } from 'react';
import * as S from '../../../pages/feat_1/signup/SignupPage.style';
import Input from '../../../components/feat1/input/Input';
import Button from '../../../components/feat1/button/Button';
import { useNavigate } from 'react-router';

function EmailView() {
  const navigate = useNavigate();
  const nextText = '다음';
  const [istNextReady, setIsNextReady] = useState();

  useEffect(() => {
    // 검사로직
  }, []);

  return (
    <S.MainSection>
      <S.SignUpTextBox>
        이메일을<br></br>인증해주세요.
      </S.SignUpTextBox>
      <S.SignInputLable>아이디</S.SignInputLable>
      <S.SignUpInputsBox>
        <Input placeholder="이메일 주소 입력" />
        <Button
          type={'submit'}
          color={istNextReady ? '--color-main-blue' : '--color-gray-300'} // css 전역변수명을 그대로 사용 -> 받아서 var()로 처리
          content={nextText}
          onClickHandler={() => navigate('/signup/emailVerification')}
        ></Button>
      </S.SignUpInputsBox>
    </S.MainSection>
  );
}

export default EmailView;
