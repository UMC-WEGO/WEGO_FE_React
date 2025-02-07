import { defaultInstance } from '../feat5/axiosInstance';
import {
  TEmailDupCheckApiReqData,
  TEmailVerifyResponseApiReqData,
  TEmailVerifySendApiReqData,
  TNicknameDupCheckApiReqData,
  TSignupApiReqData,
} from '../../types/SignUpFormData';

export const signupApi = async (data: TSignupApiReqData) => {
  try {
    console.log(data);
    const apiRes = await defaultInstance.post('/auth/signUp', data);
  } catch (error) {
    alert('회원가입 진행 중 오류가 발생하였습니다. 다시 시도해 주세요');
  }
};

export const emailVerifySendApi = async (data: TEmailVerifySendApiReqData) => {
  try {
    console.log(data);
    const apiRes = await defaultInstance.post('/auth/email-auth/send', data);
  } catch (error) {
    alert('이메일 인증번호 전송 중 오류가 발생하였습니다. 다시 시도해 주세요');
  }
};

export const emailVerifyResponseApi = async (
  data: TEmailVerifyResponseApiReqData,
) => {
  try {
    console.log(data);
    const apiRes = await defaultInstance.post('/auth/email-auth/verify', data);
    console.log(apiRes);
  } catch (error) {
    alert('이메일 인증번호 검증 중 오류가 발생하였습니다. 다시 시도해 주세요');
  }
};

export const emailDupCheckApi = async (
  data: TEmailDupCheckApiReqData | TNicknameDupCheckApiReqData,
) => {
  try {
    const apiRes = await defaultInstance.post('/auth/email-check', data);
    console.log(apiRes, '이메일 중복검사');
    return apiRes.data;
  } catch (error) {
    // console.log(error);
    return error.response.data;
  }
};

export const nicknameDupCheckApi = async (
  data: TNicknameDupCheckApiReqData | TEmailDupCheckApiReqData,
) => {
  try {
    const apiRes = await defaultInstance.post('/auth/nickname-check', data);
    return apiRes.data;
  } catch (error) {
    return error.response.data;
  }
};
