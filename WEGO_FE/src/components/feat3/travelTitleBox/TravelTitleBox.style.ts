import styled from 'styled-components';

const ContainerBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const TitleWrapBox = styled.div`
  width: 100%;
  height: fit-content;
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 600;
  line-height: 25px;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: end;
  color: white;
`;

const EditButton = styled.text`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-underline-position: from-font;
  text-decoration-skip-ink: auto;
  color: #ffffff99;
`;

const TravelTagWrap = styled.div`
  display: flex;
  gap: 7px;
  width: 100%; //212px
  height: fit-content;
`;

export { ContainerBox, TitleWrapBox, EditButton, TravelTagWrap };
