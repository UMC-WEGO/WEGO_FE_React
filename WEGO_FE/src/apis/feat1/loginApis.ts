import { defaultInstance } from '../axiosInstance';
import {} from '../../types/SignUpFormData';

import axios from 'axios';

const login = async (username, password) => {
  try {
    const response = await axios.post('https://api.example.com/login', {
      username,
      password,
    });

    // 응답 헤더에서 토큰 추출
    const accessToken = response.headers['authorization']; // 예: 헤더 키가 "Authorization"일 경우

    if (accessToken) {
      // 로컬 스토리지에 저장 (또는 다른 저장소 사용)
      localStorage.setItem('accessToken', accessToken);

      console.log('Access Token:', accessToken);
      return accessToken;
    } else {
      console.error('Access token not found in headers.');
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
};