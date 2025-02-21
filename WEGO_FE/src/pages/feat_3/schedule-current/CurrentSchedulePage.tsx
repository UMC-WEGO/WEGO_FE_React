import React, { useEffect, useState } from 'react';
import * as S from './CurrentSchedulePage.style';
import MissionBlueHeader from '../../../components/feat1/missionBlueHeader/MissionBlueHeader';
import InstanceBoard from '../../../components/feat3/InstanceBoard/InstanceBoard';
import SavedMission from '../../../components/feat3/saved-mission/SavedMission';
import MissionVerification from '../../../components/feat3/missionVerification/MissionVerification';
import RegisterMission from '../../../components/feat3/registerMission/RegisterMission';
import AlertModal from '../modal/AlertModal';
import SectionGrayLine from '../../../components/feat3/SectionGrayLine';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import {
  getTripScheduleByTripIdApi,
  getTripSchedulesCurrentApi,
} from '../../../apis/feat3/schedulesApis';
import { useScheduleStore } from '../../../store/schedule/useScheduleStore';
import { useVerifyMissionStore } from '../../../store/schedule/useVerifyMissionStore';

function CurrentSchedulePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  const { scheduleId } = useParams();
  const { data, setData } = useScheduleStore();
  const getCurrentSchedule = async () => {
    const apiRes = await getTripSchedulesCurrentApi(Number(scheduleId));
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
        <MissionBlueHeader onOpenModal={handleModalOpen} />
      </S.TopSection>
      <S.MainSection>
        <InstanceBoard />
        <SectionGrayLine />
        <SavedMission scheduleType="curr" />
        <SectionGrayLine />
        {missionVerifyInfo.verifyMissionId != 0 && (
          <MissionVerification missionId={missionVerifyInfo.verifyMissionId} />
        )}
      </S.MainSection>
      <RegisterMission onOpenModal={handleModalOpen} />
      {isModalOpen ? <AlertModal onClose={handleCloseModal} /> : null}
    </S.Container>
  );
}

export default CurrentSchedulePage;
