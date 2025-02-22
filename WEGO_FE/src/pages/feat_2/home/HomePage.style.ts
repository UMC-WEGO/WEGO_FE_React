import styled from 'styled-components';

export const NoPopularPost = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;

  justify-content: center;
  align-items: center;
`;

export const NoPlanedTravel = styled.div`
  border: 1px solid rgba(165, 165, 165, 1);
  border-radius: 15px;
  margin-bottom: 9px;

  justify-content: center;
  align-items: center;

  height: 108px;

  display: flex;
`;

export const NoMission = styled.div`
  border: 1px solid gray;
  border-radius: 10px;

  height: 390px;
  width: 373px;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  align-items: center;
`;

// 홈 화면 전체적인 레이아웃
export const AppContainer = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-top: 75px;
`;

// 스크롤 되는 영역 : navbar 제외한 영역
export const ScrollArea = styled.div`
  overflow-y: auto;
  scrollbar-width: none;

  width: 95%;
`;

// 하단 탭 내비게이터 영역
export const NavbarArea = styled.div`
  background-color: white;
  margin-top: auto;

  width: 100%;
  height: 150px;
`;

// --- --- ---
// 로고 영역홈 화면
export const LogoContainer = styled.div`
  padding: 0 15px;
  height: 20px;

  img {
    width: 90px;
    height: 20px;
  }
`;

// 여행 조건 선택 영역
export const SelectorContainer = styled.div`
  margin: 5px;
  margin-top: 25px;
  height: 201px;

  display: flex;
  justify-content: center;
`;

// 랜덤 돌리기 버튼 영역
export const RandomBtnContainer = styled.div`
  margin: 5px;

  margin-top: 18px;
  height: 50px;
`;

// "다가오는 여행" 영역
export const PlanedContainer = styled.div`
  margin: 5px;

  margin-top: 27px;
  height: auto;
`;

// "인기 게시물" 영역
export const PopularPostContainer = styled.div`
  margin: 5px;

  margin-top: 27px;
  height: auto;
`;

// "인기 미션" 영역
export const PopularMissionContainer = styled.div`
  margin: 5px;
  margin-top: 27px;
  margin-bottom: 40px;
  height: 400px;
`;
// --- --- ---
// --- --- ---
// 영역 제목
export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 14px;
  padding: 0 15px;
  font-size: 20px;
  font-weight: 600;
`;
// --- --- ---
// --- --- ---
export const PopularPostArea = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 18px;

  // height: 359px;
  // overflow-y: auto;
`;
// --- --- ---
// --- --- ---
export const MoreBtn = styled.button`
  width: 47px;
  height: 18px;

  color: rgba(165, 165, 165, 1);
  font-size: 11px;
  font-weight: 600;

  background-color: white;
`;

export const RandomBtn = styled.button<{ isActivated: boolean }>`
  background-color: ${props =>
    props.isActivated ? 'rgba(0, 89, 255, 1)' : 'rgba(217, 217, 217, 1)'};

  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 94%;
  margin: 0 auto;

  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: 600;

  border-radius: 5px;
`;
