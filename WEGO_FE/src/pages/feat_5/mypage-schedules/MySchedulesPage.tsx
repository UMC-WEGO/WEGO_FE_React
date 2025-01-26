import * as S from './MySchedulesPage.style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Arrow from '../../../images/feat5/Arrow.svg';
import ScheduleCard from '../../../components/feat5/Schedule/ScheduleCard';
import { initialSchedules } from '../../../mocks/feat5/ScheduleData';

function MySchedulesPage() {
  const navigate = useNavigate();
  const [noScroll, setNoScroll] = useState(false);
  const [schedules, setSchedules] = useState(initialSchedules);

  useEffect(() => {
    setNoScroll(schedules.length <= 1);
  }, [schedules]);

  const handleMissionComplete = (scheduleId: number) => {
    setSchedules(prevSchedules =>
      prevSchedules.map(schedule =>
        schedule.id === scheduleId
          ? { ...schedule, isMissionCompleted: true }
          : schedule,
      ),
    );
  };

  const handleDeleteSchedule = (scheduleId: number) => {
    setSchedules(prevSchedules =>
      prevSchedules.filter(schedule => schedule.id !== scheduleId),
    );
  };

  return (
    <S.Container>
      <S.Content noScroll={noScroll}>
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
                key={schedule.id}
                schedule={{ ...schedule, missions: schedule.missions || [] }}
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
