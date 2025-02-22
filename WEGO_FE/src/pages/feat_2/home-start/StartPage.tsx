import * as S from './StartPage.Style'

import Start_img from "../../../images/feat2/WEGO_Start.png"
import Logo_img from "../../../images/feat2/WEGO_Logo_rev.png"

function StartPage () {
  return(
    <>
      <S.Background>
        <S.StartCircle src={Start_img}/>
        <S.LogoImg src={Logo_img}/>
        <S.StartContent>
          즉흥 여행의 시작, 위고!
        </S.StartContent>
      </S.Background>
    </>
  )
}

export default StartPage;