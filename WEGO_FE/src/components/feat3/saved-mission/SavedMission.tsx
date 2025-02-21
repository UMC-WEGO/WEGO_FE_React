import React, { useEffect, useState } from 'react';
import * as S from './SavedMission.style';
import SavedMissionCard from './SavedMissionCard';
import { useScheduleStore } from '../../../store/schedule/useScheduleStore';
import { getMissionsApi } from '../../../apis/feat3/schedulesApis';
import { useParams } from 'react-router';

const SavedMission = ({ scheduleType = '' }) => {
  const { data } = useScheduleStore();
  const { scheduleId } = useParams();
  const [missions, setMissions] = useState([]);

  const getMissions = async () => {
    const apiRes = await getMissionsApi(Number(scheduleId));
    console.log(apiRes);
    setMissions(apiRes.data);
  };

  useEffect(() => {
    getMissions();
  }, []);

  return (
    <S.Container>
      <S.TitleBoxWrap>
        <S.Title>저장한 미션</S.Title>
        <S.MoreInfor>
          {missions.length}/10
          <img src="/src/images/feat3/InforIcon.svg" alt="i 아이콘" />
        </S.MoreInfor>
      </S.TitleBoxWrap>
      <S.ContentBox_mission>
        {(missions || data?.missions) &&
        (scheduleType === '' || scheduleType !== '')
          ? (missions || data?.missions)?.map((item, idx) => (
              <SavedMissionCard key={idx} mission={item} />
            ))
          : '현재 저장된 미션이 없습니다!'}
      </S.ContentBox_mission>
      {/* <S.ContentBox_noMission>
        <img src="/src/images/feat3/iconoir_plus-circle-solid.svg" alt="" />
        미션을 추가하세요!
      </S.ContentBox_noMission> */}
    </S.Container>
  );
};

export default SavedMission;
