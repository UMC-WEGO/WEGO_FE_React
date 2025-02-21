import React, { useState } from 'react';
import * as S from './RegisterMission.style';
import AlertModal from '../../../pages/feat_3/modal/AlertModal';
import { postVerifyMissionApi } from '../../../apis/feat3/schedulesApis';
import { useParams } from 'react-router';
import { useVerifyMissionStore } from '../../../store/schedule/useVerifyMissionStore';

const RegisterMission = ({ onOpenModal }) => {
  const { scheduleId } = useParams();
  const { data } = useVerifyMissionStore();
  const postVerifyMission = async () => {
    const apiRes = await postVerifyMissionApi(
      Number(scheduleId),
      data.verifyMissionId,
    );
    console.log(apiRes);
  };
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
      <S.UploadButton
        onClick={() => {
          onOpenModal();
          postVerifyMission();
        }}
      >
        등록하기
      </S.UploadButton>
    </S.Container>
  );
};

export default RegisterMission;
