import { create } from 'zustand';
import { useForm, SubmitHandler } from 'react-hook-form';


// 회원가입 시 입력받아야 할 항목 타입정리
type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};


type SignUpStore = {
};

export const useSignUpStore = create<SignUpStore>(set => (
  
) );
