import styled from "styled-components";
import { useState } from "react";

const WeekBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  text-align: center;
  font-weight: bold;
`

const MonthDisplay = styled.div`

`

const CalendarBox = styled.div`
  display: grid;
  grid-template-row: repeat(6, 1fr);      // 6주
  grid-template-columns: repeat(7, 1fr);  // 7일
  gap: 5px;
`

const DayBtn = styled.button`
  textAlign: center;

  padding: 10px;
`

// 현재 날짜
const NOW = new Date();
const YEAR = NOW.getFullYear();
const MONTH = NOW.getMonth() + 1;

// 달력 만들기
const weekDay: string[] = ["일", "월", "화", "수", "목", "금", "토"];
const groupDatesByWeek = (startDay: Date, endDay: Date) => {
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
      <MonthDisplay>
        <button onClick={onPrevMonth}>{"<-"}</button>
        <span>{year}.{String(month).padStart(2, "0")}</span>
        <button onClick={onNextMonth}>{"->"}</button>
      </MonthDisplay>
    </>
  )
}

interface BodyProps {
  nowMonthCalendar: Date[][];
  selectedDate: Date;
  onChangeDay: (date: Date) => void;
}

const CalendarBody = ({ nowMonthCalendar, selectedDate, onChangeDay }: BodyProps) => {
  return (
    <>
      <WeekBox>
        {weekDay.map((weekDay, index) => (
          <div key={index}>{weekDay}</div>
        ))}
      </WeekBox>
      <CalendarBox>
        {nowMonthCalendar.map((week, index) => 
          week.map((date) => (
            <DayBtn key={date.toISOString()} onClick={() => onChangeDay(date)}>
              {date.getDate()}
            </DayBtn>
          ))
        )}
      </CalendarBox>    
    </>

  )
}

interface CalendarProps {
  departureDate: Date;
  departureMonth: number;
  departureYear: number;
  setDepartureDate: any;
}

const Calendar = ({ departureDate, setDepartureDate, departureMonth, departureYear}: CalendarProps) => {
  // 달력 첫 날
  const startDay = new Date(departureYear, departureMonth - 1, 1);
  startDay.setDate(1 - startDay.getDay()); // 달력 첫날: 이전 달의 마지막 일요일

  // 달력 마지막 날
  const endDay = new Date(departureYear, departureMonth, 0);
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
    <>
      <CalendarHead
        year={departureYear}
        month={departureMonth}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <CalendarBody
        nowMonthCalendar={nowMonthCalendar}
        selectedDate={departureDate}
        onChangeDay={setDepartureDate}
      />
    </>
  )
}

export default Calendar;