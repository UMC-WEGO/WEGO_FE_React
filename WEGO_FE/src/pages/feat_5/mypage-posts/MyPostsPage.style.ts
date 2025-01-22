import styled from 'styled-components';

interface ContentProps {
  noScroll?: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 59px;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 2px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20px;
  margin-bottom: 5px;
  position: relative;

  h1 {
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.3199999928474426px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin-left: -18px;
  }

  .arrow-btn {
    position: absolute;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    height: 20px;
  }

  .arrow-btn {
    left: 1px;
  }

  .arrow-img {
    width: 20px;
    height: 20px;
  }
`;

export const Content = styled.div.attrs<ContentProps>(props => ({
  noScroll: props.noScroll,
}))<ContentProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: ${props => (props.noScroll ? 'hidden' : 'auto')};
`;

export const PostWrapper = styled.div`
  position: relative;
`;

export const Button = styled.div`
  position: absolute;
  top: 14px;
  right: 15px;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const NoPostMessage = styled.div`
  margin-top: 329px;
  margin-left: -18px;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.3199999928474426px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #0059ff;
`;
