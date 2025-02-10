import { authInstance, defaultInstance } from '../axiosInstance';

// 게시글 작성
export const createPostApi = async (postData: {
  category_id: number;
  local_id: number;
  title: string;
  content: string;
  picture_url: string[];
}) => {
  try {
    const apiRes = await authInstance.post('/community/posts', postData);
    console.log('게시글 작성 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('게시글 작성 실패:', error);
    return null;
  }
};

// 게시글 수정
export const updatePostApi = async (
  post_id: number,
  updateData: {
    category_id: number;
    local_id: number;
    title?: string;
    content?: string;
    picture_url?: string[];
  },
) => {
  try {
    const apiRes = await authInstance.patch(
      `/community/posts/modify/${post_id}`,
      updateData,
    );
    console.log('게시글 수정 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('게시글 수정 실패:', error);
    return null;
  }
};

// 게시글 삭제
export const deletePostApi = async (post_id: number) => {
  try {
    const apiRes = await authInstance.delete(
      `/community/posts/delete/${post_id}`,
    );
    console.log('게시글 삭제 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('게시글 삭제 실패:', error);
    return null;
  }
};

// 전체 게시글 조회
export const getAllPostsApi = async (cursor: number) => {
  try {
    const apiRes = await defaultInstance.get('/community/impromptu-posts', {
      params: { cursor },
    });

    console.log('전체 게시글 조회 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('전체 게시글 조회 실패:', error);
    return null;
  }
};

// 인기 게시글 조회
export const getPopularPostsApi = async () => {
  try {
    const apiRes = await defaultInstance.get('/community/popular-posts');
    console.log('인기 게시글 조회 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('인기 게시글 조회 실패:', error);
    return null;
  }
};

// 특정 게시글 조회
export const getPostByIdApi = async (post_id: number) => {
  try {
    const apiRes = await authInstance.get(`/community/posts/${post_id}`);
    console.log('특정 게시글 조회 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('특정 게시글 조회 실패:', error);
    return null;
  }
};

// 내가 작성한 게시글 조회
export const getMyPostsApi = async (user_id: number) => {
  try {
    const apiRes = await authInstance.get(`/community/my-posts/${user_id}`);
    console.log('내 게시글 조회 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('내 게시글 조회 실패:', error);
    return null;
  }
};

// 댓글 작성
export const createCommentApi = async (
  post_id: number,
  content: string,
  user_id: number,
) => {
  try {
    const apiRes = await authInstance.post(
      `/community/posts/${post_id}/comments`,
      { content, user_id },
    );
    console.log('댓글 작성 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('댓글 작성 실패:', error);
    return null;
  }
};

// 댓글 삭제
export const deleteCommentApi = async (post_id: number, comment_id: number) => {
  try {
    const apiRes = await authInstance.delete(
      `/community/posts/${post_id}/comments/${comment_id}`,
    );
    console.log('댓글 삭제 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('댓글 삭제 실패:', error);
    return null;
  }
};

// 좋아요 누르기
export const likePostApi = async (post_id: number, user_id: number) => {
  try {
    const apiRes = await authInstance.post(
      `/community/posts/${post_id}/likes/${user_id}`,
    );
    console.log('좋아요 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('좋아요 실패:', error);
    return null;
  }
};

// 좋아요 취소
export const unlikePostApi = async (post_id: number, user_id: number) => {
  try {
    const apiRes = await authInstance.delete(
      `/community/delete/${post_id}/likes/${user_id}`,
    );
    console.log('좋아요 취소 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('좋아요 취소 실패:', error);
    return null;
  }
};

// 게시글 스크랩
export const scrapPostApi = async (post_id: number, user_id: number) => {
  try {
    const apiRes = await authInstance.post(
      `/community/posts/${post_id}/scrap/${user_id}`,
    );
    console.log('게시글 스크랩 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('게시글 스크랩 실패:', error);
    return null;
  }
};

// 스크랩 삭제
export const deleteScrapApi = async (post_id: number, user_id: number) => {
  try {
    const apiRes = await authInstance.delete(
      `/community/delete/${post_id}/scrap/${user_id}`,
    );
    console.log('스크랩 삭제 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('스크랩 삭제 실패:', error);
    return null;
  }
};

// 스크랩한 글 조회
export const getMyScrapsApi = async (user_id: number) => {
  try {
    const apiRes = await authInstance.get(`/community/my-scraps/${user_id}`);
    console.log('스크랩한 글 조회 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('스크랩한 글 조회 실패:', error);
    return null;
  }
};

// 카테고리별 스크랩 조회
export const getScrapsByCategoryApi = async (
  user_id: number,
  category_id: number,
) => {
  try {
    const apiRes = await authInstance.get(
      `/community/my-scraps/${user_id}/category/${category_id}`,
    );
    console.log('카테고리별 스크랩 조회 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('카테고리별 스크랩 조회 실패:', error);
    return null;
  }
};

// 게시글 작성자 프로필 조회
export const getUserProfileApi = async (user_id: number) => {
  try {
    const apiRes = await defaultInstance.get(
      `/community/users/${user_id}/profile`,
    );
    console.log('게시글 작성자 프로필 조회 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('게시글 작성자 프로필 조회 실패:', error);
    return null;
  }
};

// 카테고리별 게시글 조회
export const getPostsByCategoryApi = async (
  category_id: number,
  page: number,
  limit: number,
) => {
  try {
    const apiRes = await defaultInstance.get(
      `/impromptu-posts/${category_id}`,
      {
        params: { page, limit },
      },
    );
    console.log('카테고리별 게시글 조회 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('카테고리별 게시글 조회 실패:', error);
    return null;
  }
};

// 지역별 상위 2개 게시글 조회
export const getTopLocalPostsApi = async (local_id: number) => {
  try {
    const apiRes = await defaultInstance.get(
      `/impromptu-posts/top-local/${local_id}`,
    );
    console.log('지역별 상위 2개 게시글 조회 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('지역별 상위 2개 게시글 조회 실패:', error);
    return null;
  }
};

// 전체 상위 2개 게시글 조회
export const getTopPostsApi = async () => {
  try {
    const apiRes = await defaultInstance.get('/posts/top');
    console.log('전체 상위 2개 게시글 조회 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('전체 상위 2개 게시글 조회 실패:', error);
    return null;
  }
};

// 최근 출발 지역 조회
export const getRecentLocalApi = async () => {
  try {
    const apiRes = await defaultInstance.get(`/community/posts/local-search`);
    console.log('최근 출발 지역 조회 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('최근 출발 지역 조회 실패:', error);
    return null;
  }
};
