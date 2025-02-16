// 테스트용 임시 목적지 버튼 데이터
  
  type DestinationPropsType = {
    location: string;
    city: string;
    time: string;
  };
  
  export const recommended_destinations : DestinationPropsType[] = [
    {
      location: "경상북도",
      city: "대구",
      time: "1시간 44분"
    },
    {
      location: "충청남도",
      city: "천안",
      time: "1시간 11분"
    },
    {
      location: "충청북도",
      city: "충주",
      time: "1시간 30분"
    }
  ]