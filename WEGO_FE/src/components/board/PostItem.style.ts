import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;

  img {
    width: 95px;
    height: 95px;
    margin-right: 13px;
    border-radius: 5px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 12px;
    color: #0059ff;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 16px;
    color: #262626;
    margin: 0;
    margin-bottom: 5px;
  }

  h5 {
    font-size: 12px;
    color: #696969;
    margin-bottom: 15px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  h6 {
    display: flex;
    font-size: 11px;
    color: #696969;

    svg {
      width: 8px;
    }
  }
`;
