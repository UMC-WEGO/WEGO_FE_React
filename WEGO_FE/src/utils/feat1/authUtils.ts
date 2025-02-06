// utils/authUtils.ts
// 만료되면 true 반환
export const isTokenExpired = (token: string | null): boolean => {
  if (!token) return true; // 토큰이 없으면 만료된 것으로 간주

  try {
    const payloadBase64 = token.split('.')[1]; // JWT의 payload 부분
    const decodedPayload = JSON.parse(atob(payloadBase64)); // Base64 디코딩

    const exp = decodedPayload.exp; // 만료 시간 (Unix Timestamp)
    if (!exp) return true; // 만료 시간이 없으면 만료된 것으로 간주

    const now = Math.floor(Date.now() / 1000); // 현재 시간 (Unix Timestamp)
    console.log(exp, now, '만료, 현재');
    return now >= exp; // 현재 시간이 만료 시간보다 크거나 같으면 만료됨
  } catch (error) {
    console.error('Invalid token format', error);
    return true; // 파싱 에러가 발생하면 만료된 것으로 간주
  }
};
