import { authInstance, defaultInstance } from '../axiosInstance';
import {} from '../../types/SignUpFormData';
import { useTokenStore } from '../../store/token/useTokenStore';
import { isTokenExpired } from '../../utils/feat1/authUtils';

type TLoginApiReqData = {
  email: string;
  password: string;
};

type TRefreshApiReqData = {
  refreshToken: string;
};

const { data, setData } = useTokenStore.getState();

export const loginApi = async ({ email, password }: TLoginApiReqData) => {
  try {
    const apiRes = await defaultInstance.post('/auth/login', {
      email,
      password,
    });

    console.log(apiRes.headers['authorization']);

    // 응답 데이터에서 리프레쉬 토큰 추출
    const refreshToken = apiRes.data.result.refreshToken;
    setData({
      refreshToken: refreshToken,
    });

    // 응답 헤더에서 토큰 추출
    const accessToken = apiRes.headers['authorization']; // 예: 헤더 키가 "Authorization"일 경우

    // 액세스 토큰 있으면 출력 후 스토어에 저장
    if (accessToken) {
      console.log('Access Token:', accessToken);
      console.log(isTokenExpired(accessToken));
      setData({ accessToken: accessToken });
    } else {
      console.error('액세스 토큰을 헤더에서 찾을 수 없음');
      return -1;
    }
  } catch (error) {
    console.error('로그인 실패:', error);
    return -1;
  }
};

export const tokenRefreshApi = async (data: TRefreshApiReqData) => {
  try {
    const apiRes = await authInstance.post('/auth/refresh', data);
    console.log(apiRes);

    // 응답 헤더에서 토큰 추출
    const accessToken = apiRes.headers['authorization']; // 예: 헤더 키가 "Authorization"일 경우

    if (accessToken) {
      console.log('Access Token:', accessToken);
      setData({ accessToken: accessToken });
    } else {
      console.error('액세스 토큰을 헤더에서 찾을 수 없음');
    }
  } catch (error) {
    console.error('회원 탈퇴 실패:', error);
  }
};

export const logoutApi = async () => {
  try {
    const apiRes = await authInstance.patch('/auth/logout');
    console.log(apiRes);
    return 1;
  } catch (error) {
    console.error('로그아웃 실패:', error);
    return -1;
  }
};

export const userDeleteApi = async () => {
  try {
    const apiRes = await authInstance.patch('auth/delete');
    console.log(apiRes);
    return 1;
  } catch (error) {
    console.error('회원 탈퇴 실패:', error);
    return -1;
  }
};
