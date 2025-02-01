import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// 애니메이션 정의
const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  90% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  padding: 20px;

  background-color: #262626F2;
  color: white;
  animation: ${slideUp} 2s ease-in-out forwards;

  display: flex;
  justify-content: center;  // 가로 중앙 정렬
  align-items: center;      // 세로 중앙 정렬
`;

const ModalMessage = ({ message, onClose }: { message: string, onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // 2초 후 모달 닫기
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <ModalContainer>{message}</ModalContainer>;
};

export default ModalMessage;
