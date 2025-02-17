import styled from "styled-components";

import Start_img from "../../../images/feat2/WEGO_Start.png"
import Logo_img from "../../../images/feat2/WEGO_Logo_rev.png"

const Background = styled.p`
  background-color: var(--color-main-blue);

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  text-align: center;
`

const StartCircle = styled.img`
  margin: 15px;

  width: 101px;
  height: 97px;
`

const LogoImg = styled.img`
  width: 132px;
  height: 30px;
`

const StartContent = styled.div`
  font-size: 15px;
  color: white;
`

function StartPage () {
  return(
    <>
      <Background>
        <StartCircle src={Start_img}/>
        <LogoImg src={Logo_img}/>
        <StartContent>
          즉흥 여행의 시작, 위고!
        </StartContent>
      </Background>
    </>
  )
}

export default StartPage;