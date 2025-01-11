import styled from "styled-components";

import calender_icon from "../../images/feat2/calendar_icon.png";
import people_icon from "../../images/feat2/group_people_icon.png";
import car_icon from "../../images/feat2/car_icon.png";
import clock_icon from "../../images/feat2/alarm_icon.png";
import pin_icon from "../../images/feat2/map_pin_icon.png";
import Dropdown from "./Dropdown";
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

const DropdownSelect = styled.select`
  border: none;

  width: 100%;
  height: 100%;
`

const DropdownItem = styled.div`
  width: 345px;
  height: 50px;
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

// --- --- --- dropdown
// const DropdownContainer = styled.div`
//   width: 100%;
//   height: 100%;
// `

// const DropdownHeader = styled.div`
//   width: 100%;
//   height: 100%;

//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `

// const DropdownList = styled.ul`
//   background-color: white;
//   border: 1px solid black;

//   width: 293px;

//   position: absolute;
// `

// const DropdownListItem = styled.li`
//   height: 50px;

//   display: flex;
//   align-items: center;
// `

// const Dropdown = () => {
//   const [isOpenFlag, setIsOpenFlag] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("교통수단")

//   const toggleDropdown = () => setIsOpenFlag(!isOpenFlag);
//   const selectOption = (option:string) => {
//     setSelectedOption(option);
//     setIsOpenFlag(false);
//   };

//   const option = [
//     {label: "자가용", icon: car_icon},
//     {label: "버스", icon: car_icon},
//     {label: "기차(KTX)", icon: car_icon}
//   ];

//   return(
//     <DropdownContainer>
//       <DropdownHeader onClick={toggleDropdown} tabIndex={0}>
//         <div>
//           <IconImg src={car_icon}/>
//           {selectedOption}
//         </div>
//         <span>{isOpenFlag ? "▲" : "▼"}</span>
//       </DropdownHeader>
//       {isOpenFlag && (
//         <DropdownList>
//           {option.map((option, index) => (
//             <DropdownListItem key={index} onClick={() => selectOption(option.label)} tabIndex={0}>
//               <IconImg src={car_icon}/>
//               {option.label}
//             </DropdownListItem>
//           ))}
//         </DropdownList>
//       )}
//     </DropdownContainer>
//   );
// };

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
          <Dropdown/>
        </SelectorRow>
        <SelectorRow>
          <Dropdown/>
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
