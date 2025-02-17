// 테스트용 임시 인기 미션 데이터
type MissionPropsType = {
    missionId: number;
    destination: string;
    img_src?: string;
    title: string;
    content: string;
  };
  
export const PopularMissionData: MissionPropsType[] = [
    {
      missionId: 1,
      destination: "순천시",
      title: "갯벌",
      content: "갯벌에서 100m 달리기"
    },
    {
      missionId: 2,
      destination: "밀양시",
      title: "특산품",
      content: "사과 과수원"
    },
    {
      missionId: 3,
      destination: "서울시",
      title: "한강",
      content: "오리보트 타기"
    },
    {
      missionId: 4,
      destination: "평양시",
      title: "냉면",
      content: "냉면집 5개 돌고오기"
    },
    {
      missionId: 5,
      destination: "부산시",
      title: "신고식",
      content: "드럼통 20개 옮기기"
    }
  ];