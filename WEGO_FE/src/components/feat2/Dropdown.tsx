import styled from "styled-components"
import { useState } from "react";

import car_icon from "../../images/feat2/car_icon.png";


const IconImg = styled.img`
    width: 14px;
    height: 15px;

    margin-right: 17px;
`

const DropdownContainer = styled.div`
  width: 100%;
  height: 100%;
`

const DropdownHeader = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const DropdownList = styled.ul`
  background-color: white;
  border: 1px solid black;

  width: 293px;

  position: absolute;
`

const DropdownListItem = styled.li`
  height: 50px;

  display: flex;
  align-items: center;
`

const Dropdown = () => {
  const [isOpenFlag, setIsOpenFlag] = useState(false);
  const [selectedOption, setSelectedOption] = useState("교통수단")

  const toggleDropdown = () => setIsOpenFlag(!isOpenFlag);
  const selectOption = (option:string) => {
    setSelectedOption(option);
    setIsOpenFlag(false);
  };

  const option = [
    {label: "자가용", icon: car_icon},
    {label: "버스", icon: car_icon},
    {label: "기차(KTX)", icon: car_icon}
  ];

  return(
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown} tabIndex={0}>
        <div>
          <IconImg src={car_icon}/>
          {selectedOption}
        </div>
        <span>{isOpenFlag ? "▲" : "▼"}</span>
      </DropdownHeader>
      {isOpenFlag && (
        <DropdownList>
          {option.map((option, index) => (
            <DropdownListItem key={index} onClick={() => selectOption(option.label)} tabIndex={0}>
              <IconImg src={car_icon}/>
              {option.label}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;