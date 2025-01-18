//home/travel-select/random
import styled from "styled-components";
import { Link } from "react-router";
import { FadeLoader, RotateLoader } from "react-spinners";

import back_arrow_img from "../../../images/feat2/Back_Arrow.png"

const LoadingBox = styled.div`
  width: 100%;
  margin-top: 42px;
`

const LoadingHeader = styled.div`
  width: 100%;
  height: 21px;

  margin-left: 30px;
  margin-right: 30px;
`

const LoadingContent = styled.div`
  height: 72px;
  width: 100%;

  margin: 30px;

  font-size: 25px;
  font-weight: 700;
`

const LoadingSpinnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  margin: 132px;

  font-size: 14px;
  font-weight: 600;
`

function TravelSelectRandomPage() {
  return (
    <LoadingBox>
      <LoadingHeader>
        <Link to='/home'>
          <img src={back_arrow_img}/>
        </Link>  
      </LoadingHeader>
      <LoadingContent> 랜덤 여행지를 <br/> 고르는 중이에요... </LoadingContent>
      <LoadingSpinnerBox>
        <FadeLoader/>
        <div>잠시만 기다려주세요<br/>열심히 고르는 중입니다</div>
      </LoadingSpinnerBox>
      <Link to='/home/travel-select/'>임시 이동 버튼</Link>
      
    </LoadingBox>
  )
}

export default TravelSelectRandomPage;
