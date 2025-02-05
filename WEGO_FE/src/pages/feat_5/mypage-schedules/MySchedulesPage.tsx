import * as S from './MySchedulesPage.style';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Arrow from '../../../images/feat5/Arrow.svg';
import ScheduleCard from '../../../components/feat5/Schedule/ScheduleCard';
// import { initialSchedules } from '../../../mocks/feat5/ScheduleData';
import { userschedulesApis } from '../../../apis/feat5/userschedulesApis';
import {
  Schedule,
  UserSchedulesData,
} from '../../../types/feat5/UserSchedulesData';
import Loading from '../../../components/feat5/Loading';
import ErrorMessage from '../../../components/feat5/ErrorMessage';

function MySchedulesPage() {
  const navigate = useNavigate();
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  // API
  const { data, isLoading, error } = useQuery<UserSchedulesData, Error>({
    queryKey: ['userSchedules'],
    queryFn: userschedulesApis,
  });

  useEffect(() => {
    if (data?.pastTrips) {
      setSchedules(data.pastTrips);
    }
  }, [data]);

  // 로딩, 에러 처리
  if (isLoading) return <Loading />;
  if (error instanceof Error) return <ErrorMessage error={error} />;

  console.log('API 받은 데이터', data);

  const handleMissionComplete = (scheduleId: number) => {
    setSchedules(prevSchedules =>
      prevSchedules.map(schedule =>
        schedule.tripId === scheduleId
          ? {
              ...schedule,
              missions: schedule.missions.map(m => ({
                ...m,
                receivedMission: { ...m.receivedMission, status: true },
              })),
            }
          : schedule,
      ),
    );
  };

  const handleDeleteSchedule = (scheduleId: number) => {
    setSchedules(prevSchedules =>
      prevSchedules.filter(schedule => schedule.tripId !== scheduleId),
    );
  };

  return (
    <S.Container>
      <S.Content noScroll={(schedules?.length || 0) <= 1}>
        <S.Header>
          <button className="arrow-btn" onClick={() => navigate(-1)}>
            <img src={Arrow} alt="Arrow" className="arrow-img" />
          </button>
          <h1>지난 여행</h1>
        </S.Header>
        {schedules.length === 0 ? (
          <S.NoScheduleMessage>지난 여행이 없습니다.</S.NoScheduleMessage>
        ) : (
          <S.ScheduleList>
            {schedules.map(schedule => (
              <ScheduleCard
                key={schedule.tripId}
                schedule={schedule}
                onMissionComplete={handleMissionComplete}
                onDelete={handleDeleteSchedule}
              />
            ))}
          </S.ScheduleList>
        )}
      </S.Content>
    </S.Container>
  );
}

export default MySchedulesPage;
