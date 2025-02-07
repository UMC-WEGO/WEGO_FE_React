import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
`;

export const ImageWrapper = styled.div`
  position: relative;

  img {
    width: 95px;
    height: 95px;
    border-radius: 5px;
    object-fit: cover;
  }
`;

export const BookmarkIcon = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  padding: 4px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;

  span {
    font-size: 12px;
    color: #669cff;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 16px;
    color: #262626;
    margin: 0;
    margin-bottom: 5px;
  }

  h4 {
    font-size: 12px;
    font-weight: 400;
    color: #696969;
    margin-bottom: 12px;

    height: 27px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h5 {
    display: flex;
    align-items: center;
    font-size: 11px;
    font-weight: 400;
    color: #696969;

    svg {
      width: 8px;
    }
  }

  h6 {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    font-weight: 400;
    color: #696969;

    div {
      display: flex;
      gap: 2px;
    }

    svg {
      color: #bbb;
    }
  }
`;

export const Rank = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  width: 18px;
  height: 18px;
  font-size: 15px;
  font-weight: bold;
  color: #0059ff;
  padding-right: 10px;

  svg {
    position: absolute;
    top: -13px;
    color: #fddc00;
  }
`;
