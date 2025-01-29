import React from 'react';
import styled from 'styled-components';
import {
  inputWidthTable,
  inputHeightTable,
} from '../../../constants/SharedComponentSizeTable';
import { FieldValues, UseFormRegister, Path } from 'react-hook-form';
import { type } from './../../../pages/feat_1/signup/SignupPage';

type TInputProps<T extends FieldValues> = {
  // FieldValues는모든 문자열 키에 대해 값이 any 타입인 객체로,
  // 폼 데이터의 필드 이름과 값들의 형태를 동적으로 처리할 수 있게 함
  width?: string;
  height?: string;
  placeholder: string;
  register?: UseFormRegister<T>;
  signUpInputType?: Path<T>; // Path<T>는 타입 T의 키들만을 유니언 타입으로 반환하는 타입
  isError?: boolean;
  type?: string;
  debouncedCheck?: (data) => void;
  // 추가: value와 onChange를 받도록 설정 (controlled input 지원)
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

  outline: ${props => (props.$isError ? '1px solid #DC0000' : 'none')};

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  font-size: 14px;

  &:hover {
    outline: ${props =>
      props.$isError ? '1px solid #DC0000' : '1px solid rgba(0, 89, 255, 1)'};
  }

  &:focus {
    outline: ${props =>
      props.$isError ? '1px solid #DC0000' : '1px solid rgba(0, 89, 255, 1)'};
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
  type,
  debouncedCheck, // 리액트 훅 폼에서의 register-onChange는 래퍼함수로 동작하기 때문에 또 정의해도 괜찮음
  value, // ✅ 추가: 외부에서 전달되는 value
  onChange, // ✅ 추가: 외부에서 전달되는 onChange
}: TInputProps<T>) {
  // onChange 병합
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Debounced check and register onChange triggered');

    // 디바운스 처리
    if (debouncedCheck) {
      debouncedCheck({ email: e.target.value });
    }

    // ✅ props에서 받은 onChange가 있으면 사용
    if (onChange) {
      onChange(e);
    }

    // react-hook-form의 onChange 호출 (병합)
    if (register && signUpInputType) {
      const { onChange } = register(signUpInputType); // register에서 onChange 추출
      onChange(e); // 이 부분에서 e를 전달
    }
  };

  // register에서 onChange 제외하고 나머지 속성만 스프레드
  const registerProps =
    register && signUpInputType ? register(signUpInputType) : {};
  const { onChange: _, ...restProps } = registerProps; // onChange 제외한 나머지 속성들

  return (
    <MyInput
      $width={width}
      $height={height}
      $isError={isError}
      placeholder={placeholder}
      onChange={handleChange} // onchange는 커스텀 핸들러 전달
      value={value} // ✅ value가 존재하면 controlled input으로 사용
      {...restProps} // 나머지 register 속성 전달
      type={type == 'password' ? 'password' : 'text'}
    ></MyInput>
  );
}

export default Input;
