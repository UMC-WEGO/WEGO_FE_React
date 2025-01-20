import styled from "styled-components";
import { useState } from "react";

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

const CalendarHead = () => {
  return (
    <h1>Head</h1>
  )
}

interface BodyProps {
  nowMonthCalendar: Date[][];
}

const CalendarBody = ({ nowMonthCalendar }: BodyProps) => {
  return (
    <CalendarBox>
      {nowMonthCalendar.map((week, index) => 
        week.map((date) => (
          <DayBtn>
            {date.getDate()}
          </DayBtn>
        ))
      )}
    </CalendarBox>
  )
}

// 현재 날짜
const Calendar = () => {
  // 선택한 날짜
  const [selectedDate, setSelectedDate] = useState(new Date());
  const selectedMonth = selectedDate.getMonth() + 1; // 선택된 월
  const selectedYear = selectedDate.getFullYear();   // 선택된 연도

  // 달력 첫 날
  const startDay = new Date(selectedYear, selectedMonth - 1, 1);
  startDay.setDate(1 - startDay.getDay()); // 달력 첫날: 이전 달의 마지막 일요일

  // 달력 마지막 날
  const endDay = new Date(selectedYear, selectedMonth, 0);
  endDay.setDate(endDay.getDate() + (6 - endDay.getDay())); // 달력 마지막 날: 해당 주의 토요일

  // 해당 달 달력
  const nowMonthCalendar = groupDatesByWeek(startDay, endDay);

  // 달력 전환
  const handlePrevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
  }
  const handleNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
  }

  return (
    <>
      <CalendarHead/>
      <CalendarBody nowMonthCalendar={nowMonthCalendar}/>
    </>
  )
}

export default Calendar;