import React from 'react';
import * as S from './ScheduleMissionsVerificaionStatusPage.style';
import BackArrow from '../../../components/feat1/backArrow/BackArrow';
import Navbar from '../../../components/navbar/Navbar';

function ScheduleMissionsVerificaionStatusPage() {
  return (
    <S.ScheduleMisstionsNextPageLayout>
      <S.ViewContainer>
        <BackArrow />
        <S.TopSection></S.TopSection>
        <S.MainSection>
          <S.MainTextBoxTop>미션을 인증 중이에요.</S.MainTextBoxTop>
          <S.MainTextBoxSub>
            적립 가능한 포인트<span>800원</span>
          </S.MainTextBoxSub>
          <S.MainMissionsBox></S.MainMissionsBox>
        </S.MainSection>
        <Navbar />
      </S.ViewContainer>
    </S.ScheduleMisstionsNextPageLayout>
  );
}

export default ScheduleMissionsVerificaionStatusPage;
