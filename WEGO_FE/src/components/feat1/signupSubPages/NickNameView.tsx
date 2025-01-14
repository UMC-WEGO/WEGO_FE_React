import React, { useState } from 'react';
import * as S from '../../../pages/feat_1/signup/SignupPage.style';
import Input from '../../../components/feat1/input/Input';
import Button from '../../../components/feat1/button/Button';

function NickNameView() {
  const nextText = '완료';
  const [istNextReady, setIsNextReady] = useState();
  const [textLength, setTextLength] = useState(0);
  return (
    <S.MainSection>
      <S.SignUpTextBox>
        어떻게 불러드리는 게<br></br>좋을까요?
      </S.SignUpTextBox>
      <S.SignInputLable>닉네임</S.SignInputLable>
      <S.SignUpInputsBox>
        <Input placeholder="닉네임 입력" />
        <span>{textLength} / 10</span>
        <Button
          type={'submit'}
          color={istNextReady ? '--color-main-blue' : '--color-gray-300'} // css 전역변수명을 그대로 사용 -> 받아서 var()로 처리
          content={nextText}
        ></Button>
      </S.SignUpInputsBox>
    </S.MainSection>
  );
}

export default NickNameView;
