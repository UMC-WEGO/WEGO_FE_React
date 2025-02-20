import * as S from './ScheduleCard.style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import X from '../../../images/feat5/X.svg';
import scheduleDeleteBtn from '../../../images/feat5/scheduleDeleteBtn.svg';
import { Schedule } from '../../../types/feat5/UserSchedulesData';
// import missionpic from '../../../images/feat5/missionpic.png'; // 임시

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

  // 로컬 스토리지
  const loadStateFromLocalStorage = () => {
    const savedCompletedState = localStorage.getItem(
      `completed-${schedule.tripId}`,
    );
    const savedReviewState = localStorage.getItem(`review-${schedule.tripId}`);
    return {
      isCompleted: savedCompletedState === 'true',
      isInReview: savedReviewState === 'true',
    };
  };

  const [isInReview, setIsInReview] = useState<boolean>(
    loadStateFromLocalStorage().isInReview,
  );
  const [isCompleted, setIsCompleted] = useState<boolean>(
    loadStateFromLocalStorage().isCompleted,
  );

  // 상태
  useEffect(() => {
    localStorage.setItem(`completed-${schedule.tripId}`, String(isCompleted));
  }, [isCompleted, schedule.tripId]);
  useEffect(() => {
    localStorage.setItem(`review-${schedule.tripId}`, String(isInReview));
  }, [isInReview, schedule.tripId]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedMissionWrite, setSelectedMissionWrite] = useState<
    string | null
  >(null);
  const [selectedMissionName, setSelectedMissionName] = useState<string | null>(
    null,
  );

  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isCompletedMission, setIsCompletedMission] = useState(false);

  // 여행 포인트 (각 미션의 포인트 합)
  const totalPoints = schedule.missions.reduce(
    (total, mission) => total + mission.mission.point,
    0,
  );

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
    onDelete(schedule.tripId);
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
    onMissionComplete(schedule.tripId);
    setIsModalVisible(false);
    navigate(`/schedule/end/${schedule.tripId}`);
  };

  // 여행 완료 모달
  const handleCompletion = () => {
    setIsInReview(true);
    localStorage.setItem(`completed-${schedule.tripId}`, 'true'); //
    setIsModalVisible(false);
    onMissionComplete(schedule.tripId);
    setIsCompletedMission(true);
    navigate(`/schedule`);
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
              : '426px'
            : isInReview // 인증 요청된 미션이 하나도 없는 경우
              ? '130px'
              : '260px',
      }}
    >
      <S.HeaderContainer
        style={{
          borderBottom: isInReview ? 'none' : '1px solid #eaeaea',
        }}
      >
        <S.TitleContainer>
          <S.Title>
            {schedule.location} 여행,
            {/* 디데이 계산(현재 날짜 기준) */}
            {(() => {
              const today = new Date();
              const endDate = new Date(schedule.endDate);
              // 시간 초기화
              today.setHours(0, 0, 0, 0);
              endDate.setHours(0, 0, 0, 0);
              const timeDiff = endDate.getTime() - today.getTime();
              const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

              if (daysLeft > 0) {
                return ` D-${daysLeft}`;
              } else if (daysLeft === 0) {
                return ' D-Day';
              } else {
                return ` D+${Math.abs(daysLeft)}`;
              }
            })()}
          </S.Title>
          <S.DeleteButton onClick={handleDeleteClick}>
            <img src={scheduleDeleteBtn} alt="삭제" />
          </S.DeleteButton>
        </S.TitleContainer>
        <S.TagContainer>
          <S.Tag>
            {/* 날짜 파싱해서 출력 */}
            {new Date(schedule.startDate).toISOString().split('T')[0]} ~{' '}
            {`${(new Date(schedule.endDate).getMonth() + 1).toString().padStart(2, '0')}-${new Date(schedule.endDate).getDate().toString().padStart(2, '0')}`}
          </S.Tag>
          <S.Tag>{`${schedule.adult_participants}명`}</S.Tag>
          <S.Tag>{schedule.vehicle}</S.Tag>
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

      {/* 포인트 적립 시, user의 point 값 올라야 함 */}
      {/* 인증 미션이 하나도 없는 경우, 미션 단 없이 글과 버튼만 보이게 */}
      <S.MissionContainer>
        {schedule.missions.length === 0 ||
        !schedule.missions.some(
          mission => mission.receivedMission.status === true,
        ) ? (
          <S.NoMissionContainer>
            <p>아직 인증한 미션이 없어요🥲</p>
          </S.NoMissionContainer>
        ) : (
          <>
            <S.MissionTextContainer>
              <S.PointsContainer>
                <S.CertifiedMissionText>
                  {isCompleted
                    ? '인증된 미션'
                    : isInReview
                      ? '인증된 미션'
                      : '인증된 미션'}
                </S.CertifiedMissionText>
                <S.Points>
                  {/* receivedMission의 status가 true일 경우 "n 포인트 지급" 표시 */}
                  {schedule.missions
                    .filter(
                      mission =>
                        mission.receivedMission &&
                        mission.receivedMission.content,
                    )
                    .every(mission => mission.receivedMission.status)
                    ? `+${schedule.missions
                        .filter(
                          mission =>
                            mission.receivedMission &&
                            mission.receivedMission.content,
                        )
                        .reduce(
                          (total, mission) => total + mission.mission.point,
                          0,
                        )} 포인트 지급`
                    : isInReview
                      ? '미션 검수 중'
                      : isCompleted
                        ? `+${totalPoints} 포인트 적립`
                        : ''}
                </S.Points>
              </S.PointsContainer>
              <S.NextText>지난 여행에서 수행한 미션들이에요.</S.NextText>
            </S.MissionTextContainer>

            <S.MissionSection>
              <S.MissionImages>
                {schedule.missions
                  .filter(
                    mission =>
                      mission.receivedMission &&
                      mission.receivedMission.content, // content가 null이 아닌 경우만
                  )
                  .map(mission => (
                    <S.MissionItem key={mission.receivedMission.id}>
                      {/* 인증된 사진 null 상태 처리 */}
                      <img
                        src={mission.receivedMission.picture}
                        onClick={() =>
                          handleImageClick(
                            mission.receivedMission.picture,
                            mission.mission.title,
                            mission.receivedMission.content ?? ' ',
                          )
                        }
                      />
                      <S.MissionName>{mission.mission.title}</S.MissionName>
                    </S.MissionItem>
                  ))}
              </S.MissionImages>
            </S.MissionSection>
          </>
        )}

        <S.ButtonContainer>
          {!(isCompletedMission || isInReview) && (
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
