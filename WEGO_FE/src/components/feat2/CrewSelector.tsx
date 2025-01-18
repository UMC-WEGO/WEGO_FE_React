import { useState } from "react";
import styled from "styled-components";
import ToggleBtn from "./ToggleBtn";

const ContentBox = styled.div`
  border: 1px solid mediumpurple;

  display: flex;
  flex-direction: column;

  height: 120px;

  margin-left: 40px;
  margin-right: 40px;
  margin-top: 93px;
`

const CrewRow = styled.div`
  flex: 1;

  width: 100%;

  display: flex;
  justify-content: space-between;
`

const CrewSelector = () => {
  // 인원수 상태 관리
  const [numAdult, setNumAdult] = useState(0)
  const [numChild, setNumChild] = useState(0)
  
  // 인원수 증감
  const UpAdult = () => { setNumAdult(numAdult + 1); }
  const DownAdult = () => { setNumAdult(numAdult - 1); }
  const UpChild = () => { setNumChild(numChild + 1); }
  const DownChild = () => { setNumChild(numChild - 1); }

  // 인원수 감소 버튼 활성화 상태 (음수 방지)
  const [isActiveAdult, setIsActiveAdult] = useState(false);
  const [isActiveChild, setIsActiveChild] = useState(false);

  return (
    <ContentBox>
      <CrewRow>
        <span>성인</span>
        <span>
            <button onClick={ DownAdult }> - </button>
            {numAdult}
            <button onClick={ UpAdult }> + </button>
        </span>
      </CrewRow>
      <CrewRow>
        <span>아동</span>
        <span>
            <button onClick={ DownChild }> - </button>
            {numChild}
            <button onClick={ UpChild }> + </button>
        </span>
      </CrewRow>
    </ContentBox>
  )
}

export default CrewSelector;