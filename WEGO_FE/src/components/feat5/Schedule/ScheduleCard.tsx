import * as S from './ScheduleCard.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import X from '../../../images/feat5/X.svg';
import scheduleDeleteBtn from '../../../images/feat5/scheduleDeleteBtn.svg';

interface Mission {
  id: number;
  name: string;
  imageUrl: string;
  mission_write: string;
}

interface Schedule {
  id: number;
  title: string;
  dateRange: string;
  people: number;
  tag: string;
  points: string;
  isMissionCompleted: boolean;
  missions?: Mission[];
}

function ScheduleCard({
  schedule,
  onMissionComplete,
  onDelete,
}: {
  schedule: Schedule;
  onMissionComplete: (scheduleId: number) => void;
  onDelete: (scheduleId: number) => void;
}) {
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState<boolean>(
    schedule.isMissionCompleted,
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedMissionWrite, setSelectedMissionWrite] = useState<
    string | null
  >(null);
  const [selectedMissionName, setSelectedMissionName] = useState<string | null>(
    null,
  );
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleCompleteMission = () => {
    setIsModalVisible(true);
  };

  const handleConfirmMission = () => {
    setIsCompleted(true);
    onMissionComplete(schedule.id);
    setIsModalVisible(false);
    navigate(`/schedule/${schedule.id}/missions/status`);
  };

  const handleCompletion = () => {
    setIsCompleted(true);
    onMissionComplete(schedule.id);
    setIsModalVisible(false);
  };

  const handleCancelCompletion = () => {
    setIsModalVisible(false);
  };

  const handleImageClick = (
    imageUrl: string,
    missionName: string,
    missionWrite: string,
  ) => {
    setSelectedImage(imageUrl);
    setSelectedMissionWrite(missionWrite);
    setSelectedMissionName(missionName);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedMissionWrite(null);
    setSelectedMissionName(null);
  };

  const handleDelete = () => {
    onDelete(schedule.id);
  };

  // height
  return (
    <S.Card style={{ height: isCompleted ? 'auto' : '436px' }}>
      <S.HeaderContainer>
        <S.TitleContainer>
          <S.Title>{schedule.title}</S.Title>
          <S.DeleteButton onClick={handleDelete}>
            <img src={scheduleDeleteBtn} alt="삭제" />
          </S.DeleteButton>
        </S.TitleContainer>
        <S.TagContainer>
          <S.Tag>{schedule.dateRange}</S.Tag>
          <S.Tag>{schedule.people}명</S.Tag>
          <S.Tag>{schedule.tag}</S.Tag>
        </S.TagContainer>
      </S.HeaderContainer>

      <S.MissionContainer>
        <S.MissionTextContainer>
          <S.PointsContainer>
            <S.CertifiedMissionText>인증된 미션</S.CertifiedMissionText>
            <S.Points>{schedule.points}</S.Points>
          </S.PointsContainer>
          <S.NextText>지난 여행에서 수행한 미션들이에요.</S.NextText>
        </S.MissionTextContainer>

        <S.MissionSection>
          <S.MissionImages>
            {schedule.missions?.map(mission => (
              <S.MissionItem
                key={mission.id}
                onClick={() =>
                  handleImageClick(
                    mission.imageUrl,
                    mission.name,
                    mission.mission_write,
                  )
                }
              >
                <img src={mission.imageUrl} alt={mission.name} />
                <S.MissionName>{mission.name}</S.MissionName>
              </S.MissionItem>
            ))}
          </S.MissionImages>
        </S.MissionSection>

        <S.ButtonContainer>
          {!isCompleted && (
            <>
              <S.CompleteButton onClick={handleCompleteMission}>
                완료
              </S.CompleteButton>
              <S.ContinueButton onClick={handleConfirmMission}>
                인증 계속하기
              </S.ContinueButton>
            </>
          )}
        </S.ButtonContainer>

        {isModalVisible && (
          <S.PointModal>
            <S.MContent>
              <S.TextContainer>
                <p>이번 여행의 미션을</p>
                <p>모두 마치시겠습니까?</p>
              </S.TextContainer>
              <S.DButtonContainer>
                <button className="cancel-btn" onClick={handleCancelCompletion}>
                  취소
                </button>
                <button className="confirm-btn" onClick={handleCompletion}>
                  완료
                </button>
              </S.DButtonContainer>
            </S.MContent>
          </S.PointModal>
        )}

        {selectedImage && selectedMissionName && selectedMissionWrite && (
          <S.PointModal>
            <S.ModalContent>
              <S.CloseButton onClick={handleCloseModal}>
                <img src={X} />
              </S.CloseButton>
              <img src={selectedImage} />
              <h1>{selectedMissionWrite}</h1>
              <h2>{selectedMissionName}</h2>
            </S.ModalContent>
          </S.PointModal>
        )}
      </S.MissionContainer>
    </S.Card>
  );
}

export default ScheduleCard;
