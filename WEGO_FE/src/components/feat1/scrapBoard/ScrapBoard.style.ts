import styled from 'styled-components';

interface CategoryButtonProps {
  selected: boolean;
}

export const Container = styled.div`
  height: 80%;
  padding: 10px;
`;

export const CategoryButton = styled.button<CategoryButtonProps>`
  background-color: ${props => (props.selected ? '#e5eeff' : '#f0f0f0')};
  color: ${props => (props.selected ? '#0059ff' : '#696969')};
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    background-color: #e5eeff;
    color: #0059ff;
  }
`;

export const PostListContainer = styled.div`
  height: clamp(470px, 97%, 1000px); // 어렵다... 이거 나중에 다시 생각
  overflow-y: auto;
`;
