import styled from "styled-components";

export const BackgroundOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.3);
z-index: 10;
`

export const CardBox = styled.div`
width: 270px;
border-radius: 5px;

background-color:rgb(38, 38, 38);
color: white;

display: flex;
flex-direction: column;
justify-content: center;  // 가로 중앙 정렬
align-items: center;      // 세로 중앙 정렬

position: absolute;
top: 50%;
will-change: transform;
z-index: 20; // 배경 위에 표시되도록
`

export const MessageBox = styled.div`
border: 1px solid white;
width: 100%;

padding: 19px 16px 19px 16px;
`

export const BtnBox = styled.button`
border: 1px solid white;
width: 50%;

padding: 11px;
`