import styled from "styled-components";
import { useState } from "react";
// 여행지를 선택하는 버튼
// 여행지 선택 화면에서 추천된 선택지 버튼

const DestinationBtnBox = styled.button<{ selectedFlag: boolean }>`
  width: 115px;
  height: 119px;
  border: 1px solid gray;
  border-radius: 13px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: ${(props) => (props.selectedFlag ? "rgba(0, 89, 255, 0.1)" : "white")};

  padding-top:10px;
  padding-bottom: 10px;

  align-items: center;
  justify-content: center;
`
const DestinationLocation = styled.div<{ selectedFlag: boolean, textLenth: number }>`
  // width: 49px;
  height: 21px;

  color: ${(props) => (props.selectedFlag ? "black" : "rgba(165, 165, 165, 1)")};

  font-size: ${(props) => (props.textLenth > 4 ? "12px" : "14px")};
`
const DestinationCity = styled.div<{ textLenth: number }>`
  // width: 49px;
  height: 32px;

  font-size: ${(props) => (props.textLenth > 2 ? "26px" : "28px")};
  font-weight: 600;
`
const DestinationTime = styled.div<{ selectedFlag: boolean }>`
  width: 87px;
  height: 28px;

  font-size: 14px;
  display: flex;
  justify-content: center; 
  align-items: center;  

  border-radius: 16px;

  background-color: ${(props) => (props.selectedFlag ? "rgba(0, 89, 255, 1)" : "rgba(217, 217, 217, 1)")};
  color: white;
`

type DestinationBtnType = {
  location: string;
  region: string;
  growthRate: string;
};

interface DestinationBtnProps {
  props: DestinationBtnType;
  isSelected: boolean;
  onClick: () => void;
}

const DestinationBtn = ({props, isSelected, onClick}: DestinationBtnProps) => {
  return(
      <>
        <DestinationBtnBox selectedFlag={isSelected} onClick={onClick}>
          <DestinationLocation selectedFlag={isSelected} textLenth={props.region.length}>{props.region}</DestinationLocation>
          <DestinationCity textLenth={props.location.length}>{props.location}</DestinationCity>
          <DestinationTime selectedFlag={isSelected}>{props.growthRate}%</DestinationTime>
        </DestinationBtnBox>
      </>
    )
}

export default DestinationBtn;