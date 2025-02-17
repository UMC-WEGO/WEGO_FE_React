import React from 'react';
import * as S from './NotStartedSchedulePage.style';
import InstanceBoard from '../../../components/feat3/InstanceBoard/InstanceBoard';
import SavedMission from '../../../components/feat3/saved-mission/SavedMission';
import RecommendMission from '../../../components/feat3/recommendMission/RecommendMission';
import Navbar from '../../../components/navbar/Navbar';
import MissionBlueHeader from '../../../components/feat1/missionBlueHeader/MissionBlueHeader';

function NotStartedSchedulePage() {
  return (
    <S.Container>
      <S.TopSection>
        <MissionBlueHeader />
      </S.TopSection>
      <S.MainSection>
        <InstanceBoard />
        <SavedMission />
        <RecommendMission />
      </S.MainSection>
      <Navbar />
    </S.Container>
  );
}

export default NotStartedSchedulePage;
