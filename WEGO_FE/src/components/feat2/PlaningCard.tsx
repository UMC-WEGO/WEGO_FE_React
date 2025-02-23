import styled from "styled-components";

import car_img from "../../images/feat2/car_icon.png";
import BlueTag from "./BlueTag";

const PlaningCardBox = styled.div`
  width: 363px;
  height: 146px;
  border: 1px solid gray;
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

interface userCriterias {
  departureDate: string;
  arrivalDate: string;
  departureLocation: string;
  transport: string;
}

const PlaningCard = ({ departureDate, arrivalDate, departureLocation, transport }: userCriterias ) => {
  const DpDate = new Date(departureDate);
  const ArDate = new Date(arrivalDate);

  const Dp_year = DpDate.getFullYear();
  const Dp_month = String(DpDate.getMonth() + 1).padStart(2, '0');
  const Dp_day = String(DpDate.getDate()).padStart(2, '0');

  const Ar_year = ArDate.getFullYear();
  const Ar_month = String(ArDate.getMonth() + 1).padStart(2, '0');
  const Ar_day = String(ArDate.getDate()).padStart(2, '0');

  return(
    <>
      <PlaningCardBox>
        <PlaningCardRow1>여행지를 선정하세요</PlaningCardRow1>
        <PlaningCardRow2>
        {/* {departureDate} ~ {arrivalDate} */}
          {Dp_year}.{Dp_month}.{Dp_day} 
          ~ 
          {Ar_year}.{Ar_month}.{Ar_day}
        </PlaningCardRow2>
        <PlaningCardRow3>
          <div>출발지</div>
          <BlueTag TagContent={departureLocation}/>
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