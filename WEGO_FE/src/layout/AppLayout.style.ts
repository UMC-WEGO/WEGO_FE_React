import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const OutletContainer = styled.div`
  display: flex;
  max-width: var(--size-max-width);
  width: 100%;
  justify-content: center;
`;

export { AppContainer, OutletContainer };
