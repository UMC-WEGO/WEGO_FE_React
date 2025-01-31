import * as S from "../home-travel-select-random/TravelSelectRandomPage.style";
import { Link } from "react-router-dom";
import back_arrow_img from "../../../images/feat2/Back_Arrow.png"

function HomeErrorPage() {
    return (
      <S.LoadingBox>
        <S.LoadingHeader>
          <Link to='/home'>
            <img src={back_arrow_img}/>
          </Link>  
        </S.LoadingHeader>
        <S.LoadingContent> <span style={{color : "rgba(0, 89, 255, 1)"}}>랜덤 여행지</span>를 <br/> 고르는 중이에요... </S.LoadingContent>
        <S.LoadingSpinnerBox>
          <div>뭔가 이상합니다<br/>열심히 고치는 중입니다.</div>
        </S.LoadingSpinnerBox>      
      </S.LoadingBox>
    )
  }
  

export default HomeErrorPage;