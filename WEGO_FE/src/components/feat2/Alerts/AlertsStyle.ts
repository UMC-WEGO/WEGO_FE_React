import styled from 'styled-components';

export const BackgroundOverlay = styled.div`
  position: fixed;
  width: 420px;
  height: 90%;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  z-index: 10;
`;

export const CardBox = styled.div`
  width: 270px;
  border: 1px solid #eee;
  border-radius: 5px;

  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center; // 가로 중앙 정렬
  align-items: center; // 세로 중앙 정렬

  position: absolute;
  top: 50%;
  left: 15%;
  will-change: transform;
  z-index: 20; // 배경 위에 표시되도록
`;

export const MessageBox = styled.div`
  border-bottom: 1px solid #eee;
  width: 100%;

  font-weight: 500px;
  font-size: 16px;
  text-align: center;

  padding: 19px 16px 19px 16px;
`;

export const BtnBox = styled.button`
  border: 1px solid #eee;
  width: 134px;

  padding: 11px;
`;

export const OneBtnBox = styled.button`
  border: 1px solid gray;
  width: 274px;

  padding: 11px;
`;

export const YesText = styled.div`
  color: rgba(10, 122, 255, 1);
  font-weight: 500px;
  font-size: 17px;
`;

export const NoText = styled.div`
  color: Black;
  font-weight: 500px;
  font-size: 17px;
`;
