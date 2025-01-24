import missionpic from '../../images/feat5/missionpic.png';

// 로컬 데이터! 미션 인증하기와 연결되어야 함
export const initialSchedules = [
  {
    id: 1,
    title: '충주 여행, D+1',
    dateRange: '2024.11.26 ~ 11.27',
    people: 7,
    tag: '자가용',
    points: '+800 포인트 적립',
    isMissionCompleted: false,
    missions: [
      {
        id: 1,
        name: '골목길 미션',
        imageUrl: missionpic,
        mission_write: '충주 관아골 골목 갔다왔는데 벽화가 너무 예뻤다.',
      },
      {
        id: 2,
        name: '나만의 명소 미션',
        imageUrl: missionpic,
        mission_write: '농담곰',
      },
      {
        id: 3,
        name: '미션 3',
        imageUrl: missionpic,
        mission_write: '33333333333333',
      },
      {
        id: 4,
        name: '미션 4',
        imageUrl: missionpic,
        mission_write: '4444',
      },
    ],
  },
  {
    id: 2,
    title: '경주 여행, D+10',
    dateRange: '2024.11.16 ~ 11.17',
    people: 7,
    tag: '자가용',
    points: '+600 포인트 적립',
    isMissionCompleted: true,
    missions: [
      {
        id: 1,
        name: '골목길 미션',
        imageUrl: missionpic,
        mission_write: '골목길',
      },
    ],
  },
];
