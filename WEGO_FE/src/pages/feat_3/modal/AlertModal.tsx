import React from 'react';
import * as S from './AlertModal.style';

const AlertModal = ({ onClose }) => {
  return (
    <S.Background>
      <S.Container>
        <S.TextBox>어쩌구저꺼구 안내문구</S.TextBox>
        <S.AcceptButton onClick={onClose}>네</S.AcceptButton>
        <S.RejectButton onClick={onClose}>아니오</S.RejectButton>
      </S.Container>
    </S.Background>
  );
};

export default AlertModal;
