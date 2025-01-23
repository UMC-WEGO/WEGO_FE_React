import { create } from 'zustand';
import { TSignupApiReqData } from '../../types/SignUpFormData';

const initVal: TSignupApiReqData = {
  email: '',
  password: '',
  nickname: '',
  marketing_consent: false,
  info_consent: false,
};

type TSignUpStore = {
  reqData: TSignupApiReqData;
  setReqData: (data: Partial<TSignupApiReqData>) => void;
};

// zustand 스토어, 필요한 폼데이터 하위속성만 수정해서 setFormData함수에 전달해서 반영
// 모두 반영한 뒤에 form 제출은 useForm의 handleSubmit으로 진행
// zustand 구조 : create(set=> ({ 상태들:초기값... + 상태 관리 set 함수들 ...})) 로 정의
export const useSignUpStore = create<TSignUpStore>(set => ({
  reqData: initVal, // 초기 폼 데이터 설정
  setReqData: data =>
    set(state => ({ reqData: { ...state.reqData, ...data } })), // 일부 데이터만 병합하여 상태 업데이트
}));
