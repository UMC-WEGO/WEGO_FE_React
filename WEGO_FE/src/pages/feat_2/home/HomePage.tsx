///home
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router';
import WEGO_Logo from '../../../images/feat2/WEGO_Logo.jpg';

import PlanedCard from '../../../components/feat2/PlanedCard';
import PopularPostCard from '../../../components/feat2/PostCard';
import PopularMissionCard from '../../../components/feat2/MissionCard';
import DestinationFilter from '../../../components/feat2/DestinationFilter/DestinationFilter';
import Navbar from '../../../components/navbar/Navbar'

// 홈 화면 전체적인 레이아웃
const AppContainer = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-top: 42px;
`

// 스크롤 되는 영역 : navbar 제외한 영역
const ScrollArea = styled.div`
  overflow-y: auto;

  width: 95%;
`

// 하단 탭 내비게이터 영역
const NavbarArea = styled.div`
  background-color: white;
  margin-top: auto;

  width: 100%;
  height: 200px;
`

// --- --- --- 
// 로고 영역홈 화면
const LogoContainer = styled.div`
  margin: 5px;

  margin-left: 20px;
  margin-top: 36px;
  height: 18px;
`

// 여행 조건 선택 영역
const SelectorContainer = styled.div`
  margin: 5px;
  margin-top: 27px;
  height: 201px;

  display: flex;
  justify-content: center;
`

// 랜덤 돌리기 버튼 영역
const RandomBtnContainer = styled.div`
  margin: 5px;

  margin-top: 18px;
  height: 50px;
`

// "다가오는 여행" 영역
const PlanedContainer = styled.div`
  margin: 5px;

  margin-top: 27px;
  height: auto;
`

// "인기 게시물" 영역
const PopularPostContainer = styled.div`
  margin: 5px;

  margin-top: 27px;
  height: auto;
`

// "인기 미션" 영역
const PopularMissionContainer = styled.div`
  margin: 5px;

  margin-top: 27px;
  margin-bottom: 40px;
  height: 400px;
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
  font-weight: 600;
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
const MoreBtn = styled.button`
  width: 47px;
  height: 18px;

  color: rgba(165, 165, 165, 1);
  font-size: 11px;
  font-weight: 600;

  background-color: white;
`

const RandomBtn = styled(Link)`
  background-color: rgba(0, 89, 255, 1);
  height: 50px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  
  text-decoration: none; 
  color: white;
  font-size: 16px;
  font-weight: 600;

  border-radius: 5px;
`

type PlanedCardType = {
  planId: number;       // 여행 ID
  destination: string;  // 여행 목적지
  D_Days: number;       // 남은 날짜
  period: string;       // 여행 기간
  party_num: number;    // 여행 인원수
  transport: string;    // 이동 수단
}

type PostCardType ={
  ranking?: number;     // 인기순위 (인기 게시물에서)
  img_src?: string;      // 이미지 경로
  tag: string[];        // 상단에 들어가는 여행 태그
  title: string;        // 글 제목
  content: string;      // 글 내용
  destination: string;  // 여행지
  timestamp: Date;      // 게시 시간
  like: number;         // 좋아요 수
  comments: number;     // 댓글 수
  script: number;       // 저장된 수
}

type MissionPropsType = {
  destination: string;
  img_src?: string;
  title: string;
  content: string;
};

// 테스트용 임시 인기 미션 데이터
const sampleMission: MissionPropsType[] = [
  {
    destination: "순천시",
    title: "갯벌",
    content: "갯벌에서 100m 달리기"
  },
  {
    destination: "밀양시",
    title: "특산품",
    content: "사과 과수원"
  },
  {
    destination: "서울시",
    title: "한강",
    content: "오리보트 타기"
  },
  {
    destination: "평양시",
    title: "냉면",
    content: "냉면집 5개 돌고오기"
  },
  {
    destination: "부산시",
    title: "신고식",
    content: "드럼통 20개 옮기기"
  }
];

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

// 테스트용 임시 인기 미션 데이터
const samplePopular: PostCardType[] = [
  {
    ranking: 1,
    img_src: " ",
    tag: ["#태그", "#태그", "#미션제안"],
    title: "제목",
    content: "내용",
    destination: "여행지",
    timestamp: new Date(),
    like: 0,
    comments: 0,
    script: 0
  },
  {
    ranking: 2,
    img_src: " ",
    tag: ["#미션 제안"],
    title: "이런 건 어떤가요 ㅋㅋ",
    content: "순천 안온해변에서 갑자기......",
    destination: "순천시",
    timestamp: new Date(),
    like: 60,
    comments: 23,
    script: 43
  },
  {
    ranking: 3,
    img_src: " ",
    tag: ["#태그"],
    title: "제목____________",
    content: "내용________________________________",
    destination: "어디어디",
    timestamp: new Date(),
    like: 1,
    comments: 1,
    script: 1
  },
]

function HomePage() {
  // 필터 값
  const [departureDay, setDepartureDay] = useState("날짜 선택")
  const [numAdult, setNumAdult] = useState(0)
  const [numChild, setNumChild] = useState(0);
  const [transport, setTransport] = useState("이동 수단");
  const [timeAway, setTimeAway] = useState("시간대")
  const [departureLocation, setDepartureLocation] = useState("출발지 선택");

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
            <DestinationFilter
              departureDay={departureDay}
              numAdult={numAdult}
              numChild={numChild}
              transport={transport}
              timeAway={timeAway}
              departureLocation={departureLocation}

              setDeparture={setDepartureDay}
              setNumAdult={setNumAdult}
              setNumChild={setNumChild}
              setTransport={setTransport}
              setTimeAway={setTimeAway}
              setDepartureLocation={setDepartureLocation}
            />
          </SelectorContainer>
            <RandomBtnContainer>
            <RandomBtn to='/home/travel-select/random'>랜덤 돌리기</RandomBtn>
            {/* <Button type='button' color='--color-main-blue' content='랜덤 돌리기' width='100%'/> */}
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
              <MoreBtn>더보기 {">"}</MoreBtn>
            </ContainerTitle>
            <PopularPostArea>
              {samplePopular.map((popular) => (
                <PopularPostCard props={popular} showRank={true}/>
              ))}
            </PopularPostArea>
          </PopularPostContainer>

          <PopularMissionContainer>
            <ContainerTitle>인기 미션</ContainerTitle>
            <PopularMissionCard props={sampleMission}/>
          </PopularMissionContainer>

        </ScrollArea>
        <NavbarArea>
          {/* <Navbar/> */}
        </NavbarArea>
      </AppContainer>
    </>
  )
}

export default HomePage;
