import React from 'react';
import * as S from './TravelTag.styled';

const TravelTag = ({ txt }) => {
  return <S.Container color="white">{txt}</S.Container>;
};

export default TravelTag;
