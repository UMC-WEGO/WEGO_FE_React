import styled from "styled-components";
import { useState } from "react";

const StyedCalendar = styled.div`
  margin: 20px;
`

const WeekBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;

  text-align: center;
  font-size: 12px;
  font-weight: 500;

  margin: 11px 0 11px 0;
  padding: 8px 12px 8px 12px;
`

const MonthDisplay = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid rgba(234, 234, 234, 1);
  padding: 16px 12px 16px 12px;

  font-size: 20px;
  font-weight: 600;
`

const CalendarBox = styled.div`
  display: grid;
  grid-template-row: repeat(6, 1fr);      // 6주
  grid-template-columns: repeat(7, 1fr);  // 7일
  gap: 10px;

  padding: 4px 12px 4px 12px;
`

const DayBtn = styled.button<{ isSelected:boolean }>`
  text-align: center;

  padding: 10px;
  background-color: ${({ isSelected }: { isSelected?: boolean }) => isSelected ? "lightblue" : "white"};
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`

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
      <MonthDisplay>
        <button onClick={onPrevMonth}>{"<-"}</button>
        <div>{year}.{String(month + 1).padStart(2, "0")}</div>
        <button onClick={onNextMonth}>{"->"}</button>
      </MonthDisplay>
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
      <WeekBox>
        {weekDay.map((weekDay, index) => (
          <div key={index}>{weekDay}</div>
        ))}
      </WeekBox>

      {/* 달력 보여주는 부분 */}
      <CalendarBox>
        {nowMonthCalendar.map((week, index) => 
          week.map((date) => (
            <DayBtn 
              key={date.toISOString()} 
              isSelected={
                date.toDateString() === departureDate.toDateString() ||
                date.toDateString() === arrivalDate.toDateString()
              }
              onClick={() => {
                if (!departureDate || date < departureDate) {
                  onChangeDeparture(date);
                }
                else {
                  onChangeArrival(date);
                }
              }}>
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
    <StyedCalendar>
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
    </StyedCalendar>
  )
}

export default Calendar;