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

const Element = styled.button`
  width: 100%;
  height: 37px;
  margin: 20px;

  display: flex;
  align-items: center;
`

const SearchedCard = styled.div`

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

const SearchDeparture = () => {
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
                <Element key={element}>
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