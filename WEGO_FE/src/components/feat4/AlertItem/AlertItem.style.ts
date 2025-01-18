import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 25px;
  display: flex;
  position: relative;

  border-bottom: 1px solid #eaeaea;
  gap: 15px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  color: #ccc;
`;

export const Content = styled.div`
  p {
    font-size: 14px;
    margin-bottom: 2px;

    span {
      color: #0059ff;
    }
  }

  h3 {
    font-size: 13px;
    margin-bottom: 3px;
    color: #696969;
  }

  h5 {
    font-size: 10px;
    color: #a5a5a5;
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 7px;
  right: 13px;
  cursor: pointer;
  color: #bbb;
`;
