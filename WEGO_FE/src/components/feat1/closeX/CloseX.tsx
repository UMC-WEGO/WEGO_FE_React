import React from 'react';
import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';

const CloseXIconLayout = styled.div`
  position: absolute;
  top: 12px;
  left: 10px;
`;

function CloseX() {
  return (
    <CloseXIconLayout>
      <IoIosClose size={'30px'}></IoIosClose>
    </CloseXIconLayout>
  );
}

export default CloseX;
