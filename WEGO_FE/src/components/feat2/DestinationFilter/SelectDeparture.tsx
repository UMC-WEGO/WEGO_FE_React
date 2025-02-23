import { useEffect, useState } from "react";
import * as S from './FilterStyle'

import Bottomsheet from "../BottomSheet";
import SearchDeparture from "./SearchDeparture";

import { PiArrowLeftBold } from "react-icons/pi";
import { CgSearch } from "react-icons/cg";
import { authInstance } from "../../../apis/axiosInstance";

interface SelectedDepartureProps {
  departureLocation: string;
  setDepartureLocation: any;
  location: { name: string; elements: string[] }[];
}

const SelectDeparture = ({ departureLocation, setDepartureLocation, location}: SelectedDepartureProps) => {
  // --- --- --- 최근 여행지역 조회 --- --- ---
  const [recentLocation, setRecentLocation] = useState([]);

  useEffect(() => {
    const getRecentLocation = async() => {
      const responseRecentLocation = await authInstance.get(`http://13.124.213.122:3000/community/posts/local-search`)

      setRecentLocation(responseRecentLocation.data)
    }
    getRecentLocation();
  }, [])

  const [isSearchBottomActive, setIsSearchActive] = useState(false);
  const toggleSearchBottom = () => { setIsSearchActive(!isSearchBottomActive); }

  return (
    <S.SearchCard>
      {/* 뒤로가기 및 검색바 */}
      <S.SearchHeader style={{width: '16px;'}}>
        <div>
          <PiArrowLeftBold/>
        </div>
        <div>
          <S.BottomSheetBtn onClick={toggleSearchBottom}>
            <span style={{color: 'rgba(165, 165, 165, 1)'}}>출발지를 선택하세요</span>
            {/* <span><img src={search_icn}/></span> */}
            <CgSearch/>
          </S.BottomSheetBtn>
          <Bottomsheet isOpen={ isSearchBottomActive } onClose={ toggleSearchBottom } height="100%">
            <SearchDeparture location={location} setDepartureLocation={setDepartureLocation} departureLocation={departureLocation}/>
          </Bottomsheet>
        </div>
      </S.SearchHeader>

      {/* 안내 */}
      <S.NotionRow>
        현재 위치가 아닌, 도시의 중심부를 기준으로 잡아요
      </S.NotionRow>

      {/* 지역 선택 */}
      {/* 최근지역 */}
      {/* <SearchRow>
        <LocationTitle>최근지역</LocationTitle>
        <LabelBox>
        {recentLocation.length > 0 ? (
          recentLocation.map((recent) => (
            <Element
              key={recent}
              onClick={() => setDepartureLocation(recent)}
              isSelected = { departureLocation === recent }
            >
              {recent}
            </Element>
          ))
        ):(
          <div> 최근 여행지가 없습니다. </div>
        )}
        </LabelBox>        
      </SearchRow> */}
    
      {/* 지역 전체 */}
      {location.map((location) => (
        <S.SearchRow key={location.name}>
          <S.LocationTitle>{location.name}</S.LocationTitle>
          <S.LabelBox>
            {location.elements.map((element) => (
              <S.LocationElement 
                key={element}
                onClick={() => setDepartureLocation(element)}
                isSelected = { departureLocation === element }
              >
                {element}
              </S.LocationElement>
            ))}
          </S.LabelBox>
        </S.SearchRow>
      ))}
    </S.SearchCard>
  )
}

export default SelectDeparture;