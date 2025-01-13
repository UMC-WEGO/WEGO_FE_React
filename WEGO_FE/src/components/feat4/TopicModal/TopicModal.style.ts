import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 420px;
  height: 768px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;

  width: 360px;
  height: 240px;

  h2 {
    font-size: 18px;
    margin: 10px 0;
  }

  p {
    font-size: 13px;
    color: #a5a5a5;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const TopicButton = styled.button`
  width: 140px;
  padding: 10px 0;
  border: 1px solid transparent;
  border-radius: 20px;
  background: #f6f6f6;
  color: #696969;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 15px;

  &:hover {
    border-color: #0059ff;
    color: #0059ff;
    background-color: #e5eeff;
  }
`;
