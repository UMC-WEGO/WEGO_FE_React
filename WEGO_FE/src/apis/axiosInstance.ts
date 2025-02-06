import axios from 'axios';
import { useTokenStore } from '../store/token/useTokenStore';
import { isTokenExpired } from '../utils/feat1/authUtils';
import { tokenRefreshApi } from './feat1/loginApis';

const BASE_URL = 'http://13.124.213.122:3000';

// 단순 get요청으로 인증값이 필요없는 경우
const axiosApi = (url: string) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return instance;
};

const { data } = useTokenStore.getState();
const { accessToken, refreshToken } = data;

// post, delete등 api요청 시 인증값이 필요한 경우
const axiosAuthApi = (url: string) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  });

  // 요청 인터셉터
  instance.interceptors.request.use(
    config => {
      const { data } = useTokenStore.getState();
      config.headers['Content-Type'] = 'application/json';
      config.headers['Authorization'] = data.accessToken;

      return config;
    },
    error => {
      console.log(error);
      return Promise.reject(error);
    },
  );

  // 응답 인터셉터
  instance.interceptors.response.use(
    response => {
      if (response.status === 404) {
        console.log('오류 페이지로 넘어가야 함!');
      }
      return response;
    },
    // 토큰 새로고침 후 재요청 로직
    async error => {
      if (error.response?.status === 401 && isTokenExpired(accessToken)) {
        // isTokenExpired() - 토큰 만료 여부를 확인하는 함수
        // tokenRefresh() - 토큰을 갱신해주는 함수
        await tokenRefreshApi({
          refreshToken: refreshToken,
        });

        const newState = useTokenStore.getState();
        error.config.headers['Authorization'] = newState.data.accessToken;

        // 중단된 요청을(에러난 요청)을 토큰 갱신 후 재요청
        const response = await axios.request(error.config);
        return response;
      }
      return Promise.reject(error);
    },
  );
  return instance;
};

export const authInstance = axiosAuthApi(BASE_URL);
export const defaultInstance = axiosApi(BASE_URL);
