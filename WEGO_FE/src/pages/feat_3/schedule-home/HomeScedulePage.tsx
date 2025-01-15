import React from 'react';
import * as S from './HomeScedulePage.styled';
import Navbar from '../../../components/navbar/Navbar';
import TravelScheduleBox from '../../../components/feat3/travelScheduleBox/TravelScheduleBox';

const HomeScedulePage = () => {
  return (
    <S.Container>
      <S.ExportIconWrap>
        <img src="/src/images/feat3/ExportIcon.svg" alt="추출하기 아이콘" />
      </S.ExportIconWrap>
      <S.TitleWrap>
        <S.TitleText isTitle={true}>예정된 여행</S.TitleText>
      </S.TitleWrap>
      <TravelScheduleBox
        title="충주 여행"
        dday="d-5"
        tags={['2024.11.26~11.27', '7명', '자가용']}
      />
      <TravelScheduleBox
        title="경주 여행"
        dday="dday"
        tags={['2024.11.21~11.22', '2명', '버스']}
      />
      <S.LastTravelContainer>
        <S.LastTravelInnerBox>
          <S.TitleText isTitle={false}>지난 여행</S.TitleText>
          <img src="/src/images/feat3/LeftArrow.svg" alt="왼쪽화살표" />
        </S.LastTravelInnerBox>
      </S.LastTravelContainer>

      {/* <Navbar /> */}
    </S.Container>
  );
};

export default HomeScedulePage;
