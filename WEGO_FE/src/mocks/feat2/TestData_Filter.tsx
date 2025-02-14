// 여행지 임시 데이터
import car_icon from "../../images/feat2/car_icon.png";
import clock_icon from "../../images/feat2/alarm_icon.png";

  export const location = [
    { name: "수도권", elements: ["서울 강북", "서울 강남", "의정부", "고양", "용인", "하남", "성남", "남양주"] },
    { name: "강원도", elements: ["강릉", "속초", "춘천", "정선", "양양", "평창"] },
    { name: "전라북도", elements: ["전주", "군산", "남원", "부안"] },
    { name: "전라남도", elements: ["여수", "순천", "담양", "목포"] },
    { name: "경상북도", elements: ["경주", "포항", "안동", "문경"] },
    { name: "경상남도", elements: ["창원", "통영", "거제", "김해"] },
    { name: "충청북도", elements: ["단양", "청주", "충주", "제천"] },
    { name: "충청남도", elements: ["천안", "보령", "공주", "아산"] },
    { name: "광역/자치시", elements: ["대전", "울산", "인천", "부산", "대구", "광주", "세종"] },
  ]
  
  export const Item_time = [
    { label: "1시간 이내", icon: clock_icon },
    { label: "1시간 ~ 2시간", icon: clock_icon },
    { label: "2시간 ~ 3시간", icon: clock_icon },
    { label: "3시간 이상", icon: clock_icon }
  ];
  export const Item_transport = [
    { label: "자가용", icon: car_icon },
    { label: "버스", icon: car_icon },
    { label: "기차(KTX)", icon: car_icon }
  ]
