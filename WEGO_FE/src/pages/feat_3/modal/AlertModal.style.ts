import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000009c;
  /* opacity: 0.8; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Container = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  width: 273px;
  height: 168px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f2f2f2;
`;

const TextBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #c7c7c7;
`;

const AcceptButton = styled.button`
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #c7c7c7;
  color: red;
`;

const RejectButton = styled.button`
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: blue;
`;

export { Background, Container, TextBox, AcceptButton, RejectButton };
