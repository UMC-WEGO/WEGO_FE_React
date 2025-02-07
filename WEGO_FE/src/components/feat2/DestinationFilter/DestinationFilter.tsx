import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

import car_icon from "../../../images/feat2/car_icon.png";
import clock_icon from "../../../images/feat2/alarm_icon.png";
import calender_icon from "../../../images/feat2/calendar_icon.png";
import people_icon from "../../../images/feat2/group_people_icon.png";
import pin_icon from "../../../images/feat2/map_pin_icon.png";
import Dropdown from "../Dropdown";
import Bottomsheet from "../BottomSheet";
import CrewSelector from "./CrewSelector";
import Calendar from "./Calendar";
import SelectDeparture from "./SelectDeparture";

// 임시 데이터 가져오기
import { location, Item_time, Item_transport } from "../../../mocks/feat2/TestData_Filter";

// 여행 조건 선택하는 부분
const FilterBox = styled.div`
  width: 363px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid rgba(234, 234, 234, 1);
  background-color: #fff;
`

const SelectorRow = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  width: 309px;
  padding-left: 8px;
  padding-right: 8px;

  border-bottom: 1px solid #ddd;
`

const Label = styled.label`
    flex: 1;
    height: 21px;
    align-items: center;

    display: flex;
`

const IconImg = styled.img`
    width: 14px;
    height: 15px;

    margin-right: 17px;
`

const BottomSheetBtn = styled.button`
  background-color: white;
`

const DateStyle = styled.div<{sameYear: boolean}>`
  font-size: ${(props) => (props.sameYear ? '12px' : '10px')};
`

interface DestinationFilterProps {
  userId: string;

  numAdult: number;
  numChild: number;
  transport: string;
  timeAway: string;
  departureLocation: string;

  setNumAdult: any;
  setNumChild: any;
  setTransport: any;
  setTimeAway: any;
  setDepartureLocation: any;

  departureDate: Date;
  arrivalDate: Date;
  setDepartureDate: any;
  setArrivalDate: any;
}

const DestinationFilter = ({
  userId,

  // 인원수
  numAdult,
  numChild,
  setNumAdult,
  setNumChild,
  
  // 이동수단
  transport,
  setTransport,

  // 이동시간
  timeAway,
  setTimeAway,

  // 여행지역
  departureLocation,
  setDepartureLocation,

  // 여행날짜
  departureDate, 
  setDepartureDate, 
  arrivalDate,
  setArrivalDate,
}: DestinationFilterProps) => {
  // --- --- --- 최근 여행지 조회 --- --- ---
  // const [recentLocation, setRecentLocation] = useState([]);
  // const getRecentLocation = async() => {
  //   try {
  //     const response = await axios.post()
  //   }
  // }

  // 바텀시트 활성화 상태 관리
  const [isDateBottomActive, setIsDateBottomActive] = useState(false);
  const [isPeopleBottomActive, setIsPeopleBottomActive] = useState(false);
  const [isDepartureBottomActive, setIsDepartureBottomActive] = useState(false);

  // 바텀시트 활성 상태 변경
  const toggleDateBottom = () => { setIsDateBottomActive(!isDateBottomActive); }
  const togglePeopleBottom = () => { setIsPeopleBottomActive(!isPeopleBottomActive); }
  const toggleDepartureBottom = () => { setIsDepartureBottomActive(!isDepartureBottomActive); }

  return(
    <>
      <FilterBox>
        {/* 첫번째 열 : 날짜 & 인원수 */}
        <SelectorRow>
          {/* 날짜 */}
          <Label>
            <IconImg src={calender_icon}/>
            <div>
              <BottomSheetBtn onClick={ toggleDateBottom }>
                <DateStyle sameYear={departureDate.getFullYear() === arrivalDate.getFullYear()}>
                  {/* 선택한 여행 출발 날짜 출력력 */}
                  {departureDate.getFullYear()}.
                  {String(departureDate.getMonth() + 1).padStart(2, "0")}.
                  {String(departureDate.getDate()).padStart(2, "0")}
                  {" ~ "}         
                  {departureDate.getFullYear() !== arrivalDate.getFullYear() && `${arrivalDate.getFullYear()}`}.    {/* 출발 도착 연도가 같으면 도착 연도 생략 */}
                  {String(arrivalDate.getMonth() + 1).padStart(2, "0")}.
                  {String(arrivalDate.getDate()).padStart(2, "0")}
                </DateStyle>
              </BottomSheetBtn>

              <Bottomsheet isOpen={isDateBottomActive} onClose={ toggleDateBottom } height="67vh">
                {/* 바텀시트에 달력 출력 */}
                <Calendar
                  departureDate={departureDate}
                  arrivalDate={arrivalDate}
                  setDepartureDate={setDepartureDate}
                  setArrivalDate={setArrivalDate}
                />
              </Bottomsheet>
            </div>
          </Label>
          {/* 인원수 */}
          <Label>
            <IconImg src={people_icon}/>
            <div>
              <BottomSheetBtn onClick={ togglePeopleBottom }>
                {numAdult === 0 && numChild === 0 ? "인원수" : `성인 ${numAdult}명 아동 ${numChild}명`}            
              </BottomSheetBtn>
              <Bottomsheet isOpen={ isPeopleBottomActive } onClose={ togglePeopleBottom } height="41vh">
                <CrewSelector
                  numAdult={numAdult}
                  setNumAdult={setNumAdult}
                  numChild={numChild}
                  setNumChild={setNumChild}
                />
              </Bottomsheet>
            </div>
          </Label>
        </SelectorRow>

        {/* 두번째 열 : 교통수단 */}
        <SelectorRow>
          <Label>
            <Dropdown value={transport} setValue={setTransport} option={Item_transport} iconStream={car_icon}/>
          </Label>
        </SelectorRow>

        {/* 세번째 열 : 시간대 */}
        <SelectorRow>
          <Label>
            <Dropdown value={timeAway} setValue={setTimeAway} option={Item_time} iconStream={clock_icon}/>
          </Label>
        </SelectorRow>

        {/* 네번째 열 : 출발지 */}
        <SelectorRow>
          <Label>
            <IconImg src={pin_icon}/>
            <div>
              <BottomSheetBtn onClick={ toggleDepartureBottom }>{departureLocation}</BottomSheetBtn>
              <Bottomsheet isOpen={isDepartureBottomActive} onClose={ toggleDepartureBottom } height="100vh - 42px">
                <SelectDeparture departureLocation={departureLocation} setDepartureLocation={setDepartureLocation} location={location} userId={userId}/>
              </Bottomsheet>
            </div>
          </Label>
        </SelectorRow>
      </FilterBox>
    </>
  )
}

export default DestinationFilter;
