import React, { useState } from 'react';
import * as S from '../../../pages/feat_1/signup/SignupPage.style';
import Input from '../../../components/feat1/input/Input';
import Button from '../../../components/feat1/button/Button';
import { useNavigate } from 'react-router';
import {
  TReturnsOfUseForm,
  TSignUpFormData,
} from '../../../types/SignUpFormData';

function EmailVerificationView({
  returnsOfUseForm,
}: {
  returnsOfUseForm: TReturnsOfUseForm<TSignUpFormData>;
}) {
  const navigate = useNavigate();
  const nextText = '인증 완료';
  const [istNextReady, setIsNextReady] = useState(); // 인증 처리 후에 true

  const { register, formState, watch } = returnsOfUseForm;
  const inputValue = watch('verificationCode', ''); // 'myField'는 필드 이름, 기본값은 빈 문자열

  const verifyEmailAuth = () => {
    // 입력값의 코드를 통한 이메일 인증 처리
    // inputValue로 접근
  };

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
          onClickHandler={() => navigate('/signup/password')}
          disabled={!istNextReady}
        ></Button>
      </S.SignUpInputsBox>
    </S.MainSection>
  );
  // 위에 div를 S.MainSection으로 수정하면서 작업
}

export default EmailVerificationView;
