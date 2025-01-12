import styled from "styled-components";
import trash_bin_img from "../../images/feat2/trash_binpng.png";
// 계획된 여행을 보여주는 카드
// "다가오는 여행"

const PlanedCardBox = styled.div`
  border: 1px solid violet;
  border-radius: 15px;
  margin-bottom: 9px;

  height: 108px;

  display: flex;
`

const PlanedCardHug = styled.div`
  border: 1px solid blueviolet;

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
const PlanedCard_element = styled.div`
  color: #0059FF;
  font-size: 12px;
  font-weight: 700;

  height: 100%;
  border-radius: 8px;

  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 9px;
  padding-right: 9px;

  background-color: rgba(0, 89, 255, 0.1);
`

const DeleteBtn = styled.button`
  background-color: white;
`

type PlanedCardType = {
  destination: string;  // 여행 목적지
  D_Days: number;       // 남은 날짜
  period: string;       // 여행 기간
  party_num: number;    // 여행 인원수
  transport: string;    // 이동 수단
}

interface PlanedCardProps {
  props: PlanedCardType;
  onClickDelete: () => void;
}

const PlanedCard = ({ props, onClickDelete }: PlanedCardProps) => {
    return(
      <>
        <PlanedCardBox>
          <PlanedCardHug>
            <PlanedCard_row1>
              <div>{props.destination} 여행, D-{props.D_Days}</div>
              <DeleteBtn onClick={onClickDelete}><img src={trash_bin_img}/></DeleteBtn>
            </PlanedCard_row1>
            <PlanedCard_row2>
              <PlanedCard_element>{props.period}</PlanedCard_element>
              <PlanedCard_element>{props.party_num}명</PlanedCard_element>
              <PlanedCard_element>{props.transport}</PlanedCard_element>
            </PlanedCard_row2>
          </PlanedCardHug>
        </PlanedCardBox>
      </>
    )
}

export default PlanedCard;