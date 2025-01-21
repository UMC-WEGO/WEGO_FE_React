import {
  FieldErrors,
  UseFormRegister,
  UseFormHandleSubmit,
  UseFormWatch,
  UseFormSetValue,
  FormState,
  FieldValues, // react-hook-form에서 제공하는 기본 인터페이스
} from 'react-hook-form';

export type TSignUpFormData = {
  email: string;
  verificationCode?: string; // 인증 코드
  password: string;
  passwordCheck: string;
  termsAgree: boolean;
  nickname: string;
};

// Form 상태 타입
export type TFormState = {
  errors: FieldErrors; // react-hook-form에서 사용하는 오류 타입
  isValid: boolean; // 폼의 유효성 상태
};

// useForm의 반환 타입 정의
export type TReturnsOfUseForm<TFieldValues extends FieldValues> = {
  register: UseFormRegister<TFieldValues>; // 입력 필드 등록 함수
  handleSubmit: UseFormHandleSubmit<TFieldValues>; // 폼 제출 핸들러
  watch: UseFormWatch<TFieldValues>; // 입력 값 관찰 함수
  setValue: UseFormSetValue<TFieldValues>; // 특정 필드의 값 설정
  formState: FormState<TFieldValues>; // 폼 상태 정보
};
