import styled from "styled-components"
import { useState, useEffect } from "react"
import { CategoryButton } from "../../feat4/FreeBoard.style"

import MapPin_Icon from '../../../images/feat2/map_pin_icon.png';

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

// const Element = styled.button`
//   width: 100%;
//   height: 37px;
//   margin: 20px;

//   display: flex;
//   align-items: center;
// `

const Element = styled.button<{ isSelected: boolean }>`
  width: 100%;
  height: 37px;
  margin: 20px;

  display: flex;
  align-items: center;

  // 선택된 경우 색상 변경
  background-color: ${({ isSelected }) => (isSelected ? "rgba(0, 89, 255, 0.1)" : "rgba(246, 246, 246, 1)")};
  color: ${({ isSelected }) => (isSelected ? "rgba(0, 89, 255, 1)" : "black")};
`

const SearchedCard = styled.div`

`

interface DestinationProps {
  location: { name: string; elements: string[] }[];
  setDepartureLocation: any;
  departureLocation: string;
}

const SearchDeparture = ({ location, setDepartureLocation, departureLocation }: DestinationProps) => {
  const [inputTerm, setInputTerm] = useState("");
  const filterdLocation = location.map((category) => ({
    ...category,
    elements: category.elements.filter((element) => 
      element.toLowerCase().includes(inputTerm.toLowerCase())
    )
  })).filter((category) => category.elements.length > 0);

  return (
    <SearchCard>
      {/* 뒤로가기 및 검색바 */}
      <SearchHeader>
        <div>{"<-"}</div>
        <div>
          <input 
            type="text" 
            placeholder="출발지를 선택하세요"
            value={inputTerm}
            onChange={(e) => setInputTerm(e.target.value)}
          />
        </div>
      </SearchHeader>

      <NotionRow>
        현재 위치가 아닌, 도시의 중심부를 기준으로 잡아요
      </NotionRow>

      {/* 검색결과 */}
      <div>
        {filterdLocation.length === 0 ? (<div> 결과 없음 </div>) : (
          filterdLocation.map((category) => (
            <div key={category.name}>
              {category.elements.map((element) => (
                <Element 
                  key={element}
                  onClick={() => setDepartureLocation(element)}
                  isSelected = {departureLocation === element}
                >
                  <img src={MapPin_Icon} style={{padding: "7.4px 8.63px 7.4px 8.63px", backgroundColor: "rgba(246, 246, 246, 1)", borderRadius: "18.5px"}}/>
                  <div>{element} ({category.name})</div>
                </Element>
              ))}
            </div>
          ))
        )}  
      </div>      
    </SearchCard>
  )
}

export default SearchDeparture;