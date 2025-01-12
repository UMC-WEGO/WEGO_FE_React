import styled from "styled-components";

import car_icon from "../../images/feat2/car_icon.png";
import clock_icon from "../../images/feat2/alarm_icon.png";
import calender_icon from "../../images/feat2/calendar_icon.png";
import people_icon from "../../images/feat2/group_people_icon.png";
import pin_icon from "../../images/feat2/map_pin_icon.png";
import Dropdown from "./Dropdown";

// 여행 조건 선택하는 부분
const FilterBox = styled.div`
  width: 363px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid rebeccapurple;
  background-color: #fff;
`

const BottomSheetItem = styled.label`

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

    display: flex;
`

const IconImg = styled.img`
    width: 14px;
    height: 15px;

    margin-right: 17px;
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
  return(
    <>
      <FilterBox>
        <SelectorRow>
          <Label>
            <IconImg src={calender_icon}/>
            <div>날짜 선택</div>
          </Label>
          <Label>
            <IconImg src={people_icon}/>
            <div>인원 수</div>
          </Label>
        </SelectorRow>
        <SelectorRow>
          <Dropdown value="교통수단" option={Item_transport} iconStream={car_icon}/>
        </SelectorRow>
        <SelectorRow>
          <Dropdown value="시간대" option={Item_time} iconStream={clock_icon}/>
        </SelectorRow>
        <SelectorRow>
          <IconImg src={pin_icon}/>
          <BottomSheetItem>출발지 선택</BottomSheetItem>
        </SelectorRow>
      </FilterBox>
    </>
  )
}

export default DestinationFilter;
