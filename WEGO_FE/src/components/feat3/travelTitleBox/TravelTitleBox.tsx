import React from 'react';
import * as S from './TravelTitleBox.style';
import TravelTag from '../travelTag/TravelTag';

const TravelTitleBox = ({ title, dday, tags }) => {
  return (
    <S.ContainerBox>
      <S.TitleWrapBox>
        {title}, {dday}
        <S.EditButton>수정</S.EditButton>
      </S.TitleWrapBox>
      <S.TravelTagWrap>
        {tags.map((tag, idx) => (
          <TravelTag
            key={idx}
            color={'white'}
            bgcolor={'#26262633'}
            txt={tag}
          />
        ))}
      </S.TravelTagWrap>
    </S.ContainerBox>
  );
};

export default TravelTitleBox;
