//home/travel-select/
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router";
import axios from "axios";
import * as S from "./TravelSelectPage.style"
import styled from "styled-components";
import { useParams } from "react-router";

import Loading from "../home-travel-select-random/TravelSelectRandomPage";

import back_arrow_img from "../../../images/feat2/Back_Arrow.png"
import share_img from "../../../images/feat2/share_icon.png"
import PostCard from "../../../components/feat2/Post/PostCard";
import PlaningCard from "../../../components/feat2/PlaningCard";
import DestinationBtn from "../../../components/feat2/DestinationBtn";
import PostList from "../../../components/feat2/Post/PostList";
// import PostList from "../../../components/feat4/PostList";
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
import SaveAlertCard from "../../../components/feat2/Alerts/SaveAlert";
import NoteAlertCard from "../../../components/feat2/Alerts/NoteAlertCard";

const NoPopularPost = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;

  justify-content: center;
  align-items: center;
`

function TravelSelectPage() {
  // 홈에서 정보 가져오기기
  const uselocation = useLocation();
  const { randomDestinations, departureDate, arrivalDate, numAdult, numChild, transport, timeAway, departureLocation } = uselocation.state || {};
  console.log("홈에서 받아온 랜덤 여행지 : ",randomDestinations);

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
  const [instantPostList, setInstantPostList] = useState([]);
  const [loadingInstantPost, setLoadingInstantPost] = useState(true);
  const [errorInstantPost, setErrorInstantPost] = useState<string | null>(null);

  useEffect(() => {
    const getInstantPost = async() => {
      const responseGet = await axios.get(`http://13.124.213.122:3000/community/popular-posts`, {
        headers: {
          Authorization: `${TOKEN}`,
          Accept: `application/josn`
        }
      })
      
      // 카테고리가 "즉흥 자랑"인 게시물만 저장
      const filteredPosts = responseGet.data.filter((post: { category_name: string }) => post.category_name === "즉흥 자랑");

      setInstantPostList(filteredPosts);
      setLoadingInstantPost(false);

      console.log("필터링 게시물 결과", filteredPosts);
    }
    getInstantPost();
  }, [])

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
          location,
          adult_participants,
          child_participants,
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
        console.log(res);
        
    
        // 서버 응답 메시지를 저장
        setFixedTravelResponse(res.data.message);
        
        navigate(`/home`, {
          state: {
            fixedTravelResponse: res.data.message,  // 전달할 응답 메시지
          }
        });
      } catch (err) {
        // console.log("Error on Post (travel)!", err);
      }
    };

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000)
    }, [])

    // 여기로 갈래요 버튼 눌렀을 때 알림창
    const [isShowMessage, setIsShowMessage] = useState(false);
    const downMessage = () => {
      setIsShowMessage(false)
    }

    const [isShowNoteMessage, setIsShowNoteMessage] = useState(false);
    const downNoteMessage = () => {
      setIsShowNoteMessage(false)
    }

  return(
    <>
    {isLoading ? (              // 추천 여행지 로딩 중일 때 로딩페이지 출력
      <Loading/>
    ) : (
      <S.AppContainer>
        <S.ScrollArea>    
          <S.ToolBarContainer>
            <Link to={`/home`}>
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
            {/* 추천 여행지 나열 */}
            {randomDestinations.map((destinationData: any, index: any) => (
              <DestinationBtn 
                key={index}
                props={destinationData}                // 버튼에 들어갈 데이터
                isSelected={selectedIndex === index}
                onClick={() => {setSelectedIndex(index); setLocationData(randomDestinations[index])}}
              />
            ))}
          </S.DestinationContainer>

          <S.PostContainer>
            <S.Title>
              <div>즉흥 게시판</div>
              <S.Seemore onClick={() => {navigate('/board')}}>더보기 {">"}</S.Seemore>
            </S.Title>
            <S.PostArea>
              {/* <PostList
                posts={instantPostList}
              /> */}

              {instantPostList.length > 0 ? (
                <PostList posts={instantPostList} limit={2} showRanking={false}/>
              ) : (
                <NoPopularPost>즉흥 게시물이 없습니다.</NoPopularPost>
              )}

              {/* <PostList posts={PopularPostData} showRanking={false} limit={2}/> */}
            </S.PostArea>
          </S.PostContainer>

          {isShowMessage && (
            <SaveAlertCard message="여행지를 확정하시겠습니까?" downMessage={downMessage} SavePlan={() => postTravel()}/>
          )}
          {isShowNoteMessage && (
            <NoteAlertCard message="여행지를 선택해 주세요" downMessage={downNoteMessage}/>
          )}
          <S.SubmitBtnContainer>
            {isShowModal && <ModalMessage message={fixedTravelResponse} onClose={() => setIsShowModal(false)} />}
            <S.SelectionComplete
              // 선택된 버튼의 인덱스가 없거나 범위에 있지 않으면 제출 버튼 비활성화
              isDestinationSelected={selectedIndex !== null && (0 <= selectedIndex && selectedIndex < 3)}
              // disabled={!(selectedIndex !== null && (0 <= selectedIndex && selectedIndex < 3))}
              // onClick={() => postTravel()}
              onClick={() => {
                if(selectedIndex !== null){
                  setIsShowMessage(true)
                }
                else{
                  setIsShowNoteMessage(true)
                }
              }}
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
