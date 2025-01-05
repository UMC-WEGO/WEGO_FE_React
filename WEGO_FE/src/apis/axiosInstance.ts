import axios from 'axios';

const BASE_URL = '';

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

// post, delete등 api요청 시 인증값이 필요한 경우
const axiosAuthApi = (url: string) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      Authorization: 'Bearer ' + import.meta.env.VITE_MOVIE_API_TOKEN, // .env에 숨겨놓은 api 토큰을 사용
    },
  });
  return instance;
};

export const authInstance = axiosAuthApi(BASE_URL);
export const defaultInstance = axiosApi(BASE_URL);
