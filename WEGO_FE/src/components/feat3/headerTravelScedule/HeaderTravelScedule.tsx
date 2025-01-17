import React from 'react';
import * as S from './HeaderTravelScedule.styled';
import TravelScheduleBox from '../travelScheduleBox/TravelScheduleBox';
import TravelTitleBox from '../travelTitleBox/TravelTitleBox';
import HeaderBatteryBar from '../HeaderBatteryBar';

const HeaderTravelScedule = () => {
  return (
    <S.Container>
      <HeaderBatteryBar />
      <S.Header>
        <img src="/src/images/feat3/LeftArrow_white.svg" alt="왼쪽화살표" />
        <img src="/src/images/feat3/ExportIcon_white.svg" alt="내보내기" />
      </S.Header>
      <S.TitleBoxWrap>
        <TravelTitleBox
          title="충주 여행"
          dday="D-5"
          tags={['2024.11.26~11.27', '7명', '자가용']}
        />
      </S.TitleBoxWrap>
      <S.message>안내메세지 혹은 간단한 인사말</S.message>
    </S.Container>
  );
};

export default HeaderTravelScedule;
