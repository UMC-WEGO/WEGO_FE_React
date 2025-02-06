import { create } from 'zustand';
import { TSignupApiReqData } from '../../types/SignUpFormData';

// TSignUpFormData => useForm에서 실제 회원가입 각 스텝별로의 입력값을 관리할 상태 타입
// TSignupApiReqData => 실제로 회원가입 api에서 쓸 데이터 타입만 정의
type TPasswordInputs = {
  email: string;
  newPassword: string;
  newPasswordChecked: string;
};

const initVal: TPasswordInputs = {
  email: '',
  newPassword: '',
  newPasswordChecked: '',
};

type TPasswordFindStore = {
  data: TPasswordInputs;
  setData: (inputData: Partial<TPasswordInputs>) => void;
  isTimerEnd: boolean;
  setIsTimerEnd: (inputData: boolean) => void;
};

// zustand 스토어, 필요한 폼데이터 하위속성만 수정해서 setFormData함수에 전달해서 반영
// 모두 반영한 뒤에 form 제출은 useForm의 handleSubmit으로 진행
// zustand 구조 : create(set=> ({ 상태들:초기값... + 상태 관리 set 함수들 ...})) 로 정의
export const usePasswordFindStore = create<TPasswordFindStore>(set => ({
  data: initVal, // 초기 폼 데이터 설정
  setData: inputData =>
    set(state => ({ data: { ...state.data, ...inputData } })), // 일부 데이터만 병합하여 상태 업데이트
  isTimerEnd: false,
  setIsTimerEnd: inputData => {
    set(state => ({ isTimerEnd: inputData }));
  },
}));
