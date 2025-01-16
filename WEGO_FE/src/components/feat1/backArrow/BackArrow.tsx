import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import styled from 'styled-components';

const BackArrowLayout = styled.div`
  position: absolute;
  top: 12px;
  left: 10px;
`;

function BackArrow() {
  return (
    <BackArrowLayout>
      <IoArrowBack size={'30px'}></IoArrowBack>
    </BackArrowLayout>
  );
}

export default BackArrow;
