import { authInstance } from "../axiosInstance";

export const getScrapPostsApi = async () => {
  try {
    const apiRes = await authInstance.get('/community/my-scraps?cursor=10000');
    console.log('스크랩한 글 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('스크랩한 글 실패:', error);
    return null;
  }
};

export const getScrapPostsByCategoryApi = async categoryId => {
  try {
    const apiRes = await authInstance.get(
      `/community/my-scraps/category/${categoryId}?cursor=10000`,
    );
    console.log('스크랩한 글 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('스크랩한 글 실패:', error);
    return null;
  }
};


