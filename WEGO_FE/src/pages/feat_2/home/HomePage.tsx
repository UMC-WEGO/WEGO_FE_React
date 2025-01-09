///home
import styled from 'styled-components';
import * as S from './HomePage.style'
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

  padding: 22px;
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
  font-size: 20px;
  font-weight: bold;
`

// --- --- ---
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
// --- --- ---
// --- --- ---
const PopularPostArea = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 18px;
`
const PopularPostCard = styled.div`
  border-bottom: 1px solid gray;
  padding: 9px;
  display: flex;

  display: flex; 
`
const PopularPostColumn1 = styled.div`
  /*순위*/
  margin-right: 14px;
`
const PopularPostColumn2 = styled.div`
  /*이미지*/
  margin-right: 14px;

  border: 1px solid violet;
  width: 95px;
  height: 95px;
`
const PopularPostColumn3 = styled.div`
  /*내용물*/
  margin-right: 14px;

  display: flex;
  flex-direction: column;
`
const PopularPostRow1 = styled.div`
  /*태그*/
  color: blue;
  font-size: 9px;
`
const PopularPostRow2 = styled.div`
  /*제목*/
  margin-top: 9px;
  font-size: 17px;
  font-weight: bold;
`
const PopularPostRow3 = styled.div`
  /*내용*/
  margin-top: 9px;
`
const PopularPostRow4 = styled.div`
  /*하단 요소*/
  margin-top: 14px;
`
// --- --- ---
// --- --- ---
const PopularMissionArea = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 22px;

  display: flex;
  flex-direction: column; 
`
const PopularMissionRow1 = styled.div`
  /*제목*/
  font-size: 18px;
`
const PopularMissionRow2 = styled.div`
  /*이미지*/
  margin-top: 22px;
  border: 1px solid mediumpurple;

  height: 158px;
`
const PopularMissionRow3 = styled.div`
  /*내용*/
  margin-top: 22px;
`
const PopularMissionRow4 = styled.div`
  /*버튼*/
  margin-top:22px;

`
// --- --- ---
// --- --- ---
const RandomBtn = styled.button`
  color: white;
  border-radius: 5px;
  background-color: blue;

  height: 45px;
  width: 100%;
`
// --- --- ---
// --- --- ---
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


function HomePage() {
  return(
    <>
      <AppContainer>
        <ScrollArea>
          <LogoContainer><img src={WEGO_Logo}/></LogoContainer>

          <SelectorContainer>
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
          </SelectorContainer>

          <RandomBtnContainer>
            <RandomBtn>랜덤 돌리기</RandomBtn>
          </RandomBtnContainer>
          
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
            <PopularPostArea>
              <PopularPostCard>
                <PopularPostColumn1>1</PopularPostColumn1>
                <PopularPostColumn2>img</PopularPostColumn2>
                <PopularPostColumn3>
                  <PopularPostRow1># 태그</PopularPostRow1>
                  <PopularPostRow2>제목</PopularPostRow2>
                  <PopularPostRow3>내용</PopularPostRow3>
                  <PopularPostRow4>하단</PopularPostRow4>
                </PopularPostColumn3>
              </PopularPostCard>
              <PopularPostCard>
                <PopularPostColumn1>1</PopularPostColumn1>
                <PopularPostColumn2>img</PopularPostColumn2>
                <PopularPostColumn3>
                  <PopularPostRow1># 태그</PopularPostRow1>
                  <PopularPostRow2>제목</PopularPostRow2>
                  <PopularPostRow3>내용</PopularPostRow3>
                  <PopularPostRow4>하단</PopularPostRow4>
                </PopularPostColumn3>
              </PopularPostCard>
            </PopularPostArea>
          </PopularPostContainer>

          <PopularMissionContainer>
            <ContainerTitle>인기 미션</ContainerTitle>
            <PopularMissionArea>
              <PopularMissionRow1>순천</PopularMissionRow1>
              <PopularMissionRow2>img</PopularMissionRow2>
              <PopularMissionRow3>내용</PopularMissionRow3>
              <PopularMissionRow4>
                <button>미션 저장</button>
              </PopularMissionRow4>
            </PopularMissionArea>
          </PopularMissionContainer>

        </ScrollArea>
        <NavbarArea>Navbar</NavbarArea>
      </AppContainer>
    </>
  )
}

export default HomePage;
