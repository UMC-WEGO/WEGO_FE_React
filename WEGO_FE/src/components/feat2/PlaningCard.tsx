import styled from "styled-components";

import car_img from "../../images/feat2/car_icon.png";
import BlueTag from "./BlueTag";
// 홈 화면에서 여행 조건을 선택하는 부분입니다
// 날짜, 인원, 이동수단, 이동시간, 여행지역 선택

const PlaningCardBox = styled.div`
  width: 363px;
  height: 146px;
  border: 1px solid violet;
  border-radius: 15px;
  padding: 15px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`
const PlaningCardRow1 = styled.div`
  font-size: 25px;
  font-weight: 700;

  height: 25px;
`
const PlaningCardRow2 = styled.div`
  font-size: 14px;
  font-weight: 500;

  margin-top: 5px;
  height: 14px;
`
const PlaningCardRow3 = styled.div`
  font-size: 14px;
  font-weight: 500;

  height: 30px;  

  display: flex;
  align-items: center;
  gap: 20px;
`
const PlaningCardRow4 = styled.div`
  font-size: 14px;
  font-weight: 500;

  height: 13px;

  display: flex;
  gap: 20px;
`

const PlaningCard = () => {
    return(
        <>
            <PlaningCardBox>
              <PlaningCardRow1>여행지를 선정하세요</PlaningCardRow1>
              <PlaningCardRow2>2024.11.26 ~ 2024.11.27</PlaningCardRow2>
              <PlaningCardRow3>
                <div>출발지</div>
                <BlueTag/>
              </PlaningCardRow3>
              <PlaningCardRow4>
                <div>이동수단</div>
                <img src={car_img}/>
              </PlaningCardRow4>
            </PlaningCardBox>
        </>
    )
}

export default PlaningCard;