import React from 'react';
import * as S from './RecommendMission.style';

const RecommendMission = () => {
  return (
    <S.Container>
      <S.TitleBoxWrap>
        <S.Title>추천 미션</S.Title>
        <S.MoreInfor>
          여행지에서 즉흥적으로 수행할 미션을 골라보세요.
        </S.MoreInfor>
      </S.TitleBoxWrap>
      <S.MissionContainer>
        <S.MissionTitle>골목길 미션</S.MissionTitle>
        <S.MissionImageWrap>
          <img src="/src/images/feat3/MissionImage8.png" alt="미션이미지" />
        </S.MissionImageWrap>
        <S.MissionDescriptionBox>
          <S.MissionDescription>
            “예쁜 골목길 보이면 사진 찍기”
          </S.MissionDescription>
          <S.MissionDescriptionComent>
            동네의 정취를 느껴보아요!
          </S.MissionDescriptionComent>
        </S.MissionDescriptionBox>
      </S.MissionContainer>
      <S.MissionSaveButton>미션 저장</S.MissionSaveButton>
    </S.Container>
  );
};

export default RecommendMission;
