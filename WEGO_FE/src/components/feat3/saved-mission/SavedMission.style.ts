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
  padding: 0px 16px;
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
  color: #a5a5a5;
  gap: 5px;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 143px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0px;
`;

const Line = styled.div`
  width: 420px;
  height: 1px;
  background-color: #eaeaea;
  border: none;
`;

export { Container, TitleBoxWrap, Title, MoreInfor, ContentBox, Line };
