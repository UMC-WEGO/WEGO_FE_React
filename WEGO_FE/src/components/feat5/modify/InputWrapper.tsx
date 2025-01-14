import InputField from './Input';
import * as S from '../../../pages/feat_5/mypage-profile-modify/MyProfileModifyPage.style';

interface InputFieldWrapperProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputFieldWrapper: React.FC<InputFieldWrapperProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <S.InputContainer>
      <h1>{label}</h1>
      <InputField placeholder={placeholder} value={value} onChange={onChange} />
    </S.InputContainer>
  );
};

export default InputFieldWrapper;
