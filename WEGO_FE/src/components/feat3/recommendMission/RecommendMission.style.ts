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

const MissionBox = styled.div``;

export { Container, TitleBoxWrap, Title, MoreInfor, MissionBox };
