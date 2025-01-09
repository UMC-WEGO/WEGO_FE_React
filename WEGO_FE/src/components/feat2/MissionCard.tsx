import styled from "styled-components"

const PopularMissionCardBox = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 22px;

  display: flex;
  flex-direction: column; 
`
const PopularMissionRow1 = styled.div`
  //제목
  font-size: 18px;
`
const PopularMissionRow2 = styled.div`
  //이미지
  margin-top: 22px;
  border: 1px solid mediumpurple;

  height: 158px;
`
const PopularMissionRow3 = styled.div`
  //내용
  margin-top: 22px;
`
const PopularMissionRow4 = styled.div`
  //버튼
  margin-top:22px;
`

const PopularMissionCard = () => {
    return(
        <>
            <PopularMissionCardBox>
              <PopularMissionRow1>순천</PopularMissionRow1>
              <PopularMissionRow2>img</PopularMissionRow2>
              <PopularMissionRow3>내용</PopularMissionRow3>
              <PopularMissionRow4>
                <button>미션 저장</button>
              </PopularMissionRow4>
            </PopularMissionCardBox>
        </>
    )
}

export default PopularMissionCard;