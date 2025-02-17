import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  gap: 10px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-top: 1px solid #a5a5a5;
  padding: 14px 20px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: ${props => props.row || 'column'};
`;

const Text = styled.p`
  font-family: Pretendard;
  font-weight: ${props => props.fontWeight || 600};
  font-size: ${props => props.fontSize || '18px'};
  line-height: 21px;
  letter-spacing: -0.32px;
  color: ${props => props.color || 'black'};
`;

const UploadButton = styled.button`
  width: 186px;
  height: 50px;
  gap: 10px;
  border-radius: 5px;
  padding: 10px;
  background: #0059ff;
  color: white;
`;
export { Container, TextWrap, UploadButton, Text };
