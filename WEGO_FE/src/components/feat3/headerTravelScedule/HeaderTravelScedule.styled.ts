import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 247px;
  display: flex;
  flex-direction: column;
  background-color: #0059ff;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
`;

const TitleBoxWrap = styled.div`
  display: flex;
  width: 212px;
  height: fit-content;
  margin: 30px;
  gap: 18px;
`;

const message = styled.div`
  width: 420px;
  height: 36px;
  line-height: 13px;
  border-top: 1px solid #26262633;
  margin-top: 10px;
  padding: 10px 30px;
  font-size: 13px;
  color: white;
`;

export { Container, Header, TitleBoxWrap, message };
