import React, { useEffect, useState } from 'react';
import * as S from './HomeScedulePage.styled';
import Navbar from '../../../components/navbar/Navbar';
import TravelScheduleBox from '../../../components/feat3/travelScheduleBox/TravelScheduleBox';
import HeaderBatteryBar from '../../../components/feat3/HeaderBatteryBar';
import { getTripSchedulesApi } from '../../../apis/feat3/schedulesApis';
import { useTokenStore } from '../../../store/token/useTokenStore';
import { location } from '../../../mocks/feat2/TestData_Filter';

const HomeScedulePage = () => {
  const [mySchedules, setMySchedules] = useState([]);
  const { data } = useTokenStore();

  const getMySchedules = async () => {
    console.log(data);
    const apiRes = await getTripSchedulesApi(data.userId);
    setMySchedules(apiRes.data);
  };

  useEffect(() => {
    getMySchedules();
  }, []);

  return (
    <S.Container>
      <S.Content>
        <S.ExportIconWrap>
          <img src="/src/images/feat3/ExportIcon.svg" alt="추출하기 아이콘" />
        </S.ExportIconWrap>
        <S.TitleWrap>
          <S.TitleText isTitle={true}>예정된 여행</S.TitleText>
        </S.TitleWrap>

        {mySchedules &&
          mySchedules.map(item => (
            <TravelScheduleBox
              title={item.location}
              dday={`D+${Math.floor(
                (new Date().getTime() - new Date(item.startDate).getTime()) /
                  (1000 * 60 * 60 * 24),
              )}`}
              tags={[
                `${item.startDate.split('T')[0]} ~ ${item.endDate.split('T')[0].split('-').slice(1).join('-')}`,
                `${item.adult_participants + item.child_participants}명`,
                `${item.vehicle}`,
              ]}
              tripId={item.id}
            />
          ))}
        <S.LastTravelContainer>
          <S.LastTravelInnerBox>
            <S.TitleText isTitle={false}>지난 여행</S.TitleText>
            <img src="/src/images/feat3/RightArrow.svg" alt="왼쪽화살표" />
          </S.LastTravelInnerBox>
        </S.LastTravelContainer>
      </S.Content>
      <Navbar />
    </S.Container>
  );
};

export default HomeScedulePage;
