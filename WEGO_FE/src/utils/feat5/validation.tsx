// 본인 정보는 제외
interface ValidationErrors {
  username?: string;
  useremail?: string;
}

export const validateUsername = (
  username: string,
  existingUsers: { userId: string; username: string }[],
  currentUserId: string | undefined,
): string | undefined => {
  if (username.length > 10) {
    return '닉네임은 10글자 이내로 작성해주세요.';
  }
  if (
    existingUsers.some(
      user => user.username === username && user.userId !== currentUserId,
    )
  ) {
    return '중복된 닉네임이 존재합니다.';
  }
  return undefined;
};

export const validateUseremail = (
  useremail: string,
  existingUsers: { userId: string; useremail: string }[],
  currentUserId: string | undefined,
): string | undefined => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(useremail)) {
    return '이메일 형식이 올바르지 않습니다.';
  }
  if (
    existingUsers.some(
      user => user.useremail === useremail && user.userId !== currentUserId,
    )
  ) {
    return '중복된 이메일이 존재합니다.';
  }
  return undefined;
};

export const validateInputs = (
  username: string,
  useremail: string,
  existingUsers: { userId: string; username: string; useremail: string }[],
  currentUserId: string | undefined,
): ValidationErrors => {
  const errors: ValidationErrors = {};
  errors.username = validateUsername(username, existingUsers, currentUserId);
  errors.useremail = validateUseremail(useremail, existingUsers, currentUserId);
  return errors;
};
