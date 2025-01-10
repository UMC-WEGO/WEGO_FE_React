import styled from 'styled-components';

export const TempContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  margin-top: 36px;
`;

export const TempHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

export const TempValueLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TempValue = styled.div`
  line-height: 1.5;
  font-size: 22px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.3199999928474426px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #0059ff;
`;

export const TempButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 3px;
  margin-top: 5px;
`;

export const TempLabel = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.3199999928474426px;
  text-align: left;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-underline-position: from-font;
  text-decoration-skip-ink: auto;
  color: #a5a5a5;
`;

export const TempGrade = styled.div`
  gap: 6px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #666;
  flex-grow: 0;
  flex-direction: row-reverse;
  line-height: 1.5;
  img {
    width: 20px;
    height: 20px;
  }
`;

export const TempImage = styled.img`
  width: 14.13px;
  height: 14.13px;
  top: 0.94px;
  left: 0.94px;
  cursor: pointer;
`;

export const TempInfoMessage = styled.div`
  position: absolute;
  margin-left: 5px;
  margin-top: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  animation: fadeInOut 5s forwards;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const ProgressBarSection = styled.div`
  width: 100%;
  margin-top: 11px;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ProgressBarBar = styled.div<{ progress: number }>`
  background-color: #0059ff80;
  width: ${props => `${props.progress}%`};
  height: 14px;
  position: absolute;
  top: 0px;
  left: 12px;
  border-radius: 3px;
`;
