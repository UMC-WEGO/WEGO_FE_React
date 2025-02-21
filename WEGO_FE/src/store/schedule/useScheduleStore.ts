import { create } from 'zustand';
import { TTripInfo } from '../../pages/feat_3/schedule-home/HomeScedulePage';

type TMissionData = {
  content: string | null;
  created_at: string; // ISO 8601 형식의 날짜 문자열
  mission_id: number;
  original_mission_id: number;
  picture: string | null;
  status: number;
  updated_at: string; // ISO 8601 형식의 날짜 문자열
};

type TTripInfo2 = TTripInfo & {
  missions?:TMissionData[]
}
// TSignUpFormData => useForm에서 실제 회원가입 각 스텝별로의 입력값을 관리할 상태 타입
// TSignupApiReqData => 실제로 회원가입 api에서 쓸 데이터 타입만 정의
const initVal: TTripInfo2 = {
  adult_participants: 0,
  child_participants: 0,
  duration: "0",
  endDate: new Date().toISOString(), // 현재 날짜를 기본값으로 설정
  id: 0,
  location: "",
  startDate: new Date().toISOString(), // 현재 날짜를 기본값으로 설정
  vehicle: ""
};


type TScheduleStore = {
  data: TTripInfo2;
  setData: (data: Partial<TTripInfo2>) => void;
};

// zustand 스토어, 필요한 폼데이터 하위속성만 수정해서 setFormData함수에 전달해서 반영
// 모두 반영한 뒤에 form 제출은 useForm의 handleSubmit으로 진행
// zustand 구조 : create(set=> ({ 상태들:초기값... + 상태 관리 set 함수들 ...})) 로 정의
export const useScheduleStore = create<TScheduleStore>(set => ({
  data: initVal, // 초기 폼 데이터 설정
  setData: data =>
    set(state => ({ data: { ...state.data, ...data } })), // 일부 데이터만 병합하여 상태 업데이트
}));
