import { TMission } from '../../../types/missionType';
import missionTestImg from '../../../images/feat1/mission_test.png';

const mockMissions: TMission[] = [
  {
    imgSrc: missionTestImg,
    pointText: '100원',
    missionName: '골목길 미션',
    missionDescription: '예쁜 골목길 보이면 사진 찍기',
    registerDate: '2024.11.28 등록',
  },
  {
    imgSrc: missionTestImg,
    pointText: '200원',
    missionName: '공원 산책 미션',
    missionDescription: '산책 중 마음에 드는 풍경 사진 찍기',
    registerDate: '2024.12.01 등록',
  },
  {
    imgSrc: missionTestImg,
    pointText: '150원',
    missionName: '카페 방문 미션',
    missionDescription: '예쁜 카페 음료 사진 찍기',
    registerDate: '2024.12.03 등록',
  },
  {
    imgSrc: missionTestImg,
    pointText: '300원',
    missionName: '도서관 미션',
    missionDescription: '도서관 풍경이나 책 사진 찍기',
    registerDate: '2024.12.05 등록',
  },
  {
    imgSrc: missionTestImg,
    pointText: '120원',
    missionName: '해변 산책 미션',
    missionDescription: '해변 풍경 사진 찍기',
    registerDate: '2024.12.07 등록',
  },
  {
    imgSrc: missionTestImg,
    pointText: '250원',
    missionName: '야경 촬영 미션',
    missionDescription: '멋진 야경 사진 찍기',
    registerDate: '2024.12.10 등록',
  },
];

export default mockMissions;
