import React from 'react';
import * as S from './TravelScheduleBox.style';
import TravelTag from '../travelTag/TravelTag';

const TravelScheduleBox = ({ title, dday, tags }) => {
  return (
    <>
      <S.ContainerBox>
        <S.InnerWrapBox>
          <S.TitleWrap>
            <S.TravelTitle>
              {title}, {dday}
            </S.TravelTitle>
            <img src="/src/images/feat3/TrashCan.svg" alt="쓰레기통" />
          </S.TitleWrap>
          <S.TravelTagWrap>
            {tags.map((tag, idx) => (
              <TravelTag
                key={idx}
                color={'blue'}
                bgcolor={'#0059FF1A'}
                txt={tag}
              />
            ))}
            {/* <TravelTag text="2024.11.26~11.27" />
            <TravelTag text="7명" />
            <TravelTag text="자가용" /> */}
          </S.TravelTagWrap>
        </S.InnerWrapBox>
      </S.ContainerBox>
    </>
  );
};

export default TravelScheduleBox;
