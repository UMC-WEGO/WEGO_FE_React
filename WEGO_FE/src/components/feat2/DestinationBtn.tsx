import styled from "styled-components";
// 여행지를 선택하는 버튼
// 여행지 선택 화면에서 추천된 선택지 버튼

const DestinationBtnBox = styled.div`
  width: 115px;
  height: 119px;
  border: 1px solid gray;
  border-radius: 13px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  padding-top:10px;
  padding-right: 13px;
  padding-bottom: 10px;
  padding-left: 13px;

  align-items: center;
  justify-content: center;
`
const DestinationLocation = styled.div`
  width: 49px;
  height: 21px;

  font-size: 14px;
`
const DestinationCity = styled.div`
  width: 49px;
  height: 32px;

  font-size: 28px;
  font-weight: 600;
`
const DestinationTime = styled.div`
  width: 87px;
  height: 28px;

  font-size: 14px;
  display: flex;
  justify-content: center;  // 가로 가운데 정렬
  align-items: center;  // 세로 가운데 정렬

  border: 1px solid gray;
  border-radius: 16px;
`

const DestinationBtn = () => {
    return(
        <>
            <DestinationBtnBox>
              <DestinationLocation>경상북도</DestinationLocation>
              <DestinationCity>대구</DestinationCity>
              <DestinationTime>1시간 30분</DestinationTime>
            </DestinationBtnBox>
        </>
    )
}

export default DestinationBtn;