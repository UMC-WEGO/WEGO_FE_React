import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 25px;
  /* background-color: #a3a3a3; // 테스트 용도 */
`;

const OutletContainer = styled.div`
  display: flex;
  max-width: var(--size-max-width);
  width: 100%;
  justify-content: center;
`;

export { AppContainer, OutletContainer };
