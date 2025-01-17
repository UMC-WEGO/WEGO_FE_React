import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 10px 0px;
  gap: 15px;
`;

const ExportIconWrap = styled.div`
  width: 363px;
  height: fit-content;
  display: flex;
  justify-content: right;
`;

const TitleWrap = styled.div`
  width: 363px;
  height: fit-content;
  display: flex;
  justify-content: left;
`;

const TitleText = styled.text`
  font-family: Pretendard;
  font-size: ${props => (props.isTitle ? '20px' : '16px')};
  font-weight: 600;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const LastTravelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 363px;
  height: 70px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
`;

const LastTravelInnerBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 327px;
  height: 24px;
`;

export {
  Container,
  ExportIconWrap,
  TitleWrap,
  TitleText,
  LastTravelContainer,
  LastTravelInnerBox,
};
