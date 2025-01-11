import styled from "styled-components";
import trash_bin_img from "../../images/feat2/trash_binpng.png";
// 계획된 여행을 보여주는 카드
// "다가오는 여행"

const PlanedCardBox = styled.div`
  border: 1px solid red;
  border-radius: 15px;
  margin-bottom: 9px;

  height: 108px;

  display: flex;
  flex-direction: column;
`
const PlanedCard_row1 = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 22px;
  font-size: 22px;
  font-weight: bold;
`
const PlanedCard_row2 = styled.div`
  display: flex;

  margin-left: 22px;
  height: 22px;
`
const PlanedCard_element = styled.div`
  padding: 9px;
  margin-right: 9px;
  background-color: skyblue;
  border-radius: 8px;

  font-size: 12px;
  line-height: 6px;
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
}

const PlanedCard = ({ props }: PlanedCardProps) => {
    return(
        <>
            <PlanedCardBox>
              <PlanedCard_row1>
                <div>{props.destination}, D-{props.D_Days}</div>
                <DeleteBtn><img src={trash_bin_img}/></DeleteBtn>
              </PlanedCard_row1>
              <PlanedCard_row2>
                <PlanedCard_element>{props.period}</PlanedCard_element>
                <PlanedCard_element>{props.party_num}</PlanedCard_element>
                <PlanedCard_element>{props.transport}</PlanedCard_element>
              </PlanedCard_row2>
            </PlanedCardBox>
        </>
    )
}

export default PlanedCard;