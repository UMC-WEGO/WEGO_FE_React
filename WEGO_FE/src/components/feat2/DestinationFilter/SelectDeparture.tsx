import styled, { isStyledComponent } from "styled-components";
import { useState } from "react";
import Bottomsheet from "../BottomSheet";
import SearchDeparture from "./SearchDeparture";
import search_icn from "../../../images/feat2/alarm_icon.png"

const SearchCard = styled.div`
  display: flex;
  flex-direction: column;
`

const SearchHeader = styled.div`
  border-bottom: 1px solid rgba(234, 234, 234, 1);
  padding: 15px;

  display: flex;
  justify-content: space-between;
`

const NotionRow = styled.div`
  color: rgba(0, 89, 255, 1);

  padding: 15px;
`

const SearchRow = styled.div`
  padding: 15px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
`

const LabelBox = styled.div`
  display: flex;
  gap: 10px;

  margin-top: 8px;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;    //스크롤바 지우기
`

const Element = styled.button<{ isSelected: boolean }>`
  border-radius: 13px;  
  padding: 7px 14px 7px 14px;

  font-size: 12px;
  font-weight: 600;

  background-color: ${({ isSelected }) => (isSelected ? "rgba(0, 89, 255, 0.1)" : "rgba(246, 246, 246, 1)")};
  color: ${({ isSelected }) => (isSelected ? "rgba(0, 89, 255, 1)" : "black")};
`

const LocationTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
`

const BottomSheetBtn = styled.button`
  display: flex;
  padding-left: 30%;

  background-color: white;
  width: 370px;
`

interface SelectedDepartureProps {
  departureLocation: string;
  setDepartureLocation: any;
  location: { name: string; elements: string[] }[];
}

const SelectDeparture = ({ departureLocation, setDepartureLocation, location }: SelectedDepartureProps) => {
  const [isSearchBottomActive, setIsSearchActive] = useState(false);
  const toggleSearchBottom = () => { setIsSearchActive(!isSearchBottomActive); }

  return (
    <SearchCard>
      {/* 뒤로가기 및 검색바 */}
      <SearchHeader>
        <div>{"<-"}</div>
        <div>
          <BottomSheetBtn onClick={toggleSearchBottom}>
            <span>출발지를 선택하세요</span>
            <span><img src={search_icn}/></span>
          </BottomSheetBtn>
          <Bottomsheet isOpen={ isSearchBottomActive } onClose={ toggleSearchBottom } height="100%">
            <SearchDeparture location={location}/>
          </Bottomsheet>
        </div>
      </SearchHeader>

      {/* 안내 */}
      <NotionRow>
        현재 위치가 아닌, 도시의 중심부를 기준으로 잡아요
      </NotionRow>

      {/* 지역 선택 */}
      {location.map((location) => (
        <SearchRow key={location.name}>
          <LocationTitle>{location.name}</LocationTitle>
          <LabelBox>
            {location.elements.map((element) => (
              <Element 
                key={element}
                onClick={() => setDepartureLocation(element)}
                isSelected = { departureLocation === element }
              >
                {element}
              </Element>
            ))}
          </LabelBox>
        </SearchRow>
      ))}
      
    </SearchCard>
  )
}

export default SelectDeparture;