import * as S from './ScheduleCard.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import X from '../../../images/feat5/X.svg';
import scheduleDeleteBtn from '../../../images/feat5/scheduleDeleteBtn.svg';
import { Schedule } from '../../../types/feat5/UserSchedulesData';
import missionpic from '../../../images/feat5/missionpic.png';

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

  const [isInReview, setIsInReview] = useState(false); // isInReview: 미션 검수 중(백엔드 미션 승인)
  const [isCompleted, setIsCompleted] = useState<boolean>(
    schedule.missions.some(m => m.receivedMission.status),
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
    navigate(`/schedule/${schedule.tripId}/missions/status`); // 한 여행의 미션 인증 페이지로
  };

  // 여행 완료 모달
  const handleCompletion = () => {
    setIsInReview(true);
    setIsModalVisible(false);
    onMissionComplete(schedule.tripId);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    navigate(`/schedule/end/${schedule.tripId}`); // 여행 후 미션 인증하기 페이지로
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
        {schedule.missions && schedule.missions.length > 0 ? (
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
                  {isCompleted
                    ? `+${totalPoints} 포인트 적립`
                    : isInReview
                      ? '미션 검수 중'
                      : ''}
                </S.Points>
              </S.PointsContainer>
              <S.NextText>지난 여행에서 수행한 미션들이에요.</S.NextText>
            </S.MissionTextContainer>

            <S.MissionSection>
              <S.MissionImages>
                {schedule.missions.map(mission => (
                  <S.MissionItem key={mission.mission.id}>
                    {/* 사진 업로드가 안되어서 일단 기본 이미지로 출력 */}
                    <img
                      src={mission.mission.imageUrl || missionpic}
                      alt={mission.mission.title}
                      onError={(
                        e: React.SyntheticEvent<HTMLImageElement, Event>,
                      ) => {
                        const target = e.target as HTMLImageElement;
                        target.src = missionpic;
                      }}
                      onClick={() =>
                        handleImageClick(
                          mission.mission.imageUrl || missionpic,
                          mission.mission.title,
                          mission.mission.content,
                        )
                      }
                    />
                    <S.MissionName>{mission.mission.title}</S.MissionName>
                  </S.MissionItem>
                ))}
              </S.MissionImages>
            </S.MissionSection>
          </>
        ) : (
          !isCompleted &&
          !isInReview && (
            <S.NoMissionContainer>
              <p>아직 인증한 미션이 없어요🥲</p>
            </S.NoMissionContainer>
          )
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
