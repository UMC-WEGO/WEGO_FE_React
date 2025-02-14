///home/
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import axios, { AxiosResponse } from 'axios';
import { useLocation } from 'react-router';
import * as S from "./HomePage.style"
import styled from 'styled-components';

import WEGO_Logo from '../../../images/feat2/WEGO_Logo.jpg';

import PlanedCard from '../../../components/feat2/PlanedCard';
import PopularMissionCard from '../../../components/feat2/MissionCard';
import DestinationFilter from '../../../components/feat2/DestinationFilter/DestinationFilter';
import Navbar from '../../../components/navbar/Navbar'
import PostList from '../../../components/feat2/Post/PostList';
// import PostList from '../../../components/feat4/PostList';
import ModalMessage from '../../../components/feat2/Modal';

// 
// 
// 

import { TOKEN } from '../../../mocks/feat2/TOKEN_Temporary_file';
import StartPage from '../home-start/StartPage';
import { get } from 'react-hook-form';

// 
// 
// 

const NoPlanedTravel = styled.div`
  border: 1px solid rgba(165, 165, 165, 1);
  border-radius: 15px;
  margin-bottom: 9px;

  justify-content: center;
  align-items: center;

  height: 108px;

  display: flex;
`

const NoPopularPost = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;

  justify-content: center;
  align-items: center;
`

type UpcomingTravelType = {
  tripId : number;
  location: string;
  adult_participants: number;
  child_participants: number;
  vehicle: string;
  duration: string;
  departureDate: string;
  arrivalDate: string;
}

function HomePage() {
  const user_Id = useParams();     // 사용자 ID 받아오기
  const userId = user_Id && user_Id.userId ? user_Id.userId.replace(':', '') : ''; // ':'를 제거한 userId, undefined 체크
  
  // console.log(userId); // ':'가 제거된 userId 출력
  
  
  // console.log("사용자 ID : ", userId);

// --- --- --- 다가오는 여행 조회 --- --- ---
  const [upcomingTravelList, setUpcomingTravelList] = useState<UpcomingTravelType[]>([]);
  const [loadingTravel, setLoadingTravel] = useState(true);
  const [errorTravel, setErrorTravel] = useState<string | null>(null);
  const [upcomingTravelMessage, setUpcomingTravelMessage] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);
  // const [showModalMessage, setShowModalMessage] = useState(false);

  // const handleDelete = (flag: number) => {                         // flag: 해당 카드가 표시 될건지 안될건지
  //   const updatePlanList = upcomingTravelList.filter((_, index) => index !== flag);  // 해당 카드 삭제
  //   setUpcomingTravelList(updatePlanList);                                   // 상태 업데이트
  // }

  useEffect(() => {
    const getUpcomingTrip = async() => {
      try {
        const responseTravel: AxiosResponse<any> = await axios.get(`http://13.124.213.122:3000/home/upcoming-trips`, {
          headers: {
            Authorization: `${TOKEN}`,
            Accept: `application/json`
          }
        })
        setUpcomingTravelList(responseTravel.data.result);
        setUpcomingTravelMessage(responseTravel.data.message);
        setLoadingTravel(false);

        console.log("다가오는 여행 조회 결과 : ", responseTravel)

        if(responseTravel.data.message == "다가오는 여행이 없습니다."){
          // setShowModalMessage(true);
          // <ModalMessage message={responseTravel.data.message}/>
          setUpcomingTravelMessage(responseTravel.data.message);
          setIsShowModal(true);
        }
      } catch(error) {
        setErrorTravel('Error fetching data');
        setLoadingTravel(false);
      }
    }
    getUpcomingTrip();
  }, [])

  // console.log(upcomingTravelList, upcomingTravelMessage);
  
// --- --- --- 다가오는 일정 삭제 --- --- ---
  const deleteUpcomingTravel = async(tripId: number) => {
    try {
      const responseDeleteTravel = await axios.delete(`http://13.124.213.122:3000/home/upcoming-trips/${tripId}`,{
        headers: {
          Authorization: `${TOKEN}`,
          Accept: `application/json`,
          'Content-Type': 'application/json',
        }
      })

      // console.log("삭제 성공 여부 : ", responseDeleteTravel);

      setUpcomingTravelList((prevPlanList) => prevPlanList.filter((plan) => plan.tripId !== tripId))
    } catch (error) {
      // console.log(error);
    }
  }

  // --- --- --- 인기 게시물 조회 --- --- ---
  const [popularPostList, setPopularPostList] = useState([]);
  const [loadingPost, setLoadingPost] = useState(true);
  const [errorPost, setErrorPost] = useState<string | null>(null);

  useEffect(() => {
    const getPopularPost = async() => {
      try {
        const responseGet = await axios.get(`http://13.124.213.122:3000/community/popular-posts`, {
          headers: {
            Authorization: `${TOKEN}`,
            Accept: `application/josn`
          }
        })
        setPopularPostList(responseGet.data);
        setLoadingPost(false);

        console.log("인기 게시물 조회 결과 : ", responseGet);
      }  catch(error) {
        setErrorPost('Error on importing posts')
      }
    }
      
    getPopularPost();
  }, [])

  // --- --- --- 인기 미션 조회 --- --- ---
  const [popularMissionList, setPopularMissionList] = useState([]);

  useEffect(() => {
    const getPopularMission = async() => {
      const responseMission = await axios.get(`http://13.124.213.122:3000/home/popular-missions`, {
        headers: {
          Authorization: `${TOKEN}`,
          Accept: `application/josn`
        }
      })
      setPopularMissionList(responseMission.data.result.missions)
      console.log("인기 미션 조회 결과 : ",responseMission)
    }    
    getPopularMission();
  }, [])

  // --- --- --- 일정 선택 페이지에서 메시지 받아오기
  const location = useLocation();
  const fixedTravelResponse = location.state?.fixedTravelResponse;  // 전달된 응답 메시지 가져오기
  const [isShowSaveModal, setIsShowSaveModal] = useState<boolean>(false);

  // useEffect(() => {
  //   if (fixedTravelResponse) {
  //     setIsShowModal(true);  // 응답 메시지가 있으면 모달을 띄움
  //   }
  // }, [fixedTravelResponse]);

  // 필터 값
  const [numAdult, setNumAdult] = useState(0);              // 성인 인원수
  const [numChild, setNumChild] = useState(0);              // 아동 인원수
  const [transport, setTransport] = useState("이동 수단");  // 이동 수단
  const [timeAway, setTimeAway] = useState("시간대")        // 이동 시간
  const [departureLocation, setDepartureLocation] = useState("출발지 선택");   // 출발 지역
  const [departureDate, setDepartureDate] = useState(new Date());              // 출발 날짜
  const [arrivalDate, setArrivalDate] = useState(new Date());                  // 도착 날짜짜

  // 선택한 조건 여행선택페이지로 전송하기 위한 함수
  const navigate = useNavigate();

  // 수정사항이 발생할 경우 추천 여행지 조회
  const [randomBtnStatus, setRandomBtnStatus] = useState(false)    // '랜덤 돌리기' 버튼 활성화 상태
  const [randomLocation, setRandomLocation] = useState([]);

  // 요청에 맞게 데이터 적절히 변형
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

  useEffect(() => {
    const getRandomLocation = async() => {
      // console.log("API 호출됨")
      const response = await axios.post('http://13.124.213.122:3000/home',
        {
          departure,
          participants,
          vehicle,
          duration,
          departureDate,
          arrivalDate
        },
        {
          headers: {
            Authorization: `${TOKEN}`,
            Accept: `application/json`,
            'Content-Type': 'application/json',
          }
        }
      );

      console.log("여행지 조회 결과 : ", response)
    }

    if((numAdult + numChild !=0) && transport != "이동 수단" && departureLocation != "출발지 선택" && (departureDate && arrivalDate) != new Date()){
      getRandomLocation()
    }
  },[timeAway])

  return(
    <>
      {loadingTravel && loadingPost ? (
        <StartPage/>
      ):(
      <S.AppContainer>
        <S.ScrollArea>
          {/* 로고 영역 */}
          <S.LogoContainer><img src={WEGO_Logo}/></S.LogoContainer>

          {/* <button onClick={() => deleteUpcomingTravel(7)}>
            // 정상 작동 확인 완료 
            임시 삭제 버튼
          </button> */}

          <S.SelectorContainer>
            <DestinationFilter 
              // 필터에 들어가는 값값
              userId={String(userId)}
              departureDate={departureDate}
              arrivalDate={arrivalDate}
              numAdult={numAdult}
              numChild={numChild}
              transport={transport}
              timeAway={timeAway}
              departureLocation={departureLocation}

              // 필터 값 관리리
              setDepartureDate={setDepartureDate}
              setArrivalDate={setArrivalDate}
              setNumAdult={setNumAdult}
              setNumChild={setNumChild}
              setTransport={setTransport}
              setTimeAway={setTimeAway}
              setDepartureLocation={setDepartureLocation}
              // location={location}
            />
          </S.SelectorContainer>
            <S.RandomBtnContainer>
            <S.RandomBtn 
              onClick={() => { 
                navigate(`/home/travel-select/:${userId}`, {
                  state: {
                    departureDate,
                    arrivalDate,
                    numAdult,
                    numChild,
                    transport,
                    timeAway,
                    departureLocation
                  }
                })
              }}
            >랜덤 돌리기
          </S.RandomBtn>
          </S.RandomBtnContainer>

          <S.PlanedContainer>          
            <S.ContainerTitle>다가오는 여행</S.ContainerTitle>
            {/* 일정 출력 */}
            {upcomingTravelList.length > 0 ? (
              upcomingTravelList.map((plan) => (
                <PlanedCard key={plan.tripId} props={plan} onClickDelete={deleteUpcomingTravel}/>
              ))
            ):(
              <NoPlanedTravel> 저장된 일정이 없습니다. </NoPlanedTravel>
            )}  
            
            {/* {upcomingTravelList.map((plan, flag) => (
              <PlanedCard key={flag} props={plan} onClickDelete={() => handleDelete(flag)}/>
            ))} */}
          </S.PlanedContainer>

          <S.PopularPostContainer>
            {/* 인기 개시물 헤더더 */}
            <S.ContainerTitle>
              <div>인기 게시물</div>
              <S.MoreBtn onClick={() => {navigate('/board')}}>더보기 {">"}</S.MoreBtn>
            </S.ContainerTitle>

            {/* 개시물 나열 */}
            <S.PopularPostArea>
              {/* <PostList
                posts={popularPostList}
              /> */}
              {popularPostList.length > 0 ? (
                <PostList posts={popularPostList} showRanking={true}/>
              ) : (
                <NoPopularPost>인기 게시물이 없습니다.</NoPopularPost>
              )}
              {/* <PostList posts={popularPostList} showRanking={false}/> */}
            </S.PopularPostArea>
          </S.PopularPostContainer>

          <S.PopularMissionContainer>
            <S.ContainerTitle>인기 미션</S.ContainerTitle>
            {popularMissionList.length > 0 ? (
              <PopularMissionCard props={popularMissionList} />  // API에서 받은 미션 데이터를 props로 전달
            ) : (
              <S.NoMission>인기 미션이 없습니다.</S.NoMission>
            )}
          </S.PopularMissionContainer>
        </S.ScrollArea>

        {isShowModal && (
            <ModalMessage message={fixedTravelResponse} onClose={() => setIsShowModal(false)} />
          )}
        <S.NavbarArea>
          <Navbar/>
        </S.NavbarArea>
      </S.AppContainer>
      )}
    </>
  )
}

export default HomePage;
