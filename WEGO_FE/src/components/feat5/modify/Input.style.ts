import styled from 'styled-components';

export const InputContainer = styled.div<{ error: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border-top-width: 1px;
  box-sizing: border-box;
  width: 100%;
  height: 36px;
  margin: 11px 0px;
  opacity: 1;
  border: 1px solid ${({ error }) => (error ? '#DC0000' : '#a5a5a5')};
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 15px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.3199999928474426px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  &::placeholder {
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: -0.3199999928474426px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #a5a5a5;
  }
`;
