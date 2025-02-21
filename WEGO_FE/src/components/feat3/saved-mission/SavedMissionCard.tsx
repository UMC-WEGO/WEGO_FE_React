import React from 'react';
import styled from 'styled-components';
import { useVerifyMissionStore } from '../../../store/schedule/useVerifyMissionStore';

const MissionImageWrap = styled.div`
  width: 100%;
  height: 117px;
  position: relative; /* 자식 요소의 절대 위치 설정을 위해 relative 설정 */
`;

const MissionItem = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  margin-bottom: 4px;
`;

const IconWrapper = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const MissionTitle = styled.div`
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
  line-height: 13px;
  text-align: center;
  color: black;
`;
const MissionCardContainer = styled.div`
  width: 155px;
  height: 142px;
  display: flex;
  flex-direction: row;
  gap: 13px;
`;
const MissionItemBox = styled.div`
  width: 155px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const SavedMissionCard = ({ mission }) => {
  const { data, setData } = useVerifyMissionStore();

  return (
    <MissionCardContainer
      onClick={() => setData({ verifyMissionId: mission.missionId })}
    >
      <MissionItemBox>
        <MissionImageWrap>
          <MissionItem src="/src/images/feat3/image_9.png" alt="미션사진" />
          <IconWrapper src="/src/images/feat3/X.svg" />
        </MissionImageWrap>
        <MissionTitle>{mission.missionId}</MissionTitle>
      </MissionItemBox>
    </MissionCardContainer>
  );
};

export default SavedMissionCard;
