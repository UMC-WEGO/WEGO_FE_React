import styled from "styled-components"

// 전체적인 레이아웃
export const AppContainer = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-top: 42px;
`

// 스크롤 되는 영역
export const ScrollArea = styled.div`
  overflow-y: auto;
  scrollbar-width: none;
`

// 툴바 영역 (뒤로가기, 공유 버튼 영역)
export const ToolBarContainer = styled.div`
  margin: 5px;
  margin-top: 24px;
  height: 24px;

  display: flex;
  justify-content: space-between;
`

// "여행지를 선정하세요" 영역
export const PlanContainer = styled.div`
  margin: 5px;

  margin-top: 32px;
  height: 146px;

  display: flex;
  justify-content: center;
`

// 여행지 선택 버튼 영역
export const DestinationContainer = styled.div`
  margin: 5px;
  margin-top: 27px;
  height: 146px;

  display: flex;
  justify-content: center;
  gap: 10px;
`

// 즉흥 게시판 영역
export const PostContainer = styled.div`
  margin: 5px;

  width: 363px;
  height: 297px;
`
export const PostArea = styled.div`
  border: 1px solid gray;
  border-radius: 10px;

  // height: 269px;
  // overflow-y: auto;
`
export const Title = styled.div`
  width: 345px;
  height: 18px;

  margin-bottom: 10px;

  font-size: 18px;
  font-weight: 800;

  display: flex;
  justify-content: space-between;
`

export const SubmitBtnContainer = styled.div`
  margin: 5px;

  margin-top: 32px;
  margin-bottom: 36px;
  height: 50px;
`

// 개시판 옆 '더보기' 버튼
export const Seemore = styled.button`
  background-color: white;
  color: rgba(165, 165, 165, 1);
  font-size: 11px;
  font-weight: 600;
`

// 여기로 갈래요 버튼
export const SelectionComplete = styled.button<{ isDestinationSelected: boolean | number }>`
  background-color: ${(props) => props.isDestinationSelected ? 'rgba(0, 89, 255, 1)' : 'rgba(217, 217, 217, 1)'};
  color: white;
  padding: 10px;
  width: 363px;
  height: 50px;

  font-size: 16px;
  font-weight: 600;
  
  border-radius: 5px;
`

export const NoPopularPost = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;

  justify-content: center;
  align-items: center;
`