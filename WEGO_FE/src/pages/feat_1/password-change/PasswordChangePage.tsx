import React from 'react';
import * as S from '../password-find/PasswordFindPage.style';
import logo from '../../../images/feat1/logo.svg';
import BackArrow from '../../../components/feat1/backArrow/BackArrow';
import Input from '../../../components/feat1/input/Input';
import Button from '../../../components/feat1/button/Button';
import { TReturnsOfUseForm } from '../../../types/SignUpFormData';
import { PasswordSchema } from '../../../constants/schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router';
import { passwordChangeApi } from '../../../apis/feat1/passwordFindApis';
import { useTokenStore } from '../../../store/token/useTokenStore';
import { usePasswordFindStore } from '../../../store/passwordFind/usePasswordFindStore';

export type TPasswordFormData = {
  password: string;
  passwordCheck: string;
};

function PasswordChangePage() {
  const navigate = useNavigate();

  const initVal: TPasswordFormData = {
    password: '',
    passwordCheck: '',
  };

  // react-hook-form 정의 + zustand 사용안함
  const returnsOfUseForm: TReturnsOfUseForm<TPasswordFormData> =
    useForm<TPasswordFormData>({
      mode: 'onChange',
      resolver: yupResolver(PasswordSchema),
      defaultValues: initVal, // zustand 상태를 기본값으로 설정
    });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = returnsOfUseForm;

  const inputPasswordValue = watch('password', ''); // 'myField'는 필드 이름, 기본값은 빈 문자열
  const inputPasswordCheckValue = watch('passwordCheck', ''); // 'myField'는 필드 이름, 기본값은 빈 문자열
  const { data: emailData, setData } = usePasswordFindStore();
  console.log(emailData);

  const onSubmit = async data => {
    const {
      password,
      passwordCheck,
    }: { password: string; passwordCheck: string } = data;
    // API 호출 및 로직 처리
    passwordChangeApi({
      email: emailData.email,
      password: password,
    });
  };

  return (
    <S.PasswordFindPageLayout>
      <S.ViewContainer>
        <BackArrow />
        <S.LogoSection>
          <img src={logo} alt="logo" />
        </S.LogoSection>
        <S.MainSection onSubmit={handleSubmit(onSubmit)}>
          <S.PasswordTextBox>비밀번호 변경</S.PasswordTextBox>
          <S.PasswordInputsBox>
            <p>새 비밀번호 *</p>
            <Input
              placeholder="8자리 이상 영문,숫자,특수문자 포함"
              register={register}
              signUpInputType="password"
              isError={Boolean(errors.password)}
            />
            <S.SignUpErrorText>{errors?.password?.message}</S.SignUpErrorText>
          </S.PasswordInputsBox>
          <S.PasswordInputsBox>
            <p>비밀번호 확인 *</p>
            <Input
              placeholder="새 비밀번호 확인"
              register={register}
              signUpInputType="passwordCheck"
              isError={Boolean(errors.passwordCheck)}
            />
            <S.SignUpErrorText>
              {errors?.passwordCheck?.message}
            </S.SignUpErrorText>
          </S.PasswordInputsBox>
          <Button
            type={'submit'}
            color={
              !errors.password &&
              !errors.passwordCheck &&
              inputPasswordValue.length &&
              inputPasswordCheckValue.length
                ? '--color-main-blue'
                : '--color-gray-300'
            } // css 전역변수명을 그대로 사용 -> 받아서 var()로 처리
            content={'로그인 하러 가기'}
            disabled={Boolean(errors.password) || Boolean(errors.passwordCheck)}
            onClickHandler={() => navigate('/login')}
          ></Button>
        </S.MainSection>
      </S.ViewContainer>
    </S.PasswordFindPageLayout>
  );
}

export default PasswordChangePage;
