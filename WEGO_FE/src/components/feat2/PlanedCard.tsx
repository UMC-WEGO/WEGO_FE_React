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
  tripId : number;
  location: string;
  participants: number;
  vehicle: string;
  duration: string;
  departureDate: string;
  arrivalDate: string;
}

interface PlanedCardProps {
  props: PlanedCardType;
  onClickDelete: () => void;
}

const PlanedCard = ({ props, onClickDelete }: PlanedCardProps) => {
  const D_Days = "3";

    return(
      <>
        <PlanedCardBox>
          <PlanedCardHug>
            <PlanedCard_row1>
              <div>{props.location} 여행, D-{D_Days}</div>
              <DeleteBtn onClick={onClickDelete}><img src={trash_bin_img}/></DeleteBtn>
            </PlanedCard_row1>
            <PlanedCard_row2>
              <BlueTag TagContent={props.duration}/>
              <BlueTag TagContent={`${props.participants}명`}/>
              <BlueTag TagContent={props.vehicle}/>
            </PlanedCard_row2>
          </PlanedCardHug>
        </PlanedCardBox>
      </>
    )
}

export default PlanedCard;