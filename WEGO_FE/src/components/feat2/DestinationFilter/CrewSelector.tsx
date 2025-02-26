import { useState } from "react";
import styled from "styled-components";

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;

  height: 120px;
  gap: 10px;

  margin-left: 40px;
  margin-right: 40px;
  margin-top: 93px;
`

const CrewRow = styled.div`
  flex: 1;

  width: 100%;

  display: flex;
  place-items: center;
  justify-content: space-between;
`

const AlterNumBtn = styled.button`
  border: 1px solid rgba(151, 166, 194, 1);
  border-radius: 20px;

  width: 40px;
  height: 40px;
  
  background-color: rgba(223, 236, 255, 1);
  color: rgba(65, 128, 245, 1);

  // 비활성 상태   
  &:disabled {
    border: 1px solid rgba(230, 230, 245, 1);
    background-color: white;
  }
`

interface CrewSelectorProps {
  numAdult: number;
  setNumAdult: any;
  numChild: number;
  setNumChild: any;
}

const CrewSelector = ({ numAdult, setNumAdult, numChild, setNumChild }: CrewSelectorProps) => {
  // 인원수 증감
  const UpAdult = () => { setNumAdult(numAdult + 1); }
  const DownAdult = () => { setNumAdult(numAdult - 1);   }
  const UpChild = () => { setNumChild(numChild + 1);   }
  const DownChild = () => { setNumChild(numChild - 1);  }

  // 인원수 감소 버튼 활성화 상태 (음수 방지)
  return (
    <ContentBox>
      <CrewRow>
        <span style={{fontSize: "20px", fontWeight: "600"}}>성인</span>
        <span>
            <AlterNumBtn onClick={ DownAdult } disabled={numAdult <= 0}> - </AlterNumBtn>
            <span style={{margin: "13px"}}>{numAdult}</span>
            <AlterNumBtn onClick={ UpAdult }> + </AlterNumBtn>
        </span>
      </CrewRow>
      <CrewRow>
        <span>
            <div style={{fontSize: "20px", fontWeight: "600"}}>아동</div>
            <div style={{fontSize: "10px", fontWeight: "500", color: "rgba(138, 138, 138, 1)"}}>총 아동 {"("}만 0세 ~ 17세{")"} 수</div>
        </span>
        <span>
            <AlterNumBtn onClick={ DownChild } disabled={numChild <= 0}> - </AlterNumBtn>
            <span style={{margin: "13px"}}>{numChild}</span>
            <AlterNumBtn onClick={ UpChild }> + </AlterNumBtn>
        </span>
      </CrewRow>
    </ContentBox>
  )
}

export default CrewSelector;