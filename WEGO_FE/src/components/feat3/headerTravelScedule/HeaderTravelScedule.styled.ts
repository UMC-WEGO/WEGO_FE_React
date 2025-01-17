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
  width: 418px;
  height: 0px;
  border-top: 1px solid #26262633;
  padding: 10px 10px 10px 40px;
  position: absolute;
  bottom: 13px;
  font-size: 13px;
  color: white;
`;

export { Container, Header, TitleBoxWrap, message };
