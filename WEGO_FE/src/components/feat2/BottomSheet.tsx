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

const SheetCard = styled(motion.div)< {height: string} >`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => height};
  background: white;
  border-radius: 12px 12px 0 0;
  will-change: transform;
  z-index: 20; // 배경 위에 표시되도록
`

const ContentCard = styled.div`
  max-height: calc(100vh - 100px); // 헤더를 제외한 나머지 영역에 스크롤 가능
  overflow-y: auto;
`

interface BottomsheetProps {
  isOpen: boolean;
  height: string;
  onClose?: () => void;
  children: React.ReactNode; // children 추가
}

const Bottomsheet: React.FC<BottomsheetProps> = ({ isOpen, children, height }) => {
  return (
    <>
      {isOpen && (
        <>
          <BackgroundOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <SheetCard
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            height={height}
          >
            <ContentCard>
              {children} {/* children을 Content 영역에 렌더링 */}
            </ContentCard>
          </SheetCard>
        </>
      )}
    </>
  )
}

export default Bottomsheet;