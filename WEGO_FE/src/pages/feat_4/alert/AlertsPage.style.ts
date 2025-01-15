import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 59px;
  overflow-y: auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  font-size: 24px;
  padding: 0 25px;
  border-bottom: 1px solid #a5a5a5;
  position: relative;

  h3 {
    font-size: 20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
  }

  span {
    display: flex;
    cursor: pointer;
  }
`;

export const AlertList = styled.div`
  margin-top: 10px;
`;
