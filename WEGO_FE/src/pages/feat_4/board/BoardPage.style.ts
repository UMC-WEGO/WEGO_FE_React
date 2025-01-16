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

  img {
    width: 90px;
    height: 20px;
  }

  div {
    display: flex;
    font-size: 24px;
    gap: 15px;

    span {
      cursor: pointer;
    }
  }
`;

export const TabSwitcher = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 25px;

  button {
    flex: 1;
    padding: 10px 0;
    margin: 0;
    border: none;
    cursor: pointer;
    background-color: white;
    font-size: 17px;
    font-weight: 500;

    border-bottom: 1px solid #ccc;
    color: #ccc;
  }

  button.active {
    border-bottom: 1px solid #0059ff;
    color: #0059ff;
  }
`;

export const WriteButton = styled.button`
  position: absolute;
  top: 691px;
  left: 50%;
  transform: translateX(-50%);

  width: 120px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background-color: #0059ff;
  color: white;
  padding: 8px 21px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
`;
