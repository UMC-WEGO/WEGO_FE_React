///home/
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import { authInstance } from '../../../apis/axiosInstance';

import * as S from './HomePage.style';
import logoImg from '../../../images/feat1/logo.svg';
import PlanedCard from '../../../components/feat2/PlanedCard';
import PopularMissionCard from '../../../components/feat2/MissionCard';
import DestinationFilter from '../../../components/feat2/DestinationFilter/DestinationFilter';
import Navbar from '../../../components/navbar/Navbar';
import PostList from '../../../components/feat4/PostList';
import ModalMessage from '../../../components/feat2/Modal';
import StartPage from '../home-start/StartPage';

type UpcomingTravelType = {
  tripId: number;
  location: string;
  adult_participants: number;
  child_participants: number;
  vehicle: string;
  duration: string;
  departureDate: string;
  arrivalDate: string;
};

function HomePage() {
  // 여행 저장 완료 메시지
  const [isShowModal, setIsShowModal] = useState(false);

  // --- --- --- 다가오는 여행 조회 --- --- ---
  const [upcomingTravelList, setUpcomingTravelList] = useState<UpcomingTravelType[]>([]);
  const [loadingUpComingTravel, setLoadingUpComingTravel] = useState(true);
  const [errorTravel, setErrorTravel] = useState(false);
  const [upcomingTravelMessage, setUpcomingTravelMessage] = useState('');

  useEffect(() => {
    const getUpcomingTrip = async () => {
      try {
        const responseTravel = await authInstance.get(
          `http://13.124.213.122:3000/home/upcoming-trips`,
        );
        console.log('다가오는 여행 조회 결과 : ', responseTravel);

        setUpcomingTravelList(responseTravel.data.result);
        setUpcomingTravelMessage(responseTravel.data.message);
        setLoadingUpComingTravel(false);

      } catch (error) {
        console.log('오류 : 다가오는 여행 결과')

        setErrorTravel(true);
        setLoadingUpComingTravel(false);
      }
    };
    getUpcomingTrip();
  }, []);

  // --- --- --- 다가오는 여행 삭제 --- --- ---
  const [loadingDeleteTravel, setLoadingDeleteTravel] = useState(true);
  const [errorDeleteTravel, setErrorDeleteTravel] = useState(false)

  const deleteUpcomingTravel = async (tripId: number) => {
    try {
      const responseDeleteTravel = await authInstance.get(
        `http://13.124.213.122:3000/home/upcoming-trips/${tripId}`,
      );

      console.log("삭제 성공 여부 : ", responseDeleteTravel);
      setLoadingDeleteTravel(false);

      // 홈화면 리스트에서 여행 삭제
      setUpcomingTravelList(prevPlanList =>
        prevPlanList.filter(plan => plan.tripId !== tripId),
      );
    } catch (error) {
      console.log('오류 : 다가오는 여행 삭제');
      setErrorDeleteTravel(true);
    }
  };

  // --- --- --- 인기 게시물 조회 --- --- ---
  const [popularPostList, setPopularPostList] = useState([]);
  const [loadingPost, setLoadingPost] = useState(true);
  const [errorPost, setErrorPost] = useState(false);

  useEffect(() => {
    const getPopularPost = async () => {
      try {
        const responseGet = await authInstance.get(
          `http://13.124.213.122:3000/community/popular-posts`,
        );

        setPopularPostList(responseGet.data);
        setLoadingPost(false);

        console.log('인기 게시물 조회 결과 : ', responseGet);
      } catch (error) {
        console.log('오류 : 인기 게시물 조회');
        setErrorPost(true);
      }
    };

    getPopularPost();
  }, []);

  // --- --- --- 인기 미션 조회 --- --- ---
  const [popularMissionList, setPopularMissionList] = useState([]);

  useEffect(() => {
    const getPopularMission = async () => {
      try {
        const responseMission = await authInstance.get(
          `http://13.124.213.122:3000/home/popular-missions`,
        );

        setPopularMissionList(responseMission.data.result.missions);
        console.log('인기 미션 조회 결과 : ', responseMission);
      } catch (error) {
        console.log('Error On 인기 미션 조회');
      }
    };
    getPopularMission();
  }, []);

  // --- --- --- 추천 여행지 받아오기 --- --- ---
  const location = useLocation();
  const fixedTravelResponse = location.state?.fixedTravelResponse; // 전달된 응답 메시지 가져오기
  // 필터 값
  const [numAdult, setNumAdult] = useState(0); // 성인 인원수
  const [numChild, setNumChild] = useState(0); // 아동 인원수
  const [transport, setTransport] = useState('이동 수단'); // 이동 수단
  const [timeAway, setTimeAway] = useState('시간대'); // 이동 시간
  const [departureLocation, setDepartureLocation] = useState('출발지 선택'); // 출발 지역
  const [departureDate, setDepartureDate] = useState(new Date()); // 출발 날짜
  const [arrivalDate, setArrivalDate] = useState(new Date()); // 도착 날짜짜

  // 선택한 조건 여행선택페이지로 전송하기 위한 함수
  const navigate = useNavigate();

  // 수정사항이 발생할 경우 추천 여행지 조회
  const [randomBtnStatus, setRandomBtnStatus] = useState(false); // '랜덤 돌리기' 버튼 활성화 상태
  const [randomDestinations, setRandomDestination] = useState([]);

  // 요청에 맞게 데이터 적절히 변형
  const departure: string = departureLocation;
  const participants: number = numAdult + numChild;
  const vehicle: string = transport;
  let duration: string = '1';
  if (timeAway == '1시간 이내') {
    duration = '1';
  } else if (timeAway == '1시간 ~ 2시간') {
    duration = '1-2';
  } else if (timeAway == '2시간 ~ 3시간') {
    duration = '2-3';
  } else if (timeAway == '3시간 이상') {
    duration = '3+';
  }

  useEffect(() => {
    const getRandomDestinations = async () => {
      try {
        const requestData = {
          departure,
          participants,
          vehicle,
          duration,
          departureDate,
          arrivalDate,
        };

        const response = await authInstance.post(
          `http://13.124.213.122:3000/home`,
          requestData,
        );

        setRandomDestination(response.data.result);
        console.log('여행지 조회 결과 : ', response);

        if (response.status == 200) {
          setRandomBtnStatus(true);
        } else {
          setRandomBtnStatus(false);
        }
      } catch (error) {
        setRandomBtnStatus(false);
        console.log(' --- --- --- Error On 랜덤 여행지 추천 POST');
      }
    };

    if (
      numAdult + numChild != 0 &&
      transport != '이동 수단' &&
      (departureDate && arrivalDate) != new Date() &&
      (timeAway != '시간대' || departureLocation != '출발지 선택')
    ) {
      getRandomDestinations();
    }

    console.log('버튼 활성 상태 : ', randomBtnStatus);
  }, [timeAway, departureLocation]);

  const [isShowMessage, setIsShowMessage] = useState(false);
  const downMessage = () => {
    setIsShowMessage(false);
  };

  return (
    <>
      {(loadingUpComingTravel && loadingPost) ? (
        <StartPage />
      ) : (
        <S.AppContainer>
          <S.ScrollArea>
            {/* 로고 영역 */}
            <S.LogoContainer>
              <img src={logoImg} />
            </S.LogoContainer>

            <S.SelectorContainer>
              <DestinationFilter
                // 필터에 들어가는 값값
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
                isActivated={randomBtnStatus}
                disabled={!randomBtnStatus}
                onClick={() => {
                  navigate(`/home/travel-select`, {
                    state: {
                      randomDestinations,
                      departureDate,
                      arrivalDate,
                      numAdult,
                      numChild,
                      transport,
                      timeAway,
                      departureLocation,
                    },
                  });
                }}
              >
                랜덤 돌리기
              </S.RandomBtn>
            </S.RandomBtnContainer>

            <S.PlanedContainer>
              <S.ContainerTitle>다가오는 여행</S.ContainerTitle>
              {/* 일정 출력 */}
              {upcomingTravelList.length > 0 ? (
                upcomingTravelList.map(plan => (
                  <PlanedCard
                    key={plan.tripId}
                    props={plan}
                    onClickDelete={deleteUpcomingTravel}
                  />
                ))
              ) : (
                <S.NoPlanedTravel> 저장된 일정이 없습니다. </S.NoPlanedTravel>
              )}
            </S.PlanedContainer>

            <S.PopularPostContainer>
              {/* 인기 개시물 헤더 */}
              <S.ContainerTitle>
                <div>인기 게시물</div>
                <S.MoreBtn
                  onClick={() => {
                    navigate('/board');
                  }}
                >
                  더보기 {'>'}
                </S.MoreBtn>
              </S.ContainerTitle>

              {/* 개시물 나열 */}
              <S.PopularPostArea>
                {popularPostList.length > 0 ? (
                  <PostList
                    posts={popularPostList.slice(0, 3)}
                    showRank={true}
                  />
                ) : (
                  <S.NoPopularPost>인기 게시물이 없습니다.</S.NoPopularPost>
                )}
              </S.PopularPostArea>
            </S.PopularPostContainer>

            <S.PopularMissionContainer>
              <S.ContainerTitle>인기 미션</S.ContainerTitle>
              {popularMissionList.length > 0 ? (
                <PopularMissionCard props={popularMissionList} /> // API에서 받은 미션 데이터를 props로 전달
              ) : (
                <S.NoMission>인기 미션이 없습니다.</S.NoMission>
              )}
            </S.PopularMissionContainer>
          </S.ScrollArea>

          {isShowModal && (
            <ModalMessage
              message={fixedTravelResponse}
              onClose={() => setIsShowModal(false)}
            />
          )}
          <S.NavbarArea>
            <Navbar />
          </S.NavbarArea>
        </S.AppContainer>
      )}
    </>
  );
}

export default HomePage;
