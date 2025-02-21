import React, { useState } from 'react';
import * as S from './MissionBlueHeader.style';
import TravelScheduleBox from '../../feat3/travelScheduleBox/TravelScheduleBox';
import TravelTitleBox from '../../feat3/travelTitleBox/TravelTitleBox';
import AlertModal from '../../../pages/feat_3/modal/AlertModal';

import { useNavigate } from 'react-router';
import { useScheduleStore } from '../../../store/schedule/useScheduleStore';


function MissionBlueHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  const handleBackPage = () => {
    navigate(-1);
  };

  const { data } = useScheduleStore();


  return (
    <S.Container>
      <S.Header>
        <img
          src="/src/images/feat3/LeftArrow_white.svg"
          alt="왼쪽화살표"
          onClick={handleBackPage}
        />
        {isModalOpen ? <AlertModal onClose={handleCloseModal} /> : null}
        <img src="/src/images/feat3/ExportIcon_white.svg" alt="내보내기" />
      </S.Header>
      <S.TitleBoxWrap>
        <TravelTitleBox
          title={data.location}
          dday={`D-${Math.abs(
            Math.floor(
              (new Date(data.startDate).getTime() - new Date().getTime()) /
                (1000 * 60 * 60 * 24),
            ),
          )}`}
          tags={[
            `${data.startDate.split('T')[0]} ~ ${data.endDate.split('T')[0].split('-').slice(1).join('-')}`,
            `${data.adult_participants + data.child_participants}명`,
            `${data.vehicle}`,
          ]}
        />
      </S.TitleBoxWrap>
      <S.message>안내메세지 혹은 간단한 인사말</S.message>
    </S.Container>
  );
}

export default MissionBlueHeader;
