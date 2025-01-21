import InputField from './Input';
import * as S from '../../../pages/feat_5/mypage-profile-modify/MyProfileModifyPage.style';

interface InputFieldWrapperProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
}

const InputFieldWrapper: React.FC<InputFieldWrapperProps> = ({
  label,
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <S.InputWrapper>
      <label>{label}</label>
      <S.InputContainer>
        <InputField
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          error={!!error}
        />
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </S.InputContainer>
    </S.InputWrapper>
  );
};

export default InputFieldWrapper;
