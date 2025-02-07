// import axios from 'axios';
import { authInstance } from './axiosUserInstance';
import { AxiosError } from 'axios';

export const userschedulesApis = async () => {
  try {
    const response = await authInstance.get('/users/past-trips');
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

export const deleteschedulesApis = async (tripId: number) => {
  try {
    const response = await authInstance.delete(`/users/past-trips/${tripId}`);
    console.log('지난 여행 일정 삭제 성공', response);
    console.log('API 데이터', response.data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('삭제 실패', error.response?.data || error.message);
    } else {
      console.error('Unknown error', error);
    }
    throw error;
  }
};
