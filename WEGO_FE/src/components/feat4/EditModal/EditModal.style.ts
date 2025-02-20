import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 420px;
  height: 768px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  display: flex;
  align-items: flex-end;
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
  border-radius: 10px 10px 0 0;
  text-align: center;

  width: 100%;
  max-width: 420px;
  height: 200px;
  transform: translateX(-50%) translateY(100%);
  animation: slideUp 0.2s ease-out forwards;

  h2 {
    font-size: 18px;
    margin: 20px 0 10px;
  }

  p {
    font-size: 13px;
    color: #a5a5a5;
  }

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopicButton = styled.button`
  width: 50px;
  margin: 7px 10px;
  padding: 10px 0;
  color: #000;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    border-color: #0059ff;
    color: #0059ff;
    background-color: #e5eeff;
  }
`;
