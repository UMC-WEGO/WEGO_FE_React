import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const TopSection = styled.section`
  width: 100%;
  height: 29%; // 852 % 247 = 0.2899
  background-color: var(--color-main-blue);
`;
const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  overflow-y: auto;
`;

export { Container, TopSection, MainSection };
