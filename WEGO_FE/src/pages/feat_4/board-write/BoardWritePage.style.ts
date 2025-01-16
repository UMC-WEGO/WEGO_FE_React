import styled from 'styled-components';

interface TopicButtonProps {
  $active?: boolean;
}

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

  div {
    display: flex;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const CompleteButton = styled.button<{ $isActive: boolean }>`
  cursor: ${({ $isActive }) => ($isActive ? 'pointer' : 'not-allowed')};

  color: ${({ $isActive }) => ($isActive ? '#0059ff' : '#696969')};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 25px 0;
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
    resize: none;

    &::placeholder {
      color: #ccc;
    }
  }
`;

export const Region = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 25px;
  padding: 15px 3px 10px;

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

export const ScrollContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;

  overflow-x: auto;
  white-space: nowrap;
`;

export const UploadBox = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  flex-shrink: 0; // 축소 방지

  width: 85px;
  height: 85px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  color: #bbb;
  font-size: 12px;
  cursor: pointer;

  box-sizing: border-box;

  p {
    color: #bbb;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13px;
    height: 13px;
    background-color: #bbb;
    border-radius: 50%;
    color: #fff;
  }

  input {
    display: none;
  }

  img {
    width: 85px;
    height: 85px;
    object-fit: cover;
    border-radius: 7px;
    border: none;
  }
`;

export const TopicButton = styled.div<TopicButtonProps>`
  color: ${({ $active }) => ($active ? '#0059ff' : '#696969')}; // $active 사용
  cursor: pointer;

  &:hover {
    color: #0059ff;
  }
`;
