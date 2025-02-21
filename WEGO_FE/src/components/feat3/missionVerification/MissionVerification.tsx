import React, { useState } from 'react';
import * as S from './MissionVerification.style';
import MissionCard from './MissionCard';
import { useParams } from 'react-router';
import { postVerifyMissionApi } from '../../../apis/feat3/schedulesApis';
import { useVerifyMissionStore } from '../../../store/schedule/useVerifyMissionStore';

const MissionVerification = ({ missionId }) => {
  const [inputValue, setInputValue] = useState('');
  const { setData } = useVerifyMissionStore();

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
    setData({
      description: event.target.value,
    });
  };

  const { scheduleId } = useParams();

  return (
    <S.Container>
      <S.Text fontSize="18px" fontWeight="600">
        {missionId}
      </S.Text>
      <S.ReviewBox>
        <S.TitleWrap>
          <S.TextWrap>
            <S.Text fontSize="14px" fontWeight="500">
              내용 입력
            </S.Text>
            <S.Text fontSize="10px" fontWeight="500" color="#0059FF">
              (필수)
            </S.Text>
          </S.TextWrap>
          <S.Text
            fontSize="10px"
            fontWeight="400"
            isOver={inputValue.length >= 10}
          >
            10자 이상
          </S.Text>
        </S.TitleWrap>

        <S.Textinput
          placeholder="다른 유저들에게 나의 즉흥 미션 수행기를 공유하세요."
          value={inputValue}
          onChange={handleInputChange}
        />
      </S.ReviewBox>
      <S.ReviewBox>
        <S.TitleWrap>
          <S.TextWrap>
            <S.Text fontSize="14px" fontWeight="500">
              사진 첨부
            </S.Text>
            <S.Text fontSize="10px" fontWeight="500" color="#0059FF">
              (필수)
            </S.Text>
          </S.TextWrap>
        </S.TitleWrap>
        <S.ImgUpload>
          <MissionCard img={1} />
          <MissionCard />
        </S.ImgUpload>
      </S.ReviewBox>
    </S.Container>
  );
};

export default MissionVerification;
