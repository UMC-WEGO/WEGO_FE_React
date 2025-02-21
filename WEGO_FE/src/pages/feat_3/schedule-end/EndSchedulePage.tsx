import React from 'react';
import * as S from './EndSchedulePage.style';
import MissionBlueHeader from '../../../components/feat1/missionBlueHeader/MissionBlueHeader';
import SavedMission from '../../../components/feat3/saved-mission/SavedMission';
import MissionVerification from '../../../components/feat3/missionVerification/MissionVerification';
import RegisterMission from '../../../components/feat3/registerMission/RegisterMission';
import SectionGrayLine from '../../../components/feat3/SectionGrayLine';
import Navbar from '../../../components/navbar/Navbar';

// 일정 여행 보여주는 시작 화면
function EndSchedulePage() {
  return (
    <S.Container>
      <S.TopSection>
        <MissionBlueHeader />
      </S.TopSection>
      <S.MainSection>
        <SavedMission />
        {/* <SectionGrayLine />
        <MissionVerification /> */}
      </S.MainSection>
      {/* <RegisterMission /> */}
      <Navbar />
    </S.Container>
  );
}

export default EndSchedulePage;
