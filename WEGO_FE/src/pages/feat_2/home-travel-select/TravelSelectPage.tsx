//home/travel-select/
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";
import axios from "axios";
import * as S from "./TravelSelectPage.style"

import Loading from "../home-travel-select-random/TravelSelectRandomPage";

import back_arrow_img from "../../../images/feat2/Back_Arrow.png"
import share_img from "../../../images/feat2/share_icon.png"
import PostCard from "../../../components/feat2/Post/PostCard";
import PlaningCard from "../../../components/feat2/PlaningCard";
import DestinationBtn from "../../../components/feat2/DestinationBtn";
import PostList from "../../../components/feat2/Post/PostList";

// 
// 
//

import { TOKEN } from "../../../mocks/feat2/TOKEN_Temporary_file";

//
// 
//

// 임시데이터 가져오기
// import { recommended_destinations } from "../../../mocks/feat2/TestData_DestinationBtn";
import { PopularPostData } from "../../../mocks/feat2/TestData_PopularPost";
import { AxiosRequestConfig, AxiosResponse } from "axios";

function TravelSelectPage() {
  // 홈에서 정보 가져오기기
  const location = useLocation();
  const { departureDate, arrivalDate, numAdult, numChild, transport, timeAway, departureLocation } = location.state || {};

  // RIGHT POST SAMPLE
  // "departure": "서울 강북",
  // "participants": 1,
  // "vehicle": "자가용",
  // "duration": "1",
  // "startDate": "2024-12-31T15:00:00Z",
  // "endDate": "2025-01-01T15:00:00Z"

  // POST DATA
  // departure :  서울 강북
  // participants :  1
  // vehicle :  자가용  
  // duration :  1  
  // startDate :  2024-12-31T15:00:00.000Z  
  // endDate :  2025-01-01T15:00:00.000Z

  // export const Item_time = [
  //   { label: "1시간 이내", icon: clock_icon },
  //   { label: "1시간 ~ 2시간", icon: clock_icon },
  //   { label: "2시간 ~ 3시간", icon: clock_icon },
  //   { label: "3시간 이상", icon: clock_icon }
  // ];

  // 적절하게 값 변환
  const departure: string = departureLocation;
  const participants: number = numAdult + numChild;
  const vehicle: string = transport;
  let duration: string = '1';
  if(timeAway == '1시간 이내'){
    duration = '1';
  } else if (timeAway == '1시간 ~ 2시간') {
    duration = '1-2';
  } else if (timeAway == '2시간 ~ 3시간') {
    duration = '2-3';
  } else if (timeAway == '3시간 이상') {
    duration = '3+';
  }

  const startDate: string = departureDate.toISOString().replace('.000', '');
  const endDate: string = arrivalDate.toISOString().replace('.000', '');;

  console.log(
    "POST값 확인하기",
    " / departure : ",departure,
    " / participants : ", participants,
    " / vehicle : ", vehicle,
    " / duration : ", duration,
    " / startDate : ", startDate,
    " / endDate : ", endDate,
  )

  // POST값 확인하기  / 
  // departure :  서울 강북  / 
  // participants :  1  / 
  // vehicle :  자동차  / 
  // duration :  1  / 
  // startDate :  Wed Jan 01 2025 00:00:00 GMT+0900 (한국 표준시)  / 
  // endDate :  Thu Jan 02 2025 00:00:00 GMT+0900 (한국 표준시)


  // --- --- --- 즉흥 게시물 조회 --- --- ---
  const [instantPost, setInstantPost] = useState([]);

  useEffect(() => {
    const getInstantPost = async() => {
      try {
        const responsePost = await axios.get(`http://13.124.213.122:3000/home/popular-missions`, {
          headers: {
            Authorization: `${TOKEN}`,
            Accept: `application/josn`
          }
        })
        setInstantPost(responsePost.data.result);
      } catch(error) {
        console.log(error)
      }
    }
    getInstantPost();
  },[])

  // --- --- --- 랜덤 여행지 조회 --- --- ---
  const [recommendedDestinations, setRecommendedDestinations] = useState([]);
  // const [destinationCriterias, setDestinationCriterias] = useState([
  //   departure,
  //   participants,
  //   vehicle,
  //   duration,
  //   startDate,
  //   endDate
  // ]);
  const [loadingDestination, setLoadingDestination] = useState(true);
  const [errorDestination, setErrorDestination] = useState<string | null>(null);

  // POST to server
  useEffect(() => {
    const postCriterias = async () => {
      try {
        const res = await axios.post('http://13.124.213.122:3000/home',
          {  
            // departure: "서울 강북",
            // participants: 1,
            // vehicle: "자가용",
            // duration: "1",
            // startDate: "2025-01-06T12:00:00Z",
            // endDate: "2025-01-08T12:00:00Z"

            departure,
            participants,
            vehicle,
            duration,
            startDate,
            endDate
          },
          {
            headers: {
              Authorization: `${TOKEN}`,
              Accept: `application/json`,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('Post Success', res.data.result);
        setRecommendedDestinations(res.data.result);
      } catch (err) {
        console.log('Error on Post (criterias)!', err);
      }
    };
    postCriterias();
  }, []);

  // 로딩 페이지 상태 관리
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [fixedDeparture, setFixedDeparture] = useState("");

  // 로딩화면 관리 - 임시로 2초간 보여주고 넘김
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  },[]);
  
  return(
    <>
    {loading ? (
      <Loading/>
    ) : (
      <S.AppContainer>
        <S.ScrollArea>    
          <S.ToolBarContainer>
            <Link to='/home'>
              <img src={back_arrow_img}/>
            </Link>
            <img src={share_img}/>
          </S.ToolBarContainer>
          
          <S.PlanContainer>
            <PlaningCard 
              departureDate={startDate}
              arrivalDate={endDate}
              departureLocation={departure}
              transport={vehicle}
            />
          </S.PlanContainer>

          <S.DestinationContainer>
            {/* 3개만 출력 */}
            {recommendedDestinations.slice(0,3).map((destinationData, index) => (
              <DestinationBtn 
                key={index}
                props={destinationData}                // 버튼에 들어갈 데이터
                isSelected={selectedIndex === index}
                onClick={() => {setSelectedIndex(index); setFixedDeparture(recommendedDestinations[index])}}
              />
            ))}
          </S.DestinationContainer>

          <S.PostContainer>
            <S.Title>
              <div>즉흥 게시판</div>
              <S.Seemore>더보기 {">"}</S.Seemore>
            </S.Title>
            <S.PostArea>
              <PostList posts={PopularPostData} showRanking={false}/>
            </S.PostArea>
          </S.PostContainer>

          <S.SubmitBtnContainer>
            <S.SelectionComplete
              // 선택된 버튼의 인덱스가 없거나 범위에 있지 않으면 제출 버튼 비활성화
              isDestinationSelected={selectedIndex !== null && 
              (0 <= selectedIndex && selectedIndex < 3)}
            >
              여기로 갈래요
            </S.SelectionComplete>
          </S.SubmitBtnContainer>
        </S.ScrollArea>
      </S.AppContainer>
    )}
      
    </>
  )
}

export default TravelSelectPage;
