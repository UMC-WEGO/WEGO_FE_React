import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.bgColor || '#26262633'};

  //background: #26262633;
  //rgba(0, 89, 255, 0.1);
  color: ${props => props.color || 'blue'};
  //var(--color-main-blue);
  width: fit-content;
  font-size: 12px;
  height: 25px;
  padding: 4px 9px 4px 9px;
  border-radius: 8px;
`;

export { Container };
