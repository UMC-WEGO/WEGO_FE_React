import React from 'react';
import * as S from './NotStartedSchedulePage.style';
import HeaderTravelScedule from '../../../components/feat3/headerTravelScedule/HeaderTravelScedule';
import InstanceBoard from '../../../components/feat3/InstanceBoard/InstanceBoard';
import SavedMission from '../../../components/feat3/saved-mission/SavedMission';

function NotStartedSchedulePage({ title, dday, tags }) {
  return (
    <S.Container>
      <HeaderTravelScedule />
      <InstanceBoard />
      <SavedMission />
    </S.Container>
  );
}

export default NotStartedSchedulePage;
