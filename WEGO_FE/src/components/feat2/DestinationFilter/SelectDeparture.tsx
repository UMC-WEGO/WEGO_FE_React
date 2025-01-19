import styled, { isStyledComponent } from "styled-components";
import { useState } from "react";
import Bottomsheet from "../BottomSheet";
import SearchDeparture from "./SearchDeparture";

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

const location = [
  { name: "최근출발", elements: []},
  { name: "수도권", elements: ["서울 강북", "서울 강남", "의정부시", "고양시", "용인시", "하남시", "성남시", "남양주시"] },
  { name: "강원도", elements: ["강릉시", "속초시", "춘천시", "정선군", "양양군", "평창군"] },
  { name: "전라도", elements: ["전주시", "군산시", "남원시", "부안군", "여수시", "순천시", "담양군", "목포시"] },
  { name: "경상도", elements: ["경주시", "포항시", "안동시", "문경시", "창원시", "통영시", "거제시", "김해시"] },
  { name: "충청도", elements: ["단양군", "청주시", "충주시", "제천시", "천안시", "보령시", "공주시", "아산시"] },
  { name: "제주도", elements: ["제주시"] },
]

const BottomSheetBtn = styled.button`
  border: 1px solid violet;

  background-color: white;
  width: 370px;
`

interface SelectedDepartureProps {
  departureLocation: string;
  setDepartureLocation: any;
}

const SelectDeparture = ({ departureLocation, setDepartureLocation, }: SelectedDepartureProps) => {
  const [isSearchBottomActive, setIsSearchActive] = useState(false);
  const toggleSearchBottom = () => { setIsSearchActive(!isSearchBottomActive); }

  return (
    <SearchCard>
      {/* 뒤로가기 및 검색바 */}
      <SearchHeader>
        <div>{"<-"}</div>
        <div>
          <BottomSheetBtn onClick={toggleSearchBottom}>
            <span>출발지를 선택하세요</span><span>Q</span>
          </BottomSheetBtn>
          <Bottomsheet isOpen={ isSearchBottomActive } onClose={ toggleSearchBottom } height="100%">
            <SearchDeparture departureLocation={departureLocation} setDepartureLocation={setDepartureLocation} location={location}/>
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