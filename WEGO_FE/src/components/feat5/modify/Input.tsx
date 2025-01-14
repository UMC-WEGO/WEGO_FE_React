import * as S from './Input.style';

export interface InputFieldProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder = '입력하세요.',
  value,
  onChange,
}) => {
  return (
    <S.InputContainer>
      <S.StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </S.InputContainer>
  );
};

export default InputField;
