import React, { useEffect } from 'react';
import * as S from './EndSchedulePage.style';
import MissionBlueHeader from '../../../components/feat1/missionBlueHeader/MissionBlueHeader';
import SavedMission from '../../../components/feat3/saved-mission/SavedMission';
import MissionVerification from '../../../components/feat3/missionVerification/MissionVerification';
import RegisterMission from '../../../components/feat3/registerMission/RegisterMission';
import SectionGrayLine from '../../../components/feat3/SectionGrayLine';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { useScheduleStore } from '../../../store/schedule/useScheduleStore';
import {
  getTripScheduleByTripIdApi,
  getTripSchedulesCurrentApi,
} from '../../../apis/feat3/schedulesApis';
import { useVerifyMissionStore } from '../../../store/schedule/useVerifyMissionStore';

// 일정 여행 보여주는 시작 화면
function EndSchedulePage() {
  const navigate = useNavigate();
  const { scheduleId } = useParams();
  const { data, setData } = useScheduleStore();
  const getCurrentSchedule = async () => {
    const apiRes = await getTripScheduleByTripIdApi(Number(scheduleId));
    console.log(apiRes);
    setData(apiRes.data);
  };
  const { data: missionVerifyInfo } = useVerifyMissionStore();

  useEffect(() => {
    getCurrentSchedule();
  }, []);

  console.log(missionVerifyInfo.verifyMissionId);

  return (
    <S.Container>
      <S.TopSection>
        <MissionBlueHeader />
      </S.TopSection>
      <S.MainSection>
        <SavedMission />
        <SectionGrayLine />
        {missionVerifyInfo.verifyMissionId != 0 && (
          <MissionVerification missionId={missionVerifyInfo.verifyMissionId} />
        )}
      </S.MainSection>
      <RegisterMission />
    </S.Container>
  );
}

export default EndSchedulePage;
