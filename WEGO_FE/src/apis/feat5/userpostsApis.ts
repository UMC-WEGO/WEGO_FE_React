// import axios from 'axios';
import { authInstance } from '../axiosInstance';
import { AxiosError } from 'axios';

export const userpostsApis = async () => {
  try {
    const response = await authInstance.get('/users/my-posts');
    console.log('API 데이터:', response.data);
    return response.data;

    // 현재 서버 오류(500)로 직접 데이터값 넣어 확인
    // const testData = [
    //   {
    //     postId: 1,
    //     categoryId: 1,
    //     userId: 1,
    //     localId: 1,
    //     title: '현지 맛집 정보',
    //     content: '여기에서 꼭 가봐야 할 숨겨진 맛집 리스트입니다.',
    //     pictureUrl: 'https://example.com/images/mission1.jpg',
    //     createdAt: '2024-11-26T12:00:00Z',
    //     updatedAt: '2024-11-26T12:00:00Z',
    //     likeCount: 5,
    //     scrapCount: 0,
    //     commentCount: 3,
    //   },
    //   {
    //     postId: 2,
    //     categoryId: 2,
    //     userId: 1,
    //     localId: 2,
    //     title: '테스트',
    //     content: '테스트!',
    //     pictureUrl: 'https://example.com/images/mission2.jpg',
    //     createdAt: '2024-11-27T12:00:00Z',
    //     updatedAt: '2024-11-27T12:00:00Z',
    //     likeCount: 8,
    //     scrapCount: 1,
    //     commentCount: 5,
    //   },
    // ];
    // return { data: testData };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('조회 실패:', error.response?.data || error.message);
    } else {
      console.error('Unknown error:', error);
    }
    throw error;
  }
};
