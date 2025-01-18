import styled from 'styled-components';

interface CategoryButtonProps {
  selected: boolean;
}

export const Container = styled.div`
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
  max-height: 600px; /* 높이 설정 */
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;
