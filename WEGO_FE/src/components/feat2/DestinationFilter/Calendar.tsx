import * as S from './FilterStyle'

// 현재 날짜
const NOW = new Date();
const YEAR = NOW.getFullYear();
const MONTH = NOW.getMonth() + 1;

// 달력 만들기
const weekDay: string[] = ["일", "월", "화", "수", "목", "금", "토"];
const groupDatesByWeek = (startDay: Date, endDay: Date) => {    // 첫날과 막날 요일
  const nowMonthCalendar: Date[][] = [];
  let currentWeek: Date[] = []; // 현재 처리 중인 주
  let currentDate = new Date(startDay); // 현재 처리 중인 날짜

  while (currentDate <= endDay) {
    currentWeek.push(new Date(currentDate));

    // 현재 주의 7일을 모두 채우거나 토요일까지 채운 경우
    if (currentWeek.length === 7 || currentDate.getDay() === 6) {
      nowMonthCalendar.push(currentWeek); // 채운 주를 주 배열에 넣기
      currentWeek = []; // 주 초기화 -> 다음 주 채울 준비
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  if (currentWeek.length > 0) {
    nowMonthCalendar.push(currentWeek);
  }
  return nowMonthCalendar;
};

interface HeadProps {
  onPrevMonth: () => void;
  onNextMonth: () => void;
  year: number;
  month: number;
}

const CalendarHead = ({year, month, onPrevMonth, onNextMonth}: HeadProps) => {
  return (
    <>
      <S.MonthDisplay>
        <button onClick={onPrevMonth}>{"<-"}</button>
        <div>{year}.{String(month + 1).padStart(2, "0")}</div>
        <button onClick={onNextMonth}>{"->"}</button>
      </S.MonthDisplay>
    </>
  )
}

interface BodyProps {
  nowMonthCalendar: Date[][];   // 보여줄 현재 달의 달력
  departureDate: Date;    
  arrivalDate: Date;
  onChangeDeparture: (date: Date) => void;   // setDepartureDate
  onChangeArrival: (date: Date) => void;     // setArrivalDAte

}

const CalendarBody = ({ nowMonthCalendar, departureDate, arrivalDate, onChangeDeparture, onChangeArrival }: BodyProps) => {
  return (
    <>
      {/* 요일 보여주는 줄 */}
      <S.WeekBox>
        {weekDay.map((weekDay, index) => (
          <div key={index}>{weekDay}</div>
        ))}
      </S.WeekBox>

      {/* 달력 보여주는 부분 */}
      <S.CalendarBox>
        {nowMonthCalendar.map((week, index) => 
          week.map((date) => (
            <S.DayBtn 
              key={date.toISOString()} 
              isSelected={
                date.toDateString() === departureDate.toDateString() ||
                date.toDateString() === arrivalDate.toDateString()
              }
              onClick={() => {
                if (!departureDate || date < departureDate || (departureDate && arrivalDate && date < arrivalDate)) {
                  onChangeDeparture(date);
                } else {
                  onChangeArrival(date);
                }
              }}>
              {date.getDate()}
            </S.DayBtn>
          ))
        )}
      </S.CalendarBox>    
    </>
  )
}

interface CalendarProps {
  departureDate: Date;
  arrivalDate: Date;
  setDepartureDate: (date: Date) => void;
  setArrivalDate: (date: Date) => void;
}

const Calendar = ({ departureDate, arrivalDate, setDepartureDate, setArrivalDate}: CalendarProps) => {
  // 달력 첫 날
  const startDay = new Date(departureDate.getFullYear(), departureDate.getMonth(), 1);
  startDay.setDate(1 - startDay.getDay()); // 달력 첫날: 이전 달의 마지막 일요일

  // 달력 마지막 날
  const endDay = new Date(departureDate.getFullYear(), departureDate.getMonth() + 1, 0);
  endDay.setDate(endDay.getDate() + (6 - endDay.getDay())); // 달력 마지막 날: 해당 주의 토요일

  // 해당 달 달력
  const nowMonthCalendar = groupDatesByWeek(startDay, endDay);

  // 달력 전환
  const handlePrevMonth = () => {
    setDepartureDate(new Date(departureDate.getFullYear(), departureDate.getMonth() - 1, 1));
  }
  const handleNextMonth = () => {
    setDepartureDate(new Date(departureDate.getFullYear(), departureDate.getMonth() + 1, 1));
  }

  return (
    <S.StyedCalendar>
      <CalendarHead
        year={departureDate.getFullYear()}
        month={departureDate.getMonth()}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <CalendarBody
        nowMonthCalendar={nowMonthCalendar}
        departureDate={departureDate}
        arrivalDate={arrivalDate}
        onChangeDeparture={setDepartureDate}
        onChangeArrival={setArrivalDate}
      />
    </S.StyedCalendar>
  )
}

export default Calendar;