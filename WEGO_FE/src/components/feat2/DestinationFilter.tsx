import styled from "styled-components";
// 여행 조건 선택하는 부분

const BottomSheetItem = styled.label`
  padding: 12px;
  border-bottom: 1px solid gray;
`
const ToggleItem = styled.select`
  padding: 12px;
  border-bottom: 1px solid gary;
`
const SelectorRow1 = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
`
const SelectorRow2 = styled.div`
  border-bottom: 1px solid gray;
`
const SelectorRow3 = styled.div`
  border-bottom: 1px solid gray;
`
const SelectorRow4 = styled.div`
  border-bottom: 1px solid gray;
`

const DestinationFilter = () => {
    return(
        <>
            <SelectorRow1>
              <BottomSheetItem>날짜</BottomSheetItem>
              <BottomSheetItem>인원</BottomSheetItem>
            </SelectorRow1>
            <SelectorRow2>
              <ToggleItem>
                <option value="car">자가용</option>
                <option value="bus">버스</option>
                <option value="KTX">기차(KTX)</option>
              </ToggleItem>
            </SelectorRow2>
            <SelectorRow3>
              <ToggleItem>
                <option value="1">1시간 이내</option>
                <option value="2">2시간 이내</option>
                <option value="3">3시간 이내</option>
              </ToggleItem>
            </SelectorRow3>
            <SelectorRow4>
              <BottomSheetItem>지역</BottomSheetItem>
            </SelectorRow4>
        </>
    )
}

export default DestinationFilter;