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
  padding: 0 25px;
  height: 50px;
  border-bottom: 1px solid #a5a5a5;

  button {
    font-size: 16px;
    background-color: white;
    cursor: pointer;
  }

  .cancel {
    color: #696969;
  }

  .complete {
    color: #d9d9d9;
  }

  div {
    display: flex;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 25px;
  gap: 10px;

  input {
    padding: 0 3px 10px;
    height: 45px;
    font-size: 22px;
    border: none;
    outline: none;
    border-bottom: 1px solid #d9d9d9;
    color: #000;

    /* placeholder 색상 */
    &::placeholder {
      color: #a5a5a5;
    }
  }

  textarea {
    margin-top: 10px;
    padding: 0 3px;
    height: 300px;
    font-size: 15px;
    border: none;
    outline: none;
    border-bottom: 1px solid #d9d9d9;
    color: #000;

    &::placeholder {
      color: #ccc;
    }
  }
`;

export const Region = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 25px;
  padding: 0 3px 10px;

  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;

  span {
    font-size: 20px;
  }
`;

export const Photo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 25px;
  padding: 5px 3px 10px;

  h1 {
    font-size: 16px;
  }

  p {
    font-size: 12px;
    line-height: 17px;
    color: #262626;
  }
`;

export const UploadBox = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  width: 85px;
  height: 85px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  color: #bbb;
  font-size: 12px;
  cursor: pointer;

  input {
    display: none;
  }
`;
