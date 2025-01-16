// https://velog.io/@boris0716/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-Bottom-Sheet-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%9E%91%EC%84%B1%EC%A4%91
import styled from "styled-components";
import { motion } from "framer-motion";
import useBottomSheet from "../../hooks/feat2/useBottomSheet";

export const MIN_Y = 60;
export const MAX_Y = window.innerHeight;
const BOTTOM_SHEET_HEIGHT = window.innerHeight - MIN_Y;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  position: fixed;
  z-index: 1;
  top: calc(100% - 90px); /*시트가 얼마나 올라갈지 설정*/

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-shadow: 0px 0px 10px rgab(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT}px;

  background: linear-gradient(359.26deg, #3C41C7 0.02%, #3742B2 83.23%, #3642AE 98.76%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: transform 650ms ease-out  /*애니메이션 속력*/
`

const BottomSheetContent = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`

const Header = () => {
  const Wrapper = styled.div`
    height: 24px;
    border-top-left-radius: 12px;
    border-bottom-right-radius: 12px;
    position: relative;
    padding-top: 12px;
    padding-bottom: 4px;
  `;

  const Handle = styled.div`
    height: 4px;
    width: 40px;
    border-radius: 2px;
    background-color: #DEE2E6;
    margin: auto;
  `;

  return(
    <Wrapper>
      <Handle/>
    </Wrapper>
  );
};

const Content = () => {
  return(
    <div>내용내용</div>
  );
};

const BottomSheet = () => {
  const { sheet, content } = useBottomSheet();

  return(
    <Wrapper ref={sheet}>
      <Header/>
      <BottomSheetContent ref={content}>
        <Content/>
      </BottomSheetContent>
    </Wrapper>
  );
};

export default BottomSheet;