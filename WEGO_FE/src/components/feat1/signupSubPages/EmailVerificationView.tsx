import React, { useState } from 'react';
import * as S from '../../../pages/feat_1/signup/SignupPage.style';
import Input from '../../../components/feat1/input/Input';
import Button from '../../../components/feat1/button/Button';

function EmailVerificationView() {
  const nextText = '인증 완료';
  const [istNextReady, setIsNextReady] = useState();
  return (
    <S.MainSection>
      <S.SignUpTextBox>
        이메일로 전송된<br></br>인증코드를 입력해주세요.
      </S.SignUpTextBox>
      <S.SignInputLable>인증코드</S.SignInputLable>
      <S.SignUpInputsBox>
        <Input placeholder="인증 코드 입력" />
        <Button
          type={'submit'}
          color={istNextReady ? '--color-main-blue' : '--color-gray-300'} // css 전역변수명을 그대로 사용 -> 받아서 var()로 처리
          content={nextText}
        ></Button>
      </S.SignUpInputsBox>
    </S.MainSection>
  );
  // 위에 div를 S.MainSection으로 수정하면서 작업
}

export default EmailVerificationView;
