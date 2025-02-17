import React from 'react';
import * as S from './MissionVerification.style';

const MissionVerification = () => {
  return (
    <S.Container>
      <S.Text fontSize="18px" fontWeight="600">
        골목길 미션
      </S.Text>
      <S.ReviewBox>
        <S.TitleWrap>
          <S.TextWrap>
            <S.Text fontSize="14px" fontWeight="500">
              내용 입력
            </S.Text>
            <S.Text fontSize="10px" fontWeight="500" color="#0059FF">
              (필수)
            </S.Text>
          </S.TextWrap>
          <S.Text fontSize="10px" fontWeight="400">
            10자 이상
          </S.Text>
        </S.TitleWrap>

        <S.Textinput placeholder="다른 유저들에게 나의 즉흥 미션 수행기를 공유하세요."></S.Textinput>
      </S.ReviewBox>
    </S.Container>
  );
};

export default MissionVerification;
// 미션인증 1. 내용입력 2. 사진첨부
//     -> 삼항 연산자 써서 savedmission밑에 Line 상태관리
