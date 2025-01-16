import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 59px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-size: 24px;
  padding: 0 25px;
  border-bottom: 1px solid #a5a5a5;

  input {
    width: 290px;
    font-size: 18px;
    border: none;
    outline: none;
    color: #262626;

    &::placeholder {
      color: #a5a5a5;
    }
  }

  span {
    display: flex;
    color: #262626;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 25px 0;
  gap: 10px;

  p {
    font-size: 12px;
    color: #0059ff;
    margin-bottom: 8px;
  }
`;

export const Select = styled.div`
  div {
    display: flex;
    gap: 12px;
  }

  h3 {
    font-size: 15px;
    margin-bottom: 10px;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 25px;

    height: 30px;
    padding: 10px 13px;
    font-size: 12px;
    border-radius: 15px;
    background-color: #f6f6f6;
    cursor: pointer;

    &:hover {
      background-color: #e5eeff;
      color: #0059ff;
    }
  }
`;
