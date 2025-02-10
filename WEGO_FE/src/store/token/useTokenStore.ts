import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TSignupApiReqData } from '../../types/SignUpFormData';

type TLoginApiReqData = {
  email: string;
  password: string;
};

type TTokenData = {
  loginApiReqData: TLoginApiReqData;
  accessToken: string;
  refreshToken: string;
};

const initVal: TTokenData = {
  loginApiReqData: {
    email: '',
    password: '',
  },
  accessToken: '',
  refreshToken: '',
};

type TTokenStore = {
  data: TTokenData;
  setData: (data: Partial<TTokenData>) => void;
};

// ✅ 최신 버전 `persist` 사용법 적용
export const useTokenStore = create<TTokenStore>()(
  persist(
    set => ({
      data: initVal,
      setData: inputData =>
        set(state => ({ data: { ...state.data, ...inputData } })),
    }),
    {
      name: 'token-storage', // 저장될 키 이름
      storage: {
        // 파싱 (json->js)
        getItem: name => {
          const item = sessionStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        // 역파싱 (js->json)
        setItem: (name, value) => {
          sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: name => {
          sessionStorage.removeItem(name);
        },
      },
    },
  ),
);
