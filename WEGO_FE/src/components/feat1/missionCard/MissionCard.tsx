import React from 'react';
import styled from 'styled-components';
import missionTestImg from '../../../images/feat1/mission_test.png';

const MissionCardLayout = styled.div`
  width: 370px;
  height: 120px;
  display: flex;
  gap: 15px;
`;

const MissionImg = styled.img`
  width: 40%;
  height: 100%;
  border-radius: 10px;
`;
const MissionRightBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const MissionRightTop = styled.div`
  font-size: 13px;
  span {
    color: var(--color-main-blue);
    font-weight: 550;
  }
`;
const MissionRightMid = styled.div`
  font-size: 13px;
  p {
    font-size: 15px;
    font-family: Pretendard-semiBold;
    margin-bottom: 10px;
  }
`;
const MissionRightBot = styled.div`
  font-size: 13px;
  color: var(--color-gray-400);
`;

function MissionCard() {
  //테스트용
  const imgSrc = missionTestImg;
  const pointText = '100원';
  const missionName = '골목길 미션';
  const missionDescription = '예쁜 골목길 보이면 사진 찍기';
  const registerDate = '2024.11.28 등록';

  return (
    <MissionCardLayout>
      <MissionImg src={imgSrc}></MissionImg>
      <MissionRightBox>
        <MissionRightTop>
          적립금 <span>{pointText}</span>
        </MissionRightTop>
        <MissionRightMid>
          <p>{missionName}</p>
          {missionDescription}
        </MissionRightMid>
        <MissionRightBot>{registerDate}</MissionRightBot>
      </MissionRightBox>
    </MissionCardLayout>
  );
}

export default MissionCard;
