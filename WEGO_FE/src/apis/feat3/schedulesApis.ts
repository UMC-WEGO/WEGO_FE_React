import { authInstance } from "../axiosInstance";

// 여행 일정 목록 조회
export const getTripSchedulesApi = async (userId: number) => {
  try {
    const apiRes = await authInstance.get(
      '/schedule/trip-schedules?userId=' + userId,
    );
    console.log('여행 일정 목록 조회 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('여행 일정 목록 조회 실패:', error);
    return null;
  }
};

// 지난 여행 일정 목록 조회
export const getPastTripSchedulesApi = async (userId: number) => {
  try {
    const apiRes = await authInstance.get(
      '/schedule/past-trips?userId=' + userId,
    );
    console.log('지난 여행 일정 목록 조회 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('지난 여행 일정 목록 조회 실패:', error);
    return null;
  }
};

// 특정 여행지 일정 조회
export const getTripScheduleByTripIdApi = async (tripId:number) => {
  try {
    const apiRes = await authInstance.get('/schedule/trip-schedules/' + tripId);
    console.log('특정 여행지 일정 조회 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('특정 여행지 일정 조회 실패:', error);
    return null;
  }
};

// 즉흥 게시판 지역별 조회
export const getSpontaneousLocalPostsApi = async (tripId:number, local:string) => {
  try {
    const apiRes = await authInstance.get('/schedule/trip-schedules/' + tripId + '/spontaneous-posts/' + local);
    console.log('즉흥 게시판 지역별 조회 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('즉흥 게시판 지역별 조회 실패:', error);
    return null;
  }
};

// 여행 날짜 수정
export const putTripDateApi = async (tripId:number, reqData) => {
  try {
    const apiRes = await authInstance.put('/schedule/trip-schedules/' + tripId + '/dates', reqData);
    // {
    //   "startDate": "2024-11-26T10:00:00Z",
    //   "endDate": "2024-11-27T10:00:00Z"
    // }
    console.log('여행 날짜 수정 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('여행 날짜 수정 실패:', error);
    return null;
  }
};

// 여행 인원수 수정
export const putTripParticipantsApi = async (tripId:number, reqData) => {
  try {
    const apiRes = await authInstance.put('/schedule/trip-schedules/' + tripId + '/participants', reqData);
    // {
    //   "adults": 3,
    //   "children": 2
    // }
    console.log('여행 날짜 수정 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('여행 날짜 수정 실패:', error);
    return null;
  }
};

// 현재 여행일정 조회
export const getTripSchedulesCurrentApi = async (tripId:number) => {
  try {
    const apiRes = await authInstance.get('/schedule/trip-schedules/' + tripId + '/current' );
    console.log('현재 여행일정 조회 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('현재 여행일정 조회 실패:', error);
    return null;
  }
};

// 저장된 미션 목록 조회
export const getMissionsApi = async (tripId:number) => {
  try {
    const apiRes = await authInstance.get('/schedule/trip-schedules/' + tripId + '/missions/auth' );
    console.log('저장된 미션 목록 조회 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('저장된 미션 목록 조회 실패:', error);
    return null;
  }
};

// 저장된 미션 인증
export const postVerifyMissionApi = async (tripId:number, missionId:number) => {
  try {
    const apiRes = await authInstance.get('/schedule/trip-schedules/' + tripId + '/missions/' + missionId + '/auth' );
    console.log('저장된 미션 인증 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('저장된 미션 인증 실패:', error);
    return null;
  }
};

// 모든 미션 인증 완료 후 여행 일정 조회
export const getCompletedScheduleApi = async (tripId:number) => {
  try {
    const apiRes = await authInstance.get(`/schedule/trip-schedules/${tripId}/status/completed` );
    console.log('모든 미션 인증 완료 후 여행 일정 조회 성공:', apiRes.data);
    return apiRes.data;
  } catch (error) {
    console.error('모든 미션 인증 완료 후 여행 일정 조회 실패:', error);
    return null;
  }
};