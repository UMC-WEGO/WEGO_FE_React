import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 59px;
  overflow-y: auto;

  hr {
    border: 3px solid #eaeaea;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 24px;
  padding: 0 25px;

  span {
    cursor: pointer;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 0 25px 10px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  h3 {
    font-size: 20px;
    padding-bottom: 8px;
  }

  p {
    display: flex;
    font-size: 14px;
    color: #8a8a8a;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px 30px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #ddd;
    width: 140px;
    padding: 0 10px;
  }

  div:last-child {
    border-right: none;
  }

  p {
    font-size: 14px;
    padding-bottom: 5px;
  }

  span {
    font-size: 20px;
    color: #0059ff;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  p {
    font-size: 17px;
    font-weight: 600;
    padding: 15px 15px 5px;
  }
`;
