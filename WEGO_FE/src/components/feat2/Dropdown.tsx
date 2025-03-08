import styled from 'styled-components';
import { useState } from 'react';
import { Icon } from '../feat4/AlertItem/AlertItem.style';

const IconImg = styled.div`
  width: 14px;
  height: 15px;

  margin-right: 17px;
`

const DropdownContainer = styled.div`
  width: 100%;
  height: 50px;
`;

const DropdownHeader = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DropdownList = styled.ul`
  background-color: white;
  border: 1px solid rgba(234, 234, 234, 1);

  width: 293px;

  position: absolute;
`;

const DropdownListItem = styled.li`
  height: 50px;

  display: flex;
  align-items: center;
  padding-left: 10px;

  &:hover {
    border: 1px solid rgba(0, 89, 255, 1);
  }
`;

const SelectedDisplay = styled.div`
  text-align: left;

  width: 100%;
`;

interface DropdownProps {
  value?: string;
  setValue?: any;
  option: { label: string; icon: string }[];
  setTransport?: any;
  iconStream?: JSX.Element;
}

const Dropdown = ({
  value,    // dropdown 기본값
  setValue, // 부모 상태 수정하도록
  option,   // dropdown 선택 요소 리스트
  iconStream// icon 이미지 경로
}: DropdownProps) => {
  const [isOpenFlag, setIsOpenFlag] = useState(false); // dropdown 클릭여부 확인

  const toggleDropdown = () => setIsOpenFlag(!isOpenFlag); // dropdown 활성/불활성 전환

  const selectOption = (label: string) => {
    setValue(label);
    setIsOpenFlag(false);
  };

  return (
    <DropdownContainer>
      {/* 드롭다운 헤터 (보이는 부분) */}
      <DropdownHeader isOpen={isOpenFlag} onClick={toggleDropdown}>
        {/* <SelectedDisplay>{value}</SelectedDisplay>{' '} */}
        {/* value: 기본값, selectedOption: 선택한 값 */}
        {/* <IconImg src={iconStream}/> */}
        <IconImg>
          {iconStream}
        </IconImg>
        <SelectedDisplay>{value}</SelectedDisplay>
        <div>{isOpenFlag ? '▲' : '▼'}</div>
      </DropdownHeader>

      {/* 드롭다운 요소 리스트 */}
      {isOpenFlag && (
        <DropdownList>
          {option.map((item, index) => (
            <DropdownListItem
              key={index}
              onClick={() => selectOption(item.label)}
            >
              {/* <IconImg src={iconStream}/> */}
              <IconImg>
                {iconStream}
              </IconImg>
              {item.label}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
