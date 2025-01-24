import styled from 'styled-components';

interface ContentProps {
  noScroll?: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 59px;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 0px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20px;
  margin-bottom: 20px;
  position: relative;

  h1 {
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.3199999928474426px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin-left: 0px;
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

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-right: ${props => (props.noScroll ? '15px' : '0px')};
  overflow-y: ${props => (props.noScroll ? 'hidden' : 'auto')};
  padding-bottom: 30px;
  overflow-anchor: none;
`;

export const NoScheduleMessage = styled.div`
  margin-top: 329px;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.3199999928474426px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #0059ff;
`;

export const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
