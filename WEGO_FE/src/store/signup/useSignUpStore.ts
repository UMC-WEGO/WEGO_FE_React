import { create } from 'zustand';
import { TSignUpFormData } from '../../types/SignUpFormData';

type TSignUpStoreReturn = {
  formData: TSignUpFormData; // 초기 폼 데이터 설정
  errors: Record<string, any>;
  isValid: boolean;
  setFormData: (data: TSignUpFormData) => void; // 상태 업데이트 함수
  clearFormData: () => void; // 폼 데이터 초기화 함수
  setErrors: (errors: Record<string, any>) => void;
  setIsValid: (isValid: boolean) => void;
};

const initVal: TSignUpFormData = {
  email: '',
  verificationCode: '',
  password: '',
  passwordCheck: '',
  termsAgree: false,
  nickname: '',
};

// zustand 스토어, 필요한 폼데이터 하위속성만 수정해서 setFormData함수에 전달해서 반영
// 모두 반영한 뒤에 form 제출은 useForm의 handleSubmit으로 진행
// zustand 구조 : create(set=> ({ 상태들:초기값... + 상태 관리 set 함수들 ...})) 로 정의
export const useSignUpStore = create<TSignUpStoreReturn>(set => ({
  formData: initVal, // 초기 폼 데이터 설정
  errors: {},
  isValid: false,
  setFormData: (data: Partial<TSignUpFormData>) =>
    set(state => ({ formData: { ...state.formData, ...data } })), // 일부 데이터만 병합하여 상태 업데이트
  clearFormData: () => set({ formData: initVal }), // 폼 데이터 초기화
  setErrors: (errors: Record<string, any>) => set({ errors }),
  setIsValid: (isValid: boolean) => set({ isValid }),
}));
