import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 24px 20px;
`;

const TitleBoxWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.p`
  width: fit-content;
  height: fit-content;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
`;

const MoreInfor = styled.p`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  color: #a5a5a5;
  gap: 5px;
`;

const ContentBox_mission = styled.div`
  width: 380px;
  height: 143px;
  display: flex;
  gap: 10px;
  margin: 20px 0px;
  overflow-x: auto; /* 가로 스크롤 가능하도록 설정 */
  scrollbar-width: thin;
`;

const ContentBox_noMission = styled.div`
  width: 100%;
  height: 143px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const VerifyMissionButton = styled.button`
  width: 345px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 16px;
`;

export {
  Container,
  TitleBoxWrap,
  Title,
  MoreInfor,
  ContentBox_noMission,
  ContentBox_mission,
  VerifyMissionButton,
  ButtonWrap,
};
