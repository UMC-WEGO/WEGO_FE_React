// 여행지 임시 데이터
import car_icon from "../../images/feat2/car_icon.png";
import clock_icon from "../../images/feat2/alarm_icon.png";

  export const location = [
    { name: "최근출발", elements: []},
    { name: "수도권", elements: ["서울 강북", "서울 강남", "의정부시", "고양시", "용인시", "하남시", "성남시", "남양주시"] },
    { name: "강원도", elements: ["강릉시", "속초시", "춘천시", "정선군", "양양군", "평창군"] },
    { name: "전라도", elements: ["전주시", "군산시", "남원시", "부안군", "여수시", "순천시", "담양군", "목포시"] },
    { name: "경상도", elements: ["경주시", "포항시", "안동시", "문경시", "창원시", "통영시", "거제시", "김해시"] },
    { name: "충청도", elements: ["단양군", "청주시", "충주시", "제천시", "천안시", "보령시", "공주시", "아산시"] },
    { name: "제주도", elements: ["제주시"] },
  ]
  
  export const Item_time = [
    { label: "1시간 이내", icon: clock_icon },
    { label: "1시간 ~ 2시간", icon: clock_icon },
    { label: "2시간 ~ 3시간", icon: clock_icon },
    { label: "3시간 이상", icon: clock_icon }
  ];
  export const Item_transport = [
    { label: "자동차", icon: car_icon },
    { label: "버스", icon: car_icon },
    { label: "기차(KTX)", icon: car_icon }
  ]
