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
  points: number;
}

interface Schedule {
  id: number;
  title: string;
  dateRange: string;
  people: number;
  tag: string;
  points: number;
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
  const [isInReview, setIsInReview] = useState(false);
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
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  // 여행 포인트 (각 미션의 포인트 합)
  const totalPoints =
    schedule.missions?.reduce((total, mission) => total + mission.points, 0) ||
    0;

  schedule.points = totalPoints;

  const handleDeleteClick = () => {
    setIsDeleteModalVisible(true);
  };

  // 여행 삭제 모달
  const handleConfirmDelete = () => {
    setIsDeleteModalVisible(false);
    handleDelete();
  };

  const handleCancelDelete = () => {
    setIsDeleteModalVisible(false);
  };

  const handleDelete = () => {
    onDelete(schedule.id);
  };

  // 상세 보기
  const handleImageClick = (
    imageUrl: string,
    missionName: string,
    missionWrite: string,
  ) => {
    setSelectedImage(imageUrl);
    setSelectedMissionWrite(missionWrite);
    setSelectedMissionName(missionName);
  };

  // 버튼
  const handleCompleteMission = () => {
    setIsModalVisible(true);
  };

  const handleConfirmMission = () => {
    setIsCompleted(true);
    onMissionComplete(schedule.id);
    setIsModalVisible(false);
    navigate(`/schedule/${schedule.id}/missions/status`); // 한 여행의 미션 인증 페이지로
  };

  // 여행 완료 모달
  const handleCompletion = () => {
    setIsInReview(true);
    setIsModalVisible(false);
    onMissionComplete(schedule.id);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedMissionWrite(null);
    setSelectedMissionName(null);
  };

  // height
  return (
    <S.Card
      style={{
        height:
          schedule.missions && schedule.missions.length > 0
            ? isCompleted || isInReview
              ? 'auto'
              : '442px'
            : isInReview // 인증 요청된 미션이 하나도 없는 경우
              ? '150px'
              : '220px',
      }}
    >
      <S.HeaderContainer>
        <S.TitleContainer>
          <S.Title>{schedule.title}</S.Title>
          <S.DeleteButton onClick={handleDeleteClick}>
            <img src={scheduleDeleteBtn} alt="삭제" />
          </S.DeleteButton>
        </S.TitleContainer>
        <S.TagContainer>
          <S.Tag>{schedule.dateRange}</S.Tag>
          <S.Tag>{schedule.people}명</S.Tag>
          <S.Tag>{schedule.tag}</S.Tag>
        </S.TagContainer>
      </S.HeaderContainer>

      {isDeleteModalVisible && (
        <S.PointModal>
          <S.DContent>
            <S.DTextContainer>
              <p>여행 일정을 삭제하시겠습니까?</p>
            </S.DTextContainer>
            <S.DButtonContainer>
              <button className="cancel-btn" onClick={handleCancelDelete}>
                취소
              </button>
              <button className="confirm-btn" onClick={handleConfirmDelete}>
                삭제
              </button>
            </S.DButtonContainer>
          </S.DContent>
        </S.PointModal>
      )}

      {/* 포인트 적립 시, user의 point 값 올라야 함(추후 수정) */}
      {/* 인증 요청한 미션이 없는 경우, 버튼만 보이게 */}
      <S.MissionContainer>
        {schedule.missions && schedule.missions.length > 0 && (
          <S.MissionTextContainer>
            <S.PointsContainer>
              <S.CertifiedMissionText>
                {isCompleted
                  ? '인증된 미션'
                  : isInReview
                    ? '인증 요청된 미션'
                    : '인증 요청된 미션'}
              </S.CertifiedMissionText>
              <S.Points>
                {isCompleted
                  ? `+${totalPoints} 포인트 적립`
                  : isInReview
                    ? '미션 검수 중'
                    : ''}
              </S.Points>
            </S.PointsContainer>
            <S.NextText>지난 여행에서 수행한 미션들이에요.</S.NextText>
          </S.MissionTextContainer>
        )}

        {schedule.missions && schedule.missions.length > 0 && (
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
        )}

        <S.ButtonContainer>
          {!isCompleted && !isInReview && (
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
              <S.MTextContainer>
                <p>이번 여행의 미션을</p>
                <p>모두 마치시겠습니까?</p>
              </S.MTextContainer>
              <S.MButtonContainer>
                <button className="cancel-btn" onClick={handleCancel}>
                  취소
                </button>
                <button className="confirm-btn" onClick={handleCompletion}>
                  완료
                </button>
              </S.MButtonContainer>
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
