import styled from "styled-components";

import calender_icon from "../../images/feat2/calendar_icon.png";
import people_icon from "../../images/feat2/group_people_icon.png";
import car_icon from "../../images/feat2/car_icon.png";
import clock_icon from "../../images/feat2/alarm_icon.png";
import pin_icon from "../../images/feat2/map_pin_icon.png";
// 여행 조건 선택하는 부분

const FilterBox = styled.div`
  width: 363px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid green;
  background-color: #fff;
`

const BottomSheetItem = styled.label`

`

const ToggleItem = styled.select`
  border: none;

  width: 100%;
  height: 100%;
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
              <IconImg src={car_icon}/>
              <ToggleItem>
                <option value="1">1시간 이내</option>
                <option value="2">2시간 이내</option>
                <option value="3">3시간 이내</option>
              </ToggleItem>
            </SelectorRow>
            <SelectorRow>
              <IconImg src={clock_icon}/>
              <ToggleItem>
                <option value="1">1시간 이내</option>
                <option value="2">2시간 이내</option>
                <option value="3">3시간 이내</option>
              </ToggleItem>
            </SelectorRow>
            <SelectorRow>
              <IconImg src={pin_icon}/>
              <BottomSheetItem>지역</BottomSheetItem>
            </SelectorRow>
          </FilterBox>
        </>
    )
}

export default DestinationFilter;