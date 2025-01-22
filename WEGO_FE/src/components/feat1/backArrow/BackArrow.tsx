import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import styled from 'styled-components';

const BackArrowLayout = styled.div`
  position: absolute;
  top: 12px;
  left: 10px;
`;

// props 추가해서 위치 조정가능하게,  12px 10px을 디폴트로 두기 
function BackArrow() {
  return (
    <BackArrowLayout>
      <IoArrowBack size={'30px'}></IoArrowBack>
    </BackArrowLayout>
  );
}

export default BackArrow;
