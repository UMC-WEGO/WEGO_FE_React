///home
import styled from 'styled-components';
import WEGO_Logo from '../../../images/feat2/WEGO_Logo.jpg';
import trash_bin from '../../../images/feat2/trash_binpng.png';

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

// --- --- --- 
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
// --- --- ---

// --- --- ---
// 영역 제목
const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 14px;
  margin-bottom: 14px;
  font-size: 18px;
  font-weight: bold;
`

// 계획된 여행 모듈   --->   ()
const PlanedCard = styled.div`
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

function HomePage() {
  return(
    <>
      <AppContainer>
        <ScrollArea>
          <LogoContainer><img src={WEGO_Logo}/></LogoContainer>

          <SelectorContainer>Selector</SelectorContainer>

          <RandomBtnContainer>Random</RandomBtnContainer>

          <PlanedContainer>
            <ContainerTitle>다가오는 여행</ContainerTitle>
            <PlanedCard>
              <PlanedCard_row1>
                <div>어디 여행, D-5</div>
                <button><img src={trash_bin}/></button>
              </PlanedCard_row1>
              <PlanedCard_row2>
                <PlanedCard_element>2024.11.26 ~ 11.27</PlanedCard_element>
                <PlanedCard_element>7명</PlanedCard_element>
                <PlanedCard_element>자가용</PlanedCard_element>
              </PlanedCard_row2>
            </PlanedCard>
            <PlanedCard>
            <PlanedCard_row1>
                <div>암튼 여행, D-5</div>
                <button><img src={trash_bin}/></button>
              </PlanedCard_row1>
              <PlanedCard_row2>
                <PlanedCard_element>1501.10.15 ~ 12.21</PlanedCard_element>
                <PlanedCard_element>7명</PlanedCard_element>
                <PlanedCard_element>가마</PlanedCard_element>
              </PlanedCard_row2>
            </PlanedCard>
          </PlanedContainer>

          <PopularPostContainer>
            <ContainerTitle>
              <div>인기 게시물</div>
              <button>더보기</button>
            </ContainerTitle>
            <h1>글 1</h1>
            <h1>글 2</h1>
          </PopularPostContainer>

          <PopularMissionContainer>
            <ContainerTitle>인기 미션</ContainerTitle>
          </PopularMissionContainer>

        </ScrollArea>
        <NavbarArea>Navbar</NavbarArea>
      </AppContainer>
    </>
  )
}

export default HomePage;
