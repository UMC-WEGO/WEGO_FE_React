import styled from "styled-components"
import { useState } from "react";

const IconImg = styled.img`
    width: 14px;
    height: 15px;

    margin-right: 17px;
`

const DropdownContainer = styled.div`
  width: 100%;
  height: 100%;
`

const DropdownHeader = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${(props) => (props.isOpen ? 'rgba(0, 89, 255, 1)' : 'none')};
`

const DropdownList = styled.ul`
  background-color: white;
  border: 1px solid rgba(0, 89, 255, 1);

  width: 293px;

  position: absolute;
`

const DropdownListItem = styled.li`
  height: 50px;

  display: flex;
  align-items: center;
`

type Option = {
  label: string;
  icon: string;
};

interface DropdownProps {
  value?: string; 
  iconStream?: string; 
  option: Option[];
}

const Dropdown = ({ 
    value,             // dropdown 기본값
    iconStream,        // icon 이미지 경로
    option             // dropdown 선택 요소 리스트
}: DropdownProps) => {
    const [isOpenFlag, setIsOpenFlag] = useState(false);          // dropdown 클릭여부 확인
    const [selectedOption, setSelectedOption] = useState(value);  // 선택한 값
  
    const toggleDropdown = () => setIsOpenFlag(!isOpenFlag);      // dropdown 활성/불활성 전환
  
    const selectOption = (label: string) => {
      setSelectedOption(label);
      setIsOpenFlag(false);
    };
  
    return (
      <DropdownContainer>
        <DropdownHeader isOpen={isOpenFlag} onClick={toggleDropdown}>
          <div>
            <IconImg src={iconStream} />
            {selectedOption || value}    {/* value: 기본값, selectedOption: 선택한 값 */}           
          </div>
          <span>{isOpenFlag ? "▲" : "▼"}</span>
        </DropdownHeader>
        {isOpenFlag && (
          <DropdownList>
            {option.map((item, index) => (
              <DropdownListItem
                key={index}
                onClick={() => selectOption(item.label)}
              >
                <IconImg src={item.icon} />
                {item.label}
              </DropdownListItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    );
};

export default Dropdown;