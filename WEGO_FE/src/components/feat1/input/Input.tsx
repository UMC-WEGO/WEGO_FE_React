import React from 'react';
import styled from 'styled-components';
import {
  inputWidthTable,
  inputHeightTable,
} from '../../../constants/SharedComponentSizeTable';

interface StyledProps {
  $width?: string; // width 스타일드prop 타입정의
  $height?: string; // height도 정의
}

const MyInput = styled.input<StyledProps>`
  width: ${props => props.$width};
  height: ${props => props.$height};

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 9px;
  gap: 10px;

  background: #ffffff;
  border: 1px solid #696969;
  border-radius: 2px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  font-size: 14px;

  &:hover {
    outline: 1px solid rgba(0, 89, 255, 1);
  }
`;

function Input({
  width = inputWidthTable.defaultValue,
  height = inputHeightTable.defaultValue,
  placeholder,
}: {
  width?: string;
  height?: string;
  placeholder: string;
}) {
  return (
    <MyInput
      $width={width}
      $height={height}
      placeholder={placeholder}
    ></MyInput>
  );
}

export default Input;
