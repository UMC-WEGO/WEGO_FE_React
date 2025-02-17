import styled from "styled-components";
import trash_bin_img from "../../images/feat2/trash_binpng.png";
import BlueTag from "./BlueTag";
// 계획된 여행을 보여주는 카드
// "다가오는 여행"

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
  startDate: string;
  endDate: string;
}

interface PlanedCardProps {
  props: PlanedCardType;
  onClickDelete: (tripId: number) => void;
}

const PlanedCard = ({ props, onClickDelete }: PlanedCardProps) => {
  const departureDate = new Date(props.startDate)
  const arrivalDate = new Date(props.endDate)
  const nowDate = new Date()

  const D_Days = "3";

  console.log("props : ", props)
    return(
      <>
        <PlanedCardBox>
          <PlanedCardHug>
            <PlanedCard_row1>
              <div>{props.location} 여행, D-{D_Days}</div>
              <DeleteBtn onClick={() => onClickDelete(props.tripId)}><img src={trash_bin_img}/></DeleteBtn>
            </PlanedCard_row1>
            <PlanedCard_row2>
              <BlueTag TagContent={`
                ${departureDate.getFullYear().toString()}.
                ${departureDate.getMonth().toString()}.
                ${departureDate.getDate().toString()}
                ~
                ${arrivalDate.getFullYear().toString()}.
                ${arrivalDate.getMonth().toString()}.
                ${arrivalDate.getDate().toString()}`
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