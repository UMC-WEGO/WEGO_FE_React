import { authInstance, defaultInstance } from '../axiosInstance';

type TPasswordAuthCodeSendApiReqData = {
  email: string;
};

type TPasswordAuthCodeVerifyApiReqData = {
  email: string;
  code: string;
};

type TPasswordChangeApiReqData = {
  email: string;
  password: string;
};

export const passwordAuthCodeSendApi = async (
  data: TPasswordAuthCodeSendApiReqData,
) => {
  try {
    console.log(data);
    const apiRes = await defaultInstance.post('/auth/password-auth/send', data);
    console.log(apiRes);
  } catch (error) {
    console.error(error);
    alert(
      '비밀번호 변경 인증번호 전송 중 오류가 발생하였습니다. 다시 시도해 주세요',
    );
  }
};

export const passwordAuthCodeVerifyApi = async (
  data: TPasswordAuthCodeVerifyApiReqData,
) => {
  try {
    console.log(data);
    const apiRes = await defaultInstance.post(
      '/auth/password-auth/verify',
      data,
    );
    console.log(apiRes);
    return 1;
  } catch (error) {
    alert(
      '비밀번호 변경 인증번호 검증 중 오류가 발생하였습니다. 다시 시도해 주세요',
    );
    return -1;
  }
};

export const passwordChangeApi = async (data: TPasswordChangeApiReqData) => {
  try {
    console.log(data);
    const apiRes = await defaultInstance.patch('/auth/password', data);
    console.log(apiRes);
  } catch (error) {
    alert('비밀번호 변경중 오류가 발생하였습니다. 다시 시도해 주세요');
  }
};