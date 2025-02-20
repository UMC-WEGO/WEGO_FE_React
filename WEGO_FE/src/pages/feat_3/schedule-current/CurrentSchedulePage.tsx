import React, { useState } from 'react';
import * as S from './CurrentSchedulePage.style';
import MissionBlueHeader from '../../../components/feat1/missionBlueHeader/MissionBlueHeader';
import InstanceBoard from '../../../components/feat3/InstanceBoard/InstanceBoard';
import SavedMission from '../../../components/feat3/saved-mission/SavedMission';
import MissionVerification from '../../../components/feat3/missionVerification/MissionVerification';
import RegisterMission from '../../../components/feat3/registerMission/RegisterMission';
import AlertModal from '../modal/AlertModal';
import SectionGrayLine from '../../../components/feat3/SectionGrayLine';

function CurrentSchedulePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.Container>
      <S.TopSection>
        <MissionBlueHeader onOpenModal={handleModalOpen} />
      </S.TopSection>
      <S.MainSection>
        <InstanceBoard />
        <SectionGrayLine />
        <SavedMission />
        <SectionGrayLine />
        <MissionVerification />
      </S.MainSection>
      <RegisterMission onOpenModal={handleModalOpen} />
      {isModalOpen ? <AlertModal onClose={handleCloseModal} /> : null}
    </S.Container>
  );
}

export default CurrentSchedulePage;
