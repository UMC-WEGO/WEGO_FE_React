//home/travel-select/
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
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
import ModalMessage from "../../../components/feat2/Modal";

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
  const uselocation = useLocation();
  const { departureDate, arrivalDate, numAdult, numChild, transport, timeAway, departureLocation } = uselocation.state || {};

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

  const startDate: string = departureDate.toISOString().split('T')[0];   // 'T'를 기준으로 나눠서 앞쪽(날짜 부분)을 저장
  const endDate: string = arrivalDate.toISOString().split('T')[0];

  // console.log("출발 : ",startDate);

  // --- --- --- 즉흥 게시물 조회 --- --- ---
  const [instantPost, setInstantPost] = useState([]);
  const [loadingInstantPost, setLoadingInstantPost] = useState(true);
  const [errorInstantPost, setErrorInstantPost] = useState<string | null>(null);

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
        setLoadingInstantPost(false);
      } catch(error) {
        console.log(error)
      }
    }
    getInstantPost();
  },[])

  // --- --- --- 랜덤 여행지 조회 --- --- ---
  const [recommendedDestinations, setRecommendedDestinations] = useState([]);
  const [loadingDestination, setLoadingDestination] = useState(true);
  const [errorDestination, setErrorDestination] = useState<string | null>(null);

  // POST to server
  useEffect(() => {
    const postCriterias = async () => {
      try {
        const res = await axios.post('http://13.124.213.122:3000/home',
          {  
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
        setLoadingDestination(false);
        setRecommendedDestinations(res.data.result);
      } catch (err) {
        console.log('Error on Post (criterias)!', err);
      }
    };
    postCriterias();
  }, []);

  // --- --- --- 여행 일정 등록 --- --- ---
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [locationData, setLocationData] = useState({location: "", region: "", growthRate: ""});
  const [fixedTravelResponse, setFixedTravelResponse] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);

  // 데이터 적절히 변환
  const { location, region, growthRate } = locationData;
  const adult_participants = numAdult;
  const child_participants = numChild;
  // const location = departure;

  const navigate = useNavigate();

  // POST TO SERVER
    const postTravel = async() => {
      try {
        const res = await axios.post(`http://13.124.213.122:3000/home/save-trip`, {
          // "location": "서울 경부",
          // "adult_participants": 1,
          // "child_participants": 1,
          // "vehicle": "자가용",
          // "duration": "1",
          // "startDate": "2025-02-04",
          // "endDate": "2025-02-06"

          // 고양
          // 1 
          // 자가용 
          // 1 
          // 2025-01-29T16:57:16.274Z 
          // 2025-01-29T16:57:16.274Z

          location,
          participants,
          vehicle,
          duration,
          startDate,
          endDate
        },{
          headers: {
            Authorization: `${TOKEN}`,
            Accept: `application/json`,
            'Content-Type': 'application/json',
          },
        });
        console.log("선택된 여행지 확인", res);
        console.log(res.data.message);
        
    
        // 서버 응답 메시지를 저장
        setFixedTravelResponse(res.data.message);
        
        navigate('/home', {
          state: {
            fixedTravelResponse: res.data.message,  // 전달할 응답 메시지
          }
        });
      } catch (err) {
        console.log("Error on Post (travel)!", err);
      }
    };

    console.log("일정 등록 POST : ", 
      location,
      adult_participants,
      child_participants,
      vehicle,
      duration,
      startDate,
      endDate
    )

  // 로딩 페이지 상태 관리
  const [loading, setLoading] = useState(true);
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
                onClick={() => {setSelectedIndex(index); setLocationData(recommendedDestinations[index])}}
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
            {isShowModal && <ModalMessage message={fixedTravelResponse} onClose={() => setIsShowModal(false)} />}
            <S.SelectionComplete
              // 선택된 버튼의 인덱스가 없거나 범위에 있지 않으면 제출 버튼 비활성화
              isDestinationSelected={selectedIndex !== null && 
              (0 <= selectedIndex && selectedIndex < 3)}
              // onClick={postTravel}
              onClick={() => postTravel()}
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
