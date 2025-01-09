import styled from "styled-components"

const PopularPostCardBox = styled.div`
  border-bottom: 1px solid gray;
  padding: 9px;
  display: flex;

  display: flex; 
`
const PopularPostColumn1 = styled.div`
  //순위
  margin-right: 14px;
`
const PopularPostColumn2 = styled.div`
 //이미지
  margin-right: 14px;

  border: 1px solid violet;
  width: 95px;
  height: 95px;
`
const PopularPostColumn3 = styled.div`
  //내용물
  margin-right: 14px;

  display: flex;
  flex-direction: column;
`
const PopularPostRow1 = styled.div`
  //태그
  color: blue;
  font-size: 9px;
`
const PopularPostRow2 = styled.div`
  //제목
  margin-top: 9px;
  font-size: 17px;
  font-weight: bold;
`
const PopularPostRow3 = styled.div`
  //내용
  margin-top: 9px;
`
const PopularPostRow4 = styled.div`
  //하단 요소
  margin-top: 14px;
`

const PopularPostCard = () => {
    return(
        <>
            <PopularPostCardBox>
                <PopularPostColumn1>1</PopularPostColumn1>
                <PopularPostColumn2>img</PopularPostColumn2>
                <PopularPostColumn3>
                  <PopularPostRow1># 태그</PopularPostRow1>
                  <PopularPostRow2>제목</PopularPostRow2>
                  <PopularPostRow3>내용</PopularPostRow3>
                  <PopularPostRow4>하단</PopularPostRow4>
                </PopularPostColumn3>
              </PopularPostCardBox>
        </>
    )
}

export default PopularPostCard;