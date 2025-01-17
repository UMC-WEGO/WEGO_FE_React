import styled from "styled-components";
import { useState } from "react";

import car_icon from "../../images/feat2/car_icon.png";
import clock_icon from "../../images/feat2/alarm_icon.png";
import calender_icon from "../../images/feat2/calendar_icon.png";
import people_icon from "../../images/feat2/group_people_icon.png";
import pin_icon from "../../images/feat2/map_pin_icon.png";
import Dropdown from "./Dropdown";
import Bottomsheet from "./BottomSheet";
import CrewSelector from "./CrewSelector";

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

const DestinationFilter = () => {
  const [isDateBottomActive, setIsDateBottomActive] = useState(false);
  const [isPeopleBottomActive, setIsPeopleBottomActive] = useState(false);
  const [isDepartureBottomActive, setIsDepartureBottomActive] = useState(false);

  const toggleDateBottom = () => {
    setIsDateBottomActive(!isDateBottomActive);
  }
  const togglePeopleBottom = () => {
    setIsPeopleBottomActive(!isPeopleBottomActive);
  }
  const toggleDepartureBottom = () => {
    setIsDepartureBottomActive(!isDepartureBottomActive);
  }

  // 바텀시트 샘플 데이터 
  const SampleContent1 = () => {
    return <h1>content1</h1>;
  };
  
  const SampleContent2 = () => {
    return <h1>content2</h1>;
  };
  
  const SampleContent3 = () => {
    return <h1>content3</h1>;
  };

  return(
    <>
      <FilterBox>
        {/* 첫번째 열 : 날짜 & 인원수 */}
        <SelectorRow>
          <Label>
            <IconImg src={calender_icon}/>
            <div>
              <BottomSheetBtn onClick={ toggleDateBottom }>날짜 선택</BottomSheetBtn>
              <Bottomsheet isOpen={isDateBottomActive} onClose={ toggleDateBottom } height="67vh">
                <SampleContent1/>
              </Bottomsheet>
            </div>
          </Label>
          <Label>
            <IconImg src={people_icon}/>
            <div>
            <BottomSheetBtn onClick={ togglePeopleBottom }>인원 수</BottomSheetBtn>
              <Bottomsheet isOpen={isPeopleBottomActive} onClose={ togglePeopleBottom } height="41vh">
                <CrewSelector/>
              </Bottomsheet>
            </div>
          </Label>
        </SelectorRow>

        {/* 두번째 열 : 교통수단 */}
        <SelectorRow>
          <Label>
            <Dropdown value="교통수단" option={Item_transport} iconStream={car_icon}/>
          </Label>
        </SelectorRow>

        {/* 세번째 열 : 시간대 */}
        <SelectorRow>
          <Label>
            <Dropdown value="시간대" option={Item_time} iconStream={clock_icon}/>
          </Label>
        </SelectorRow>

        {/* 네번째 열 : 출발지 */}
        <SelectorRow>
          <Label>
            <IconImg src={pin_icon}/>
            <div>
            <BottomSheetBtn onClick={ toggleDepartureBottom }>날짜 선택</BottomSheetBtn>
              <Bottomsheet isOpen={isDepartureBottomActive} onClose={ toggleDepartureBottom } height="100vh">
                <SampleContent3/>
              </Bottomsheet>
            </div>
          </Label>
        </SelectorRow>
      </FilterBox>
    </>
  )
}

export default DestinationFilter;
