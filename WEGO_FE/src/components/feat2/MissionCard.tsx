import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

import chevron from '../../images/feat2/chevron-forward-outline.png';

// 미션 내용 카드

const PopularMissionCardBox = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;

  height: 390px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PopularMissionRow1 = styled.div`
  //제목
  font-size: 18px;
  font-weight: 700;

  height: 18px;

  display: flex;
  gap: 5px;
`;
const PopularMissionRow2 = styled.div`
  //이미지
  display: flex;
  gap: 5px;

  margin-top: 15px;
`;
const PopularMissionRow3 = styled.div`
  //내용
  text-align: center;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;
`;
const PopularMissionRow4 = styled.div`
  //버튼
`;

const MissionSaveBtn = styled.button`
  width: 109px;
  height: 41px;

  background-color: var(--color-main-blue);
  border-radius: 5px;

  padding: 10px;

  font-weight: 600;
  font-size: 16px;
  color: var(--color-white);
`;

const NextMission = styled.button`
  background-color: var(--color-white);
`;

const PrevMission = styled.button`
  background-color: var(--color-white);
  transform: rotate(180deg);
`;

const MissionImg = styled.img`
  width: 313px;
  height: 160px;

  border: 1px solid rgba(164, 164, 164, 1);
  border-radius: 10px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const MissionTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const MissionContent = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: var(--color-gray-400);

  margin-top: 20px;
`;

//
//
//

import { authInstance } from '../../apis/axiosInstance';

//
//
//

interface MissionProps {
  props: {
    missionId: number;
    title: string;
    content: string;
    point: number;
    imageUrl: string;
    userCount: number;
  }[];
}

const PopularMissionCard = ({ props }: MissionProps) => {
  // 현재 표시할 미션 데이터
  const [nowMissionIndex, setNowMissionIndex] = useState(0);
  const nowShowMission = props[nowMissionIndex];

  const changeNextMission = () => {
    if (nowMissionIndex < props.length - 1) {
      setNowMissionIndex(nowMissionIndex + 1);
    }
  };

  const changePrevMission = () => {
    if (nowMissionIndex > 0) {
      setNowMissionIndex(nowMissionIndex - 1);
    }
  };

  const SavePopularMisson = async (MissionId: any) => {
    // const responseSaveMission = await axios.post(
    //   `http://13.124.213.122:3000/home/savePopularMission/${MissionId}`,
    //   {},
    //   {
    //     headers: {
    //       Authorization: `${TOKEN}`
    //     }
    //   }
    // );

    // const response = await authInstance.post(`http://13.124.213.122:3000/home`, requestData)
    const responseSaveMission = await authInstance.post(
      `http://13.124.213.122:3000/home/savePopularMission/${MissionId}`,
      {},
    );

    console.log(responseSaveMission);
  };

  return (
    <>
      <PopularMissionCardBox>
        <PopularMissionRow1>
          {/* <div>{nowShowMission.destination}</div> */}
        </PopularMissionRow1>

        <PopularMissionRow2>
          <PrevMission onClick={changePrevMission}>
            <Icon src={chevron} />
          </PrevMission>
          <MissionImg src={nowShowMission.imageUrl} />
          <NextMission onClick={changeNextMission}>
            <Icon src={chevron} />
          </NextMission>
        </PopularMissionRow2>

        <PopularMissionRow3>
          <MissionTitle>{nowShowMission.title}</MissionTitle>
          <MissionContent>{nowShowMission.content}</MissionContent>
        </PopularMissionRow3>

        <PopularMissionRow4>
          <MissionSaveBtn
            onClick={() => SavePopularMisson(nowShowMission.missionId)}
          >
            미션 저장
          </MissionSaveBtn>
        </PopularMissionRow4>
      </PopularMissionCardBox>
    </>
  );
};

export default PopularMissionCard;
