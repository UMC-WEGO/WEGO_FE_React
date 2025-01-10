//home/travel-select/
import styled from "styled-components";

import back_arrow_img from "../../../images/feat2/Back_Arrow.png"
import share_img from "../../../images/feat2/share_icon.png"
import PostCard from "../../../components/feat2/PostCard";

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

  border: 1px solid darkviolet;
`
const PlaningCard = styled.div`
  width: 363px;
  height: 146px;
  border: 1px solid violet;
  padding: 15px;

  display: flex;
  flex-direction: column;
  gap: 15px;
`
const PlaningCardRow1 = styled.div`
  font-size: 25px;
  font-weight: 700;

  height: 25px;
`
const PlaningCardRow2 = styled.div`
  font-size: 14px;
  font-weight: 500;

  height: 14px;
`
const PlaningCardRow3 = styled.div`
  font-size: 14px;
  font-weight: 500;

  height: 30px;  

  display: flex;
  gap: 20px;
`
const PlaningCardRow4 = styled.div`
  font-size: 14px;
  font-weight: 500;

  height: 13px;

  display: flex;
  gap: 20px;
`

// 여행지 선택 버튼 영역
const DestinationContainer = styled.div`
  margin: 5px;
  margin-top: 27px;
  height: 119px;
  
  display: flex;
  gap: 10px;

  border: 1px solid darkviolet;
`
const DestinationBtn = styled.div`
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

// 증흥 게시판 영역
const PostContainer = styled.div`
  margin: 5px;

  margin-top: 32px;
  height: 297px;

  border: 1px solid darkviolet;
`
const Title = styled.div`
  width: 345px;
  height: 18px;

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
            <PlaningCard>
              <PlaningCardRow1>여행지를 선정하세요</PlaningCardRow1>
              <PlaningCardRow2>2024.11.26 ~ 2024.11.27</PlaningCardRow2>
              <PlaningCardRow3>
                <div>출발지</div>
                <div>부산</div>
              </PlaningCardRow3>
              <PlaningCardRow4>
                <div>이동수단</div>
                <div>img</div>
              </PlaningCardRow4>
            </PlaningCard>
          </PlanContainer>

          <DestinationContainer>
            <DestinationBtn>
              <DestinationLocation>경상북도</DestinationLocation>
              <DestinationCity>대구</DestinationCity>
              <DestinationTime>1시간 30분</DestinationTime>
            </DestinationBtn>
            <DestinationBtn>
              <DestinationLocation>경상북도</DestinationLocation>
              <DestinationCity>대구</DestinationCity>
              <DestinationTime>1시간 30분</DestinationTime>
            </DestinationBtn>
            <DestinationBtn>
              <DestinationLocation>경상북도</DestinationLocation>
              <DestinationCity>대구</DestinationCity>
              <DestinationTime>1시간 30분</DestinationTime>
            </DestinationBtn>
          </DestinationContainer>

          <PostContainer>
            <Title>
              <div>즉흥 게시판</div>
              <button>더보기</button>
            </Title>
            <PostCard/>
            <PostCard/>
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
