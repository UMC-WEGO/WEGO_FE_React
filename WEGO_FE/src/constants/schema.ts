import * as yup from 'yup';
import { REGEX } from './regex';
const SignUpSchema = yup.object().shape({
  email: yup
    .string()
    .matches(REGEX.email, '이메일 형식이 올바르지 않습니다.') // 첫 매개변수: 패턴, 두번째 배개변수: 오류문자열
    .required('이메일을 반드시 입력해주세요.'),
  password: yup
    .string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
    .max(20, '비밀번호는 최대 20자까지 가능합니다.')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      '비밀번호에는 특수문자가 포함되어야 합니다.',
    )
    .matches(/\d/, '비밀번호에는 숫자가 포함되어야 합니다.')
    .required('비밀번호는 필수 입력 항목입니다.'),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 다릅니다.')
    .required('비밀번호 확인을 반드시 입력해주세요.'),
  termsAgree: yup
    .boolean()
    .oneOf([true], '필수 약관에 동의하여야 합니다')
    .required('필수 약관에 동의해주세요.'),
  nickname: yup
    .string()
    .min(2, '닉네임은 2글자 이상이어야 합니다.')
    .max(10, '닉네임은 10글자 이하여야 합니다.')
    .matches(REGEX.nickname, '닉네임은 특수문자를 사용할 수 없습니다.')
    .required('닉네임을 반드시 입력해주세요.'),
});

const PasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
    .max(20, '비밀번호는 최대 20자까지 가능합니다.')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      '비밀번호에는 특수문자가 포함되어야 합니다.',
    )
    .matches(/\d/, '비밀번호에는 숫자가 포함되어야 합니다.')
    .required('비밀번호는 필수 입력 항목입니다.'),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 다릅니다.')
    .required('비밀번호 확인을 반드시 입력해주세요.'),
});

const EmailSchema = yup.object().shape({
  email: yup
    .string()
    .matches(REGEX.email, '이메일 형식이 올바르지 않습니다.') // 첫 매개변수: 패턴, 두번째 배개변수: 오류문자열
    .required('이메일을 반드시 입력해주세요.'),
});

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(REGEX.email, '이메일 형식이 맞지 않습니다.') // 첫 매개변수: 패턴, 두번째 배개변수: 오류문자열
    .required('이메일을 반드시 입력해주세요.'),
  password: yup
    .string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
    .max(20, '비밀번호는 최대 20자까지 가능합니다.')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      '비밀번호에는 특수문자가 포함되어야 합니다.',
    )
    .matches(/\d/, '비밀번호에는 숫자가 포함되어야 합니다.')
    .required('비밀번호는 필수 입력 항목입니다.'),
});

export { SignUpSchema, LoginSchema, EmailSchema, PasswordSchema };
