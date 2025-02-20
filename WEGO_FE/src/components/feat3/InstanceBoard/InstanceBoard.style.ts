import styled from 'styled-components';
import GlobalStyle from '../../../styles/GlobalStyles';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 131px;
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
const MoreInfor = styled(Link)`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  color: #a5a5a5;
  gap: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export { Container, TitleBoxWrap, Title, MoreInfor };
