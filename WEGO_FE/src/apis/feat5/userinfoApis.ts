// import axios from 'axios';
import { authInstance } from '../axiosInstance';
import { AxiosError } from 'axios';

export const userinfoApis = async () => {
  try {
    const response = await authInstance.get('/users/info');
    console.log('API 데이터:', response.data);
    return response.data;

    // 현재 서버 오류(500)로 직접 데이터값 넣어 확인
    // const testData = {
    //   user_id: 1,
    //   email: 'test@example.com',
    //   nickname: 'tndbsrkd',
    //   profile_image: 'https://example.com/images/profile.jpg',
    //   point: 1400,
    //   temperature: 30,
    //   travelCount: 1,
    //   completedMissions: 8,
    // };
    // return { data: testData };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('조회 실패', error.response?.data || error.message);
    } else {
      console.error('Unknown error:', error);
    }
    throw error;
  }
};
