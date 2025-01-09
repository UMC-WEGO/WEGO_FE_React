//home/travel-select/
import styled from "styled-components";

// 전체적인 레이아웃
const AppContainer = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-top: 42px;

  border: 1px solid purple;
`

// 스크롤 되는 영역
const ScrollArea = styled.div`
  overflow-y: auto;

  width: 95%;

  border: 1px solid violet;
`

// 툴바 영역 (뒤로가기, 공유 버튼 영역)
const ToolBarContainer = styled.div`
  margin: 5px;

  margin-top: 23px;
  height: 23px;

  border: 1px solid darkviolet;
`

// "여행지를 선정하세요" 영역
const PlanContainer = styled.div`
  margin: 5px;

  margin-top: 32px;
  height: 149px;

  border: 1px solid darkviolet;
`

// 여행지 선택 버튼 영역
const DestinationContainer = styled.div`
  margin: 5px;

  margin-top: 27px;
  height: 117px;

  border: 1px solid darkviolet;
`

const PostContainer = styled.div`
  margin: 5px;

  margin-top: 32px;
  height: 297px;

  border: 1px solid darkviolet;
`

const SubmitBtnContainer = styled.div`
  margin: 5px;

  margin-top: 32px;
  margin-bottom: 36px;
  height: 50px;

  border: 1px solid darkviolet;
`

function TravelSelectPage() {
  return(
    <>
      <AppContainer>
        <ScrollArea>
          <ToolBarContainer>툴바</ToolBarContainer>
          <PlanContainer>여행지를 선정하세요</PlanContainer>
          <DestinationContainer>여행지 버튼</DestinationContainer>
          <PostContainer>즉흥 게시판</PostContainer>
          <SubmitBtnContainer>여기로 갈래요</SubmitBtnContainer>
        </ScrollArea>
      </AppContainer>
    </>
  )
}

export default TravelSelectPage;
