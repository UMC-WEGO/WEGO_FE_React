// import axios from 'axios';
import { authInstance } from './axiosUserInstance';
import { AxiosError } from 'axios';

export const userinfoApis = async () => {
  try {
    const response = await authInstance.get('/users/info');
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

export const userprofilemodifyApis = async (formData: FormData) => {
  try {
    const response = await authInstance.patch('/users/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('API 응답', response);
    console.log('API 데이터', response.data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('프로필 수정 실패', error.response?.data || error.message);
    } else {
      console.error('Unknown error', error);
    }
    throw error;
  }
};
