import { useState } from "react";
import styled from "styled-components";

const MainContent = styled.div`
  margin: 10px;

  font-size: 10px;
  font-weight: 500;
  color: rgba(105, 105, 105, 1)
`

interface ToolTipProps {
  content: string;
  tip: string;
}

const ToolTip = ({content, tip}: ToolTipProps) => {
  const [flagTip, setFlagTip] = useState(false)

  return(
    <>
      <MainContent
        onMouseEnter={() => setFlagTip(true)}
        onMouseLeave={() => setFlagTip(false)}
      >
        {content}
        {flagTip && <div>{tip}</div>}
      </MainContent>
    </>
  )
}

export default ToolTip;