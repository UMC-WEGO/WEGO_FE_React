//home/travel-select/
import styled from "styled-components";

import back_arrow_img from "../../../images/feat2/Back_Arrow.png"
import share_img from "../../../images/feat2/share_icon.png"
import PostCard from "../../../components/feat2/PostCard";
import PlaningCard from "../../../components/feat2/PlaningCard";
import DestinationBtn from "../../../components/feat2/DestinationBtn";

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
  margin-top: 24px;
  height: 24px;

  display: flex;
  justify-content: space-between;

  border: 1px solid darkviolet;
`

// "여행지를 선정하세요" 영역
const PlanContainer = styled.div`
  margin: 5px;

  margin-top: 32px;
  height: 146px;

  display: flex;
  justify-content: center;
  
  border: 1px solid darkviolet;
`

// 여행지 선택 버튼 영역
const DestinationContainer = styled.div`
  margin: 5px;
  margin-top: 27px;
  height: 119px;

  display: flex;
  justify-content: center;
  gap: 10px;

  border: 1px solid darkviolet;
`

// 즉흥 게시판 영역
const PostContainer = styled.div`
  margin: 5px;

  margin-top: 32px;
  height: 297px;

  border: 1px solid darkviolet;
`
const PostArea = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
`
const Title = styled.div`
  width: 345px;
  height: 18px;

  margin-bottom: 10px;

  font-size: 18px;
  font-weight: 800;

  display: flex;
  justify-content: space-between;
`

const SubmitBtnContainer = styled.div`
  margin: 5px;

  margin-top: 32px;
  margin-bottom: 36px;
  height: 50px;

  border: 1px solid darkviolet;
`
// --- --- ---
// --- --- ---
// 여기로 갈래요 버튼
const SelectionComplete = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  width: 363px;
  height: 50px;
  
  border-radius: 5px;
`

function TravelSelectPage() {
  return(
    <>
      <AppContainer>
        <ScrollArea>
          <ToolBarContainer>
            <img src={back_arrow_img}/>
            <img src={share_img}/>
          </ToolBarContainer>

          <PlanContainer>
            <PlaningCard/>
          </PlanContainer>

          <DestinationContainer>
            <DestinationBtn/>
            <DestinationBtn/>
            <DestinationBtn/>
          </DestinationContainer>

          <PostContainer>
            <Title>
              <div>즉흥 게시판</div>
              <button>더보기</button>
            </Title>
            <PostArea>
              <PostCard/>
              <PostCard/>              
            </PostArea>

          </PostContainer>

          <SubmitBtnContainer>
            <SelectionComplete>여기로 갈래요</SelectionComplete>
          </SubmitBtnContainer>
        </ScrollArea>
      </AppContainer>
    </>
  )
}

export default TravelSelectPage;
