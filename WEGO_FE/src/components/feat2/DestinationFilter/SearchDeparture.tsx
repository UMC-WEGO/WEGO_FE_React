import { useState } from "react"
import * as S from './FilterStyle'
import MapPin_Icon from '../../../images/feat2/map_pin_icon.png';

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
    <S.SearchCard>
      {/* 뒤로가기 및 검색바 */}
      <S.SearchHeader>
        <div>{"<-"}</div>
        <div>
          <input 
            type="text" 
            placeholder="출발지를 선택하세요"
            value={inputTerm}
            onChange={(e) => setInputTerm(e.target.value)}
          />
        </div>
      </S.SearchHeader>

      <S.NotionRow>
        현재 위치가 아닌, 도시의 중심부를 기준으로 잡아요
      </S.NotionRow>

      {/* 검색한 여행지 나열 */}
      <div>
        {filterdLocation.length === 0 ? (<div> 결과 없음 </div>) : (
          filterdLocation.map((category) => (
            <div key={category.name}>
              {category.elements.map((element) => (
                <S.Element 
                  key={element}
                  onClick={() => setDepartureLocation(element)}
                  isSelected = {departureLocation === element}
                >
                  <S.MapPinImg src={MapPin_Icon}/>
                  <div>{element} ({category.name})</div>
                </S.Element>
              ))}
            </div>
          ))
        )}  
      </div>      
    </S.SearchCard>
  )
}

export default SearchDeparture;