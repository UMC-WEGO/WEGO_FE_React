import React, { useEffect, useState } from 'react';
import * as S from '../../../pages/feat_1/signup/SignupPage.style';
import * as SS from './_SignUpSubPage.style';
import Input from '../../../components/feat1/input/Input';
import Button from '../../../components/feat1/button/Button';
import styled from 'styled-components';

import {
  TSignUpFormData,
  TReturnsOfUseForm,
} from '../../../types/SignUpFormData';
import { useNavigate } from 'react-router';

const NicknameInputWrapper = styled.div`
  position: relative;
`;

const NicknameLengthText = styled.span`
  position: absolute;
  right: 15px;
  bottom: 17px;

  width: 35px;
  height: 14px;

  font-family: 'Pretendard-500';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height, or 117% */
  letter-spacing: -0.32px;

  color: #8b8b8b;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

function NickNameView({
  returnsOfUseForm,
}: {
  returnsOfUseForm: TReturnsOfUseForm<TSignUpFormData>;
}) {
  const navigate = useNavigate();
  const nextText = '완료';
  const [istNextReady, setIsNextReady] = useState();

  const { register, formState, watch } = returnsOfUseForm;
  const { errors } = formState;

  // console.log(register('nickname'));
  const inputValue = watch('nickname', ''); // 'myField'는 필드 이름, 기본값은 빈 문자열

  return (
    <S.MainSection>
      <S.SignUpTextBox>
        어떻게 불러드리는 게<br></br>좋을까요?
      </S.SignUpTextBox>
      <S.SignInputLable>닉네임</S.SignInputLable>
      <S.SignUpInputsBox>
        <NicknameInputWrapper>
          <Input
            placeholder="닉네임 입력"
            register={register}
            signUpInputType="nickname"
            isError={Boolean(errors.nickname)}
          />
          <NicknameLengthText>{inputValue.length} / 10</NicknameLengthText>
        </NicknameInputWrapper>
        <SS.SignUpErrorText>{errors?.nickname?.message}</SS.SignUpErrorText>
        <Button
          type={'submit'}
          color={!errors.nickname ? '--color-main-blue' : '--color-gray-300'} // css 전역변수명을 그대로 사용 -> 받아서 var()로 처리
          content={nextText}
          disabled={Boolean(errors.nickname)}
          onClickHandler={() => navigate('/signup/complete')}
        ></Button>
      </S.SignUpInputsBox>
    </S.MainSection>
  );
}

export default NickNameView;
