import styled from 'styled-components';

export const Container = styled.div`
  margin: 15px 25px;
`;

export const CommentBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  div {
    display: flex;
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  div {
    gap: 7px;
    display: flex;
    align-items: center;
  }

  h5 {
    font-size: 15px;
    font-weight: 400;
    color: #000;
  }

  h6 {
    font-size: 12px;
    font-weight: 400;
    color: #8a8a8a;
  }

  p {
    font-size: 13px;
    color: #000;
  }
`;
