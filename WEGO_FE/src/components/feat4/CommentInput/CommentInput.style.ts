import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  border-top: 1px solid #d9d9d9;

  position: fixed;
  bottom: 43px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;

  max-width: 420px;
  height: 70px;
  box-sizing: border-box;
  background-color: white;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  span {
    display: flex;
    font-size: 25px;
    color: gray;
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  flex: 1;

  input {
    width: 100%;
    height: 34px;
    border: none;
    outline: none;
    padding: 10px 40px 10px 10px;
    border-radius: 20px;
    font-size: 14px;
    color: #a5a5a5;
    background-color: #f6f6f6;
  }

  button {
    position: absolute;
    right: 3px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    cursor: pointer;
  }

  span {
    color: #0059ff;
    font-size: 20px;
  }
`;
