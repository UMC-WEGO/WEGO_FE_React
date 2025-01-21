import styled from 'styled-components';

const ContainerBox = styled.div`
  width: 363px;
  height: fit-content;
  box-shadow: -6px 4px 8px 0px #0000001a;
  padding: 18px 15px 18px 15px;
  border-radius: 15px;
`;

const InnerWrapBox = styled.div`
  width: 327px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TitleWrap = styled.div`
  width: 327px;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TravelTitle = styled.p`
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 600;
`;

const TravelTagWrap = styled.div`
  display: flex;
  gap: 7px;
  width: 100%; //327px
  height: fit-content;
`;

export { ContainerBox, InnerWrapBox, TitleWrap, TravelTitle, TravelTagWrap };
