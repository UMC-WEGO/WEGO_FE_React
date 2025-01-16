//https://velog.io/@sangpok/React-Bottom-Sheet
import styled from "styled-components";
import { motion } from "framer-motion";

const BackgroundOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
`

const SheetCard = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50vh; // 전체 화면을 차지하게 하기 위해 height 설정
  background: white;
  border-radius: 12px 12px 0 0; // 모서리 둥글게
  padding: 12px 16px 24px;
  will-change: transform;
  z-index: 20; // 배경 위에 표시되도록
`

const BottomHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;  
`

const HandleBar = styled.div`
  width: 40px;
  height: 6px;
  background-color: #ccc;
  border-radius: 3px;
`

const ContentArea = styled.div`
  padding-top: 20px;
  max-height: calc(100vh - 100px); // 헤더를 제외한 나머지 영역에 스크롤 가능
  overflow-y: auto;
`

const Content = styled.div`
  font-size: 16px;
  color: #333;
`

interface BottomsheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const Bottomsheet: React.FC<BottomsheetProps>  = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <>
          <BackgroundOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <SheetCard
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
          >
            <BottomHeader>
              <HandleBar />
            </BottomHeader>
            <ContentArea>
              <Content>
                내용내용 내용내용 내용내용 내용내용 내용내용 내용내용
              </Content>
            </ContentArea>
          </SheetCard>
        </>
      )}
    </>
  )
}

export default Bottomsheet;