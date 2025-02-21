import React, { useEffect } from 'react';
import * as S from './HomeScedulePage.styled';
import Navbar from '../../../components/navbar/Navbar';
import TravelScheduleBox from '../../../components/feat3/travelScheduleBox/TravelScheduleBox';
import { getPastTripSchedulesApi } from '../../../apis/feat3/schedulesApis';
import { useTokenStore } from '../../../store/token/useTokenStore';

const HomeScedulePage = () => {
  const { data } = useTokenStore();

  const getMyPrevSchedules = async () => {
    console.log(data);
    const apiRes = await getPastTripSchedulesApi(data.userId);
    console.log(apiRes);
  };

  useEffect(() => {
    getMyPrevSchedules();
  }, []);

  return (
    <S.Container>
      <S.ExportIconWrap>
        <img src="/src/images/feat3/ExportIcon.svg" alt="추출하기 아이콘" />
      </S.ExportIconWrap>
      <S.TitleWrap>
        <S.TitleText isTitle={true}>예정된 여행</S.TitleText>
      </S.TitleWrap>

      {[{}, {}].map(item => (
        <TravelScheduleBox
          title={item.title}
          dday={Math.floor(
            (new Date(item.travel_time).getTime() - new Date().getTime()) /
              (1000 * 60 * 60 * 24),
          )}
          tags={['2024.11.26~11.27', `${item.people}명`, `${item.vehicle}`]}
          tripId={item.id}
        />
      ))}
      {/* <TravelScheduleBox
        title="충주 여행"
        dday="d-5"
        tags={['2024.11.26~11.27', '7명', '자가용']}
      />
      <TravelScheduleBox
        title="경주 여행"
        dday="dday"
        tags={['2024.11.21~11.22', '2명', '버스']}
      /> */}
      <S.LastTravelContainer>
        <S.LastTravelInnerBox>
          <S.TitleText isTitle={false}>지난 여행</S.TitleText>
          <img src="/src/images/feat3/RightArrow.svg" alt="왼쪽화살표" />
        </S.LastTravelInnerBox>
      </S.LastTravelContainer>

      {/* <Navbar /> */}
    </S.Container>
  );
};

export default HomeScedulePage;
