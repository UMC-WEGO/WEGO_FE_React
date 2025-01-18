import styled from "styled-components";
import { useState } from "react";

const SearchCard = styled.div`
  display: flex;
  flex-direction: column;
`

const SearchHeader = styled.div`
  border: 1px solid violet;

  padding: 15px;

  display: flex;
  justify-content: space-between;
`

const NotionRow = styled.div`
  color: blue;

  padding: 15px;
`

const SearchRow = styled.div`
  border: 1px solid rebeccapurple;

  padding: 15px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
`

const LabelBox = styled.div`
  display: flex;
  gap: 10px;

  margin-top: 8px;
`

const Element = styled.button`
  border-radius: 18px;

  background-color: gray;
  padding: 12px 20px 12px 20px;
`

const LocationTitle = styled.div`
  font-size: 25px;
  font-weight: 800;
`

const location = [
  { name: "최근출발", elements: ["부산", "마산"]},
  { name: "경기도", elements: ["부산", "마산"] },
  { name: "강원도", elements: ["부산", "마산"] },
  { name: "전라도", elements: ["부산", "마산"] },
  { name: "경상도", elements: ["부산", "마산"] },
  { name: "충청도", elements: ["부산", "마산"] },
  { name: "제주도", elements: ["부산", "마산"] },
]

const BottomSheetBtn = styled.button`
  border: 1px solid violet;

  background-color: white;
  width: 200px;
`

interface SelectedDepartureProps {
  departureLocation: string;
  setDepartureLocation: any;
}

const SelectDeparture = ({ departureLocation, setDepartureLocation }: SelectedDepartureProps) => {
  return (
    <SearchCard>
      {/* 뒤로가기 및 검색바 */}
      <SearchHeader>
        <div>{"<-"}</div>
        <div>
          <BottomSheetBtn><span>출발지를 선택하세요</span><span>Q</span></BottomSheetBtn>
        </div>
      </SearchHeader>

      {/* 안내 */}
      <NotionRow>
        현재 위치가 아닌, 도시의 중심부를 기준으로 잡아요
      </NotionRow>

      {/* 최근 출발 */}
      {location.map((location) => (
        <SearchRow key={location.name}>
          <LocationTitle>{location.name}</LocationTitle>
          <LabelBox>
            {location.elements.map((element) => (
              <Element 
                key={element}
                onClick={() => setDepartureLocation(element)}
              >{element}</Element>
            ))}
          </LabelBox>
        </SearchRow>
      ))}
      
    </SearchCard>
  )
}

export default SelectDeparture;