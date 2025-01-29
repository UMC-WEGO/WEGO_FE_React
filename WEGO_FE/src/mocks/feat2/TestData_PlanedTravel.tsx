// 테스트용 임시 여행 데이터

type PlanedCardType = {
    planId: number;       // 여행 ID
    destination: string;  // 여행 목적지
    D_Days: number;       // 남은 날짜
    period: string;       // 여행 기간
    party_num: number;    // 여행 인원수
    transport: string;    // 이동 수단
  }
  
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

  export default samplePlan;