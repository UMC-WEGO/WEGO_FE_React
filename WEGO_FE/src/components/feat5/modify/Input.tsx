import * as S from './Input.style';

export interface InputFieldProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder = '입력하세요.',
  value,
  onChange,
  error = false,
}) => {
  return (
    <S.InputContainer error={error}>
      <S.StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </S.InputContainer>
  );
};

export default InputField;
