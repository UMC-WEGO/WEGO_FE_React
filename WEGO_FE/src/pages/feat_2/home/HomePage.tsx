///home
import styled from 'styled-components';
import { useState } from 'react';
import WEGO_Logo from '../../../images/feat2/WEGO_Logo.jpg';

import PlanedCard from '../../../components/feat2/PlanedCard';
import PopularPostCard from '../../../components/feat2/PostCard';
import PopularMissionCard from '../../../components/feat2/MissionCard';
import Button from '../../../components/feat1/button/Button';
import DestinationFilter from '../../../components/feat2/DestinationFilter';

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
  margin-top: 27px;
  height: 201px;

  display: flex;
  justify-content: center;

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

type PlanedCardType = {
  planId: number;       // 여행 ID
  destination: string;  // 여행 목적지
  D_Days: number;       // 남은 날짜
  period: string;       // 여행 기간
  party_num: number;    // 여행 인원수
  transport: string;    // 이동 수단
}

// 테스트용 임시 여행 데이터
const samplePlan: PlanedCardType[] = [
  {
    planId: 1,
    destination: "청주",
    D_Days: 3,
    period: "2024-01-01 ~ 12-31",
    party_num: 12,
    transport: "버스"
  },
  {
    planId: 2,
    destination: "양양",
    D_Days: 9,
    period: "2024-01-01 ~ 12-31",
    party_num: 12,
    transport: "버스"
  },
  {
    planId: 3,
    destination: "김포",
    D_Days: 15,
    period: "2024-01-01 ~ 12-31",
    party_num: 12,
    transport: "버스"
  }
];

function HomePage() {
  // 다가오는 여행 상태 관리
  const [cardList, setCardList] = useState(samplePlan);
  const handleDelete = (flag: number) => {     //flag: 해당 카드가 표시 될건지 안될건지
    const updatePlanList = cardList.filter((_, i) => i !== flag);  // 해당 카드 삭제
    setCardList(updatePlanList);               //상태 업데이트
  }

  return(
    <>
      <AppContainer>
        <ScrollArea>
          <LogoContainer><img src={WEGO_Logo}/></LogoContainer>

          <SelectorContainer>
            <DestinationFilter/>
          </SelectorContainer>

          <RandomBtnContainer>
            <Button type='button' color='--color-main-blue' content='랜덤 돌리기' width='100%'/>
          </RandomBtnContainer>
          
          <PlanedContainer>          
            <ContainerTitle>다가오는 여행</ContainerTitle>
            {cardList.map((plan, flag) => (
              <PlanedCard key={flag} props={plan} onClickDelete={() => handleDelete(flag)} />
            ))}
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
            <Button type='button' color='--color-main-blue' content='미션저장' width='109px' height='40px'/>
          </PopularMissionContainer>

        </ScrollArea>
        <NavbarArea>Navbar</NavbarArea>
      </AppContainer>
    </>
  )
}

export default HomePage;
