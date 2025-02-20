import React, { useState } from 'react';
import * as S from './SavedMission.style';
import SavedMissionCard from './SavedMissionCard';

const SavedMission = () => {
  return (
    <S.Container>
      <S.TitleBoxWrap>
        <S.Title>저장한 미션</S.Title>
        <S.MoreInfor>
          0/10
          <img src="/src/images/feat3/InforIcon.svg" alt="i 아이콘" />
        </S.MoreInfor>
      </S.TitleBoxWrap>
      <S.ContentBox_mission>
        <SavedMissionCard />
        <SavedMissionCard />
        <SavedMissionCard />
        <SavedMissionCard />
        <SavedMissionCard />
      </S.ContentBox_mission>
      {/* <S.ContentBox_noMission>
        <img src="/src/images/feat3/iconoir_plus-circle-solid.svg" alt="" />
        미션을 추가하세요!
      </S.ContentBox_noMission> */}
    </S.Container>
  );
};

export default SavedMission;
