import React from 'react';
import styled from 'styled-components';
import {
  inputWidthTable,
  inputHeightTable,
} from '../../../constants/SharedComponentSizeTable';

interface TButtonProps {
  width?: string;
  height?: string;
  content: string;
  color: string;
  type?: 'button' | 'submit' | 'reset'; // 'button', 'submit', 'reset' 만 허용
  disabled?: boolean;
}

interface TStyledProps {
  width?: string; // width 스타일드prop 타입정의
  height?: string; // height도 정의
  color?: string;
}

const MyButton = styled.button<TStyledProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => `var(${props.color})`};
  color: white;
  font-size: 16px;
`;

function Button({
  width = inputWidthTable.defaultValue,
  height = inputHeightTable.defaultValue,
  content,
  color,
  type = 'submit',
  disabled = true,
}: TButtonProps) {
  return (
    <MyButton
      width={width}
      height={height}
      color={color}
      type={type}
      disabled={disabled}
    >
      {content}
    </MyButton>
  );
}

export default Button;
