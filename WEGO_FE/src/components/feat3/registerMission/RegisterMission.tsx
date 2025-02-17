import React from 'react';
import * as S from './RegisterMission.style';

const RegisterMission = () => {
  return (
    <S.Container>
      <S.TextWrap>
        <S.Text fontSize="13px" fontWeight="500" color="#BABABA;">
          인증 완료한 미션
        </S.Text>
        <S.TextWrap row="row">
          <S.Text fontSize="16px" fontWeight="500" color="#0059FF;">
            0개
          </S.Text>
          <S.Text fontSize="16px" fontWeight="500" color="#000000;">
            / 8개
          </S.Text>
        </S.TextWrap>
      </S.TextWrap>
      <S.UploadButton>등록하기</S.UploadButton>
    </S.Container>
  );
};

export default RegisterMission;
