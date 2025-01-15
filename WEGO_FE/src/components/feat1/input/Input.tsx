import React from 'react';
import styled from 'styled-components';
import {
  inputWidthTable,
  inputHeightTable,
} from '../../../constants/SharedComponentSizeTable';
import { FieldValues, UseFormRegister, Path } from 'react-hook-form';

type TInputProps<T extends FieldValues> = {
  // FieldValues는모든 문자열 키에 대해 값이 any 타입인 객체로,
  // 폼 데이터의 필드 이름과 값들의 형태를 동적으로 처리할 수 있게 함
  width?: string;
  height?: string;
  placeholder: string;
  register?: UseFormRegister<T>;
  signUpInputType?: Path<T>; // Path<T>는 타입 T의 키들만을 유니언 타입으로 반환하는 타입
  isError?: boolean;
};

interface StyledProps {
  $width?: string; // width 스타일드prop 타입정의
  $height?: string; // height도 정의
  $isError?: boolean;
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

  outline: none;
  outline: ${props => (props.$isError ? '1px solid #DC0000' : 'none')};

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  font-size: 14px;

  &:hover {
    outline: 1px solid rgba(0, 89, 255, 1);
  }

  &:focus {
    outline: 1px solid rgba(0, 89, 255, 1); // 추후 props 받아서 처리
  }
`;

// keyof T는 T 타입에 포함된 모든 키들('email' | 'password' | 'passwordCheck' | 'nickname')을
// 유니언 타입으로 나타내며, register는 이 값들을 사용할 수 있음
function Input<T extends FieldValues>({
  width = inputWidthTable.defaultValue,
  height = inputHeightTable.defaultValue,
  placeholder,
  register,
  signUpInputType,
  isError,
}: TInputProps<T>) {
  console.log('input signuptype:', signUpInputType);
  console.log('register:', register);
  console.log({
    ...(register && signUpInputType ? register(signUpInputType) : {}),
  });
  return (
    <MyInput
      $width={width}
      $height={height}
      placeholder={placeholder}
      // register, signUpInputType이 있을 때만 사용 (옵셔널 prop 로직 처리는 이렇게)
      {...(register && signUpInputType ? register(signUpInputType) : {})}
    ></MyInput>
  );
}

export default Input;
