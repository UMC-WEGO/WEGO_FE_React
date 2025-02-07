import * as S from './MySchedulesPage.style';
import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Arrow from '../../../images/feat5/Arrow.svg';
import ScheduleCard from '../../../components/feat5/Schedule/ScheduleCard';
// import { initialSchedules } from '../../../mocks/feat5/ScheduleData';
import {
  userschedulesApis,
  deleteschedulesApis,
} from '../../../apis/feat5/userschedulesApis';
import {
  Schedule,
  UserSchedulesData,
} from '../../../types/feat5/UserSchedulesData';
import Loading from '../../../components/feat5/Loading';
import ErrorMessage from '../../../components/feat5/ErrorMessage';

function MySchedulesPage() {
  const navigate = useNavigate();
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  // API (지난 여행 조회)
  const { data, isLoading, error } = useQuery<UserSchedulesData, Error>({
    queryKey: ['userSchedules'],
    queryFn: userschedulesApis,
  });

  useEffect(() => {
    if (data?.pastTrips) {
      setSchedules(data.pastTrips);
    }
  }, [data]);

  // API (지난 여행 삭제)
  const deleteMutation = useMutation({
    mutationFn: deleteschedulesApis,
    onSuccess: (_, tripId) => {
      setSchedules(prevSchedules =>
        prevSchedules.filter(schedule => schedule.tripId !== tripId),
      );
    },
    onError: error => {
      console.error('삭제 실패', error);
    },
  });

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
    deleteMutation.mutate(scheduleId);
  };

  return (
    <S.Container>
      {/* 스크롤 숫자 */}
      <S.Content noScroll={(schedules?.length || 0) <= 2}>
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
