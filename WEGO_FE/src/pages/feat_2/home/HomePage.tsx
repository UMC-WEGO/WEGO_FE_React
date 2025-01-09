///home
import styled from 'styled-components';
import WEGO_Logo from '../../../images/feat2/WEGO_Logo.jpg';

/*
속성값이 겹치는 컨테이너 (LOGO, Selector 등)를 하나의 컴포넌트로 만들고
속성값을 따로 받는건 어떰???
*/

// 홈 화면 전체적인 레이아웃
const AppContainer = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-top: 42px;

  border: 1px solid purple;
`

// 스크롤 되는 영역 : navbar 제외한 영역
const ScrollArea = styled.div`
  overflow-y: auto;

  width: 95%;

  border: 1px solid violet;
`

// 하단 탭 내비게이터 영역
const NavbarArea = styled.div`
  background-color: rebeccapurple;
  margin-top: auto;

  width: 100%;
  height: 90px;
`

// 로고 영역
const LogoContainer = styled.div`
  margin: 5px;

  margin-top: 36px;
  height: 18px;

  border: 1px solid darkviolet;
`

// 여행 조건 선택 영역
const SelectorContainer = styled.div`
  margin: 5px;

  margin-top: 27px;
  height: 210px;

  border: 1px solid blueviolet;
`

// 랜덤 돌리기 버튼 영역
const RandomBtnContainer = styled.div`
  margin: 5px;

  margin-top: 18px;
  height: 50px;

  border: 1px solid darkorchid;
`

// "다가오는 여행" 영역
const PlanedContainer = styled.div`
  margin: 5px;

  margin-top: 27px;
  height: auto;

  border: 1px solid mediumorchid;
`

// "인기 게시물" 영역
const PopularPostContainer = styled.div`
  margin: 5px;

  margin-top: 27px;
  height: auto;

  border: 1px solid mediumpurple;
`

// "인기 미션" 영역
const PopularMissionContainer = styled.div`
  margin: 5px;

  margin-top: 27px;
  height: 400px;

  border: 1px solid Indigo;
`

function HomePage() {
  return(
    <>
      <AppContainer>
        <ScrollArea>
          <LogoContainer><img src={WEGO_Logo}/></LogoContainer>
          <SelectorContainer>Selector</SelectorContainer>
          <RandomBtnContainer>Random</RandomBtnContainer>
          <PlanedContainer>
            Planed
            <h1>계획 1</h1>
            <h1>계획 2</h1>
          </PlanedContainer>
          <PopularPostContainer>
            Post
            <h1>글 1</h1>
            <h1>글 2</h1>
          </PopularPostContainer>
          <PopularMissionContainer>Mission</PopularMissionContainer>
        </ScrollArea>
        <NavbarArea>Navbar</NavbarArea>
      </AppContainer>
    </>
  )
}

export default HomePage;
