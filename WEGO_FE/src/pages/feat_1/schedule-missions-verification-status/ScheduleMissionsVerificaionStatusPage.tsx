import React from 'react';
import * as S from './ScheduleMissionsVerificaionStatusPage.style';
import BackArrow from '../../../components/feat1/backArrow/BackArrow';
import Navbar from '../../../components/navbar/Navbar';
import HeaderTravelScedule from '../../../components/feat3/headerTravelScedule/HeaderTravelScedule';
import MissionCard from '../../../components/feat1/missionCard/MissionCard';
import MissionBlueHeader from '../../../components/feat1/missionBlueHeader/MissionBlueHeader';
import mockMissions from '../../../mocks/feat1/mission/mockMissions';

function ScheduleMissionsVerificaionStatusPage() {
  return (
    <S.ScheduleMisstionsNextPageLayout>
      <S.ViewContainer>
        {/* <BackArrow /> */}
        <S.TopSection>
          {/* <HeaderTravelScedule /> 재영이거 */}
          <MissionBlueHeader />
        </S.TopSection>
        <S.MainSection>
          <S.MainTextBoxTop>미션을 인증 중이에요.</S.MainTextBoxTop>
          <S.MainTextBoxSub>
            적립 가능한 포인트<span>800원</span>
          </S.MainTextBoxSub>
          <S.MainMissionsBoxWrapper>
            <S.MainMissionsBox>
              {mockMissions.map((mission, idx) => (
                <MissionCard key={idx} mission={mission} isClear={true} />
              ))}
            </S.MainMissionsBox>
          </S.MainMissionsBoxWrapper>
        </S.MainSection>
        <Navbar />
      </S.ViewContainer>
    </S.ScheduleMisstionsNextPageLayout>
  );
}

export default ScheduleMissionsVerificaionStatusPage;
