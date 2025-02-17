import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 24px 20px;
  gap: 15px;
`;

const Text = styled.p`
  font-family: Pretendard;
  font-weight: ${props => props.fontWeight || 600};
  font-size: ${props => props.fontSize || '18px'};
  line-height: 21px;
  letter-spacing: -0.32px;
  color: ${props => props.color || 'black'};
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 11px;
  border-bottom: 1px solid #eaeaea;
`;

const ReviewBox = styled.div`
  width: 100%;
  height: 182px;
  display: flex;
  flex-direction: column;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const Textinput = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 12px;
  color: 'black';
  display: flex;
  align-items: flex-start;
`;

export { Container, Text, TitleWrap, ReviewBox, TextWrap, Textinput };
