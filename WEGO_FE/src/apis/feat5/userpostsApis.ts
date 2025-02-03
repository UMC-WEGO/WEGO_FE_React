// import axios from 'axios';
import { authInstance } from '../axiosInstance';
import { AxiosError } from 'axios';

export const userpostsApis = async () => {
  try {
    const response = await authInstance.get('/users/my-posts');
    console.log('API 응답', response);
    console.log('API 데이터', response.data);
    if (response.data.result) {
      return response.data.result;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('조회 실패', error.response?.data || error.message);
    } else {
      console.error('Unknown error', error);
    }
    throw error;
  }
};
