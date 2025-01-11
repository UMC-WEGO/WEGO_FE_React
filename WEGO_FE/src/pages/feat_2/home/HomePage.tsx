///home
import styled from 'styled-components';
import * as S from './HomePage.style'
import WEGO_Logo from '../../../images/feat2/WEGO_Logo.jpg';

import PlanedCard from '../../../components/feat2/PlanedCard';
import PopularPostCard from '../../../components/feat2/PostCard';
import PopularMissionCard from '../../../components/feat2/MissionCard';
import Button from '../../../components/feat1/button/Button';

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
  height: 130px;
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
// --- --- ---
const PopularPostArea = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 18px;
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
            {/* <RandomBtn>랜덤 돌리기</RandomBtn>   */}
            <Button type='button' color='--color-main-blue' content='랜덤 돌리기' width='100%'/>
          </RandomBtnContainer>
          
          <PlanedContainer>          
            <ContainerTitle>다가오는 여행</ContainerTitle>
            <PlanedCard/>
          </PlanedContainer>

          <PopularPostContainer>
            <ContainerTitle>
              <div>인기 게시물</div>
              <button>더보기</button>
            </ContainerTitle>
            <PopularPostArea>
              <PopularPostCard/>
            </PopularPostArea>
          </PopularPostContainer>

          <PopularMissionContainer>
            <ContainerTitle>인기 미션</ContainerTitle>
            <PopularMissionCard/>
          </PopularMissionContainer>

        </ScrollArea>
        <NavbarArea>Navbar</NavbarArea>
      </AppContainer>
    </>
  )
}

export default HomePage;
