import React, { useEffect, useState } from 'react';
import * as S from './NotStartedSchedulePage.style';
import InstanceBoard from '../../../components/feat3/InstanceBoard/InstanceBoard';
import SavedMission from '../../../components/feat3/saved-mission/SavedMission';
import RecommendMission from '../../../components/feat3/recommendMission/RecommendMission';
import Navbar from '../../../components/navbar/Navbar';
import MissionBlueHeader from '../../../components/feat1/missionBlueHeader/MissionBlueHeader';
import SectionGrayLine from '../../../components/feat3/SectionGrayLine';
import { getTripScheduleByTripIdApi } from '../../../apis/feat3/schedulesApis';
import { useNavigate, useParams } from 'react-router';
import { TTripInfo } from '../schedule-home/HomeScedulePage';
import { useScheduleStore } from '../../../store/schedule/useScheduleStore';

function NotStartedSchedulePage() {
  const navigate = useNavigate();
  const { scheduleId } = useParams();
  const { data, setData } = useScheduleStore();

  const getScheduleInfoByTripId = async () => {
    const apiRes = await getTripScheduleByTripIdApi(Number(scheduleId));
    console.log(apiRes);
    setData(apiRes.data);
  };

  useEffect(() => {
    getScheduleInfoByTripId();
  }, []);

  return (
    <S.Container>
      <S.TopSection>
        <MissionBlueHeader onOpenModal={() => navigate(-1)} />
      </S.TopSection>
      <S.MainSection>
        <InstanceBoard />
        <SectionGrayLine />
        <SavedMission />
        <SectionGrayLine />
        <RecommendMission />
      </S.MainSection>
      <Navbar />
    </S.Container>
  );
}

export default NotStartedSchedulePage;
