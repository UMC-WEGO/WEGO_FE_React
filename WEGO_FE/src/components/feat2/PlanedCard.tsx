import { useState } from "react";
import styled from "styled-components";
import trash_bin_img from "../../images/feat2/trash_binpng.png";
import BlueTag from "./BlueTag";
import Bottomsheet from "./BottomSheet";
import DltAlertCard from "./Alerts/DltAlertCard";

const PlanedCardBox = styled.div`
  border: 1px solid rgba(234, 234, 234, 1);
  border-radius: 15px;
  margin-bottom: 9px;

  height: 108px;

  display: flex;
`

const PlanedCardHug = styled.div`
  width: 327px;
  height: 65px;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 10px;
`

const PlanedCard_row1 = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 25px;
  font-weight: 600;
`
const PlanedCard_row2 = styled.div`
  display: flex;
  gap: 10px;

  height: 25px;
`

const DeleteBtn = styled.button`
  background-color: white;
`

type PlanedCardType = {
  // "tripId": 1,
  // "location": "부산",
  // "adult_participants": 5,
  // "child_participants": 2,
  // "vehicle": "자가용",
  // "duration": "2-3",
  // "startDate": "2025-01-30",
  // "endDate": "2025-01-31"

  tripId : number;
  location: string;
  adult_participants: number;
  child_participants: number;
  vehicle: string;
  duration: string;
  departureDate: string;
  arrivalDate: string;
}

interface PlanedCardProps {
  props: PlanedCardType;
  onClickDelete: (tripId: number) => void;
}

const PlanedCard = ({ props, onClickDelete }: PlanedCardProps) => {
  const startDate = new Date(props.startDate)
  const endDate = new Date(props.endDate)
  const nowDate = new Date()

  const dayDiff = (startDate.getTime() - nowDate.getTime()) / (1000 * 60 * 60 * 24)   // 날짜 사이 시간차
  const D_Days = Math.ceil(dayDiff)       // 실수 -> 정수 변환

  // 삭제 버튼 눌렀을 때 알람창
  const [isShowMessage, setIsShowMessage] = useState(false);
  const downMessage = () => {
    setIsShowMessage(false)
  }

  console.log("props : ", props)
    return(
      <>
        {isShowMessage && (
          <DltAlertCard message="여행 일정을 삭제하시겠습니까?" downMessage={downMessage} deletePlan={() => onClickDelete(props.tripId)}/>
        )}
        <PlanedCardBox>
          <PlanedCardHug>
            <PlanedCard_row1>
              <div>{props.location} 여행, D-{`${D_Days === 0 ? "Day" : D_Days}`}</div>
              {/* <DeleteBtn onClick={() => {setIsShowMessage(true); onClickDelete(props.tripId)}}><img src={trash_bin_img}/></DeleteBtn> */}
              <DeleteBtn onClick={() => {setIsShowMessage(true); }}><img src={trash_bin_img}/></DeleteBtn>
              </PlanedCard_row1>
            <PlanedCard_row2>
              <BlueTag TagContent={`
                ${startDate.getFullYear().toString()}.
                ${startDate.getMonth().toString()}.
                ${startDate.getDate().toString()}
                ~
                ${endDate.getFullYear().toString()}.
                ${endDate.getMonth().toString()}.
                ${endDate.getDate().toString()}`
                }/>
              <BlueTag TagContent={`${props.adult_participants + props.child_participants}명`}/>
              <BlueTag TagContent={props.vehicle}/>
            </PlanedCard_row2>
          </PlanedCardHug>
        </PlanedCardBox>
      </>
    )
}

export default PlanedCard;