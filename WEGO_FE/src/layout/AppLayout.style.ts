import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* background-color: #a3a3a3; // 테스트 용도 */
  border-radius: 25px;
  border: 1px solid rgba(163, 163, 163, 0.5);
  max-height: var(--size-max-height);
`;

const OutletContainer = styled.div`
  display: flex;
  max-width: var(--size-max-width);
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export { AppContainer, OutletContainer };
