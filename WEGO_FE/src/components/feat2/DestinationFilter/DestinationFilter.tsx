import styled from "styled-components";
import { useState } from "react";

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

// 교통수단, 시간대 옵션
type Option = {
  label: string;
  icon: string;
};

const Item_time: Option[] = [
  { label: "1시간 미만", icon: clock_icon },
  { label: "2시간 미만", icon: clock_icon },
  { label: "3시간 미만", icon: clock_icon }
];

const Item_transport: Option[] = [
  { label: "자동차", icon: car_icon },
  { label: "버스", icon: car_icon },
  { label: "기차(KTX)", icon: car_icon }
]

interface DestinationFilterProps {
  departureDay: string;
  numAdult: number;
  numChild: number;
  transport: string;
  timeAway: string;
  departureLocation: string;

  setDeparture: any;
  setNumAdult: any;
  setNumChild: any;
  setTransport: any;
  setTimeAway: any;
  setDepartureLocation: any;
}

const DestinationFilter = ({
  departureDay,
  numAdult,
  numChild,
  transport,
  timeAway,
  departureLocation,

  setDeparture,
  setNumAdult,
  setNumChild,
  setTransport,
  setTimeAway,
  setDepartureLocation, 
}: DestinationFilterProps) => {

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
              <BottomSheetBtn onClick={ toggleDateBottom }>{departureDay}</BottomSheetBtn>
              <Bottomsheet isOpen={isDateBottomActive} onClose={ toggleDateBottom } height="67vh">
                <Calendar/>
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
                <SelectDeparture departureLocation={departureLocation} setDepartureLocation={setDepartureLocation}/>
              </Bottomsheet>
            </div>
          </Label>
        </SelectorRow>
      </FilterBox>
    </>
  )
}

export default DestinationFilter;
