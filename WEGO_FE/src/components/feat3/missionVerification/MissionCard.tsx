import React from 'react';
import styled from 'styled-components';

const ImgCardWrap = styled.div`
  width: 94px;
  height: 94px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  gap: 5px;
  margin-top: 24px;
  margin-left: 12px;
`;
const ImgCard = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
`;
const Text = styled.p`
  font-family: Pretendard Variable;
  font-weight: 600;
  font-size: 11px;
  line-height: 11px;
  letter-spacing: -0.32px;
  text-align: center;
  color: #bababa;
`;
const PlusIcon = styled.button`
  &:hover {
    cursor: pointer;
  }
`;

const MissionCard = ({ img }) => {
  return img ? (
    <ImgCardWrap>
      <ImgCard src="/src/images/feat3/image_9.png" alt="미션사진" />
    </ImgCardWrap>
  ) : (
    <ImgCardWrap>
      <PlusIcon>
        <img src="/src/images/feat3/PlusIcon_gray.png" alt="플러스 아이콘" />
      </PlusIcon>

      <Text>2 / 5</Text>
    </ImgCardWrap>
  );
};

export default MissionCard;
