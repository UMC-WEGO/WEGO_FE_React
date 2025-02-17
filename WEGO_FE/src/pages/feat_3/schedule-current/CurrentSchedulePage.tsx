import React from 'react';
import * as S from './CurrentSchedulePage.style';
import MissionBlueHeader from '../../../components/feat1/missionBlueHeader/MissionBlueHeader';
import InstanceBoard from '../../../components/feat3/InstanceBoard/InstanceBoard';
import SavedMission from '../../../components/feat3/saved-mission/SavedMission';
import MissionVerification from '../../../components/feat3/missionVerification/MissionVerification';
import RegisterMission from '../../../components/feat3/registerMission/RegisterMission';

function CurrentSchedulePage() {
  return (
    <S.Container>
      <S.TopSection>
        <MissionBlueHeader />
      </S.TopSection>
      <S.MainSection>
        {/* <InstanceBoard /> */}
        <SavedMission />
        <MissionVerification />
      </S.MainSection>
      <RegisterMission />
    </S.Container>
  );
}

export default CurrentSchedulePage;
