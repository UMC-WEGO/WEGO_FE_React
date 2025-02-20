//home/travel-select/random
import styled from "styled-components";
import { Link } from "react-router";
import { FadeLoader } from "react-spinners";
import * as S from "./TravelSelectRandomPage.style"
import { useParams } from "react-router";

import back_arrow_img from "../../../images/feat2/Back_Arrow.png"



function TravelSelectRandomPage() {
  return (
    <S.LoadingBox>
      <S.LoadingHeader>
        <Link to={`/home`}>
          <img src={back_arrow_img}/>
        </Link>  
      </S.LoadingHeader>
      <S.LoadingContent> <span style={{color : "rgba(0, 89, 255, 1)"}}>랜덤 여행지</span>를 <br/> 고르는 중이에요... </S.LoadingContent>
      <S.LoadingSpinnerBox>
        <FadeLoader/>
        <div>잠시만 기다려주세요<br/>열심히 고르는 중입니다</div>
      </S.LoadingSpinnerBox>      
    </S.LoadingBox>
  )
}

export default TravelSelectRandomPage;
