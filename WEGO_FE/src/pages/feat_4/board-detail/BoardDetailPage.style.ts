import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 59px;

  hr {
    border: 1px solid #eaeaea;
  }
`;

export const CommentHr = styled.hr`
  height: 4px;
  background-color: #eaeaea;
`;

export const Scroll = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding-bottom: 60px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-size: 24px;
  padding: 0 25px;

  div {
    display: flex;
    gap: 15px;
  }

  span {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 0 25px;

  p {
    font-size: 15px;
    color: #669cff;
  }

  h1 {
    font-size: 22px;
    font-weight: 600;
    margin: 5px 0;
  }

  img {
    width: 100%;
    height: 190px;
    margin: 10px 0;
    border-radius: 10px;
    object-fit: cover;
  }

  h6 {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 12px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  height: 60px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 3px;

    span {
      font-size: 15px;
      color: #262626;
    }

    p {
      font-size: 12px;
      color: #696969;
    }
  }
`;

export const Response = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
  margin: 13px 0;

  span {
    display: flex;
    color: #888;
    font-size: 15px;
    font-weight: 400;
    gap: 5px;
    cursor: pointer;
  }

  .icon {
    color: #aaa;
  }

  .active {
    color: #007bff;
  }
`;

export const InputBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  box-sizing: border-box;
`;
