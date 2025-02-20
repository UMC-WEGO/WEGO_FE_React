import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 24px 20px;
  gap: 10px;
`;

const TitleBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 16px;
  gap: 10px;
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

const MoreInfor = styled.a`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  font-size: 12px;
  color: #a5a5a5;
  gap: 5px;
`;

const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;
  gap: 18px;
`;

const MissionTitle = styled.p`
  width: fit-content;
  height: fit-content;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
`;

const MissionImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const MissionDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const MissionDescription = styled.p`
  width: fit-content;
  height: fit-content;
  font-size: 18px;
  font-weight: 800;
  text-align: center;
`;

const MissionDescriptionComent = styled.p`
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  color: #8a8a8a;
`;

const MissionSaveButton = styled.button`
  width: 363px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
`;

export {
  Container,
  TitleBoxWrap,
  Title,
  MoreInfor,
  MissionContainer,
  MissionTitle,
  MissionImageWrap,
  MissionDescriptionBox,
  MissionDescription,
  MissionDescriptionComent,
  MissionSaveButton,
};
