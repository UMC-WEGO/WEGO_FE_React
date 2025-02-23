import styled from "styled-components";

// --- --- --- SelectDeparture.tsx
// const SearchCard = styled.div`
//   display: flex;
//   flex-direction: column;
// `

// const SearchHeader = styled.div`
//   border-bottom: 1px solid rgba(234, 234, 234, 1);
//   padding: 15px;

//   display: flex;
//   justify-content: space-between;
// `

// const NotionRow = styled.div`
//   color: rgba(0, 89, 255, 1);

//   padding: 15px;
// `

export const SearchRow = styled.div`
  padding: 15px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
`

export const LabelBox = styled.div`
  display: flex;
  gap: 10px;

  margin-top: 8px;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;    //스크롤바 지우기
`

export const LocationElement = styled.button<{ isSelected: boolean }>`
  border-radius: 13px;  
  padding: 7px 14px 7px 14px;

  font-size: 12px;
  font-weight: 600;

  // 선택된 경우 색상 변경
  background-color: ${({ isSelected }) => (isSelected ? "rgba(0, 89, 255, 0.1)" : "rgba(246, 246, 246, 1)")};
  color: ${({ isSelected }) => (isSelected ? "rgba(0, 89, 255, 1)" : "black")};
`

export const LocationTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
`

// // const BottomSheetBtn = styled.button`
// //   display: flex;
// //   padding-left: 30%;
// //   justify-content: space-between;

// //   background-color: white;
// //   width: 370px;
// // `

// --- --- --- SearchDeparture.tsx --- --- ---
export const MapPinImg = styled.img`
  padding: 7.4px 8.63px 7.4px 8.63px;
  background-color: rgba(246, 246, 246, 1);
  border-radius: 18.5px;
`

export const SearchCard = styled.div`
  display: flex;
  flex-direction: column;
`

export const SearchHeader = styled.div`
  border-bottom: 1px solid rgba(234, 234, 234, 1);
  padding: 15px;

  display: flex;
  // justify-content: space-between;
`

export const NotionRow = styled.div`
  color: rgba(0, 89, 255, 1);

  padding: 15px;
`

export const Element = styled.button<{ isSelected: boolean }>`
  width: 100%;
  height: 37px;
  margin: 20px;
  padding: 20px 5px 20px 5px;

  border-radius: 13px;

  display: flex;
  align-items: center;

  // 선택된 경우 색상 변경
  background-color: ${({ isSelected }) => (isSelected ? "rgba(0, 89, 255, 0.1)" : "rgba(246, 246, 246, 1)")};
  color: ${({ isSelected }) => (isSelected ? "rgba(0, 89, 255, 1)" : "black")};
`

// --- --- --- Calendar.tsx --- --- ---
export const StyedCalendar = styled.div`
  margin: 20px;
`

export const WeekBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;

  text-align: center;
  font-size: 12px;
  font-weight: 500;

  margin: 11px 0 11px 0;
  padding: 8px 12px 8px 12px;
`

export const MonthDisplay = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid rgba(234, 234, 234, 1);
  padding: 16px 12px 16px 12px;

  font-size: 20px;
  font-weight: 600;
`

export const CalendarBox = styled.div`
  display: grid;
  grid-template-row: repeat(6, 1fr);      // 6주
  grid-template-columns: repeat(7, 1fr);  // 7일
  gap: 10px;

  padding: 4px 12px 4px 12px;
`

export const DayBtn = styled.button<{ isSelected:boolean }>`
  text-align: center;

  padding: 10px;
  background-color: ${({ isSelected }: { isSelected?: boolean }) => isSelected ? "lightblue" : "white"};
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`

// --- --- --- CrewSelector --- --- ---
export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;

  height: 120px;
  gap: 10px;

  margin-left: 40px;
  margin-right: 40px;
  margin-top: 93px;
`

export const CrewRow = styled.div`
  flex: 1;

  width: 100%;

  display: flex;
  place-items: center;
  justify-content: space-between;
`

export const AlterNumBtn = styled.button`
  border: 1px solid rgba(151, 166, 194, 1);
  border-radius: 20px;

  width: 40px;
  height: 40px;
  
  background-color: rgba(223, 236, 255, 1);
  color: rgba(65, 128, 245, 1);

  // 비활성 상태   
  &:disabled {
    border: 1px solid rgba(230, 230, 245, 1);
    background-color: white;
  }
`

export const FilterBox = styled.div`
  width: 363px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid rgba(234, 234, 234, 1);
  background-color: #fff;
`;

export const SelectorRow = styled.div`
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 309px;
  padding-left: 8px;
  padding-right: 8px;

  border-bottom: 1px solid #ddd;
`;

export const Label = styled.label`
  flex: 1;
  height: 20px;
  align-items: center;

  display: flex;
`;

export const IconImg = styled.span`
  width: 14px;
  height: 15px;

  padding-right: 25px;
`;

export const BottomSheetBtn = styled.button`
  background-color: white;
  white-space:pre;

  width: 100%;
`;

export const DateStyle = styled.div<{ sameYear: boolean }>`
  font-size: ${props => (props.sameYear ? '12px' : '10px')};
`;