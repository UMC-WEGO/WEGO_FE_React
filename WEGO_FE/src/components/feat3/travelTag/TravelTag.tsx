import React from 'react';
import * as S from './TravelTag.styled';

const TravelTag = ({ txt, color, bgcolor }) => {
  return (
    <S.Container color={color} bgColor={bgcolor}>
      {txt}
    </S.Container>
  );
};

export default TravelTag;
