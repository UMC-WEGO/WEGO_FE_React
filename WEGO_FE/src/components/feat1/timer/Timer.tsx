import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';

const TimerWrapper = styled.div`
  color: #dc0000;
  position: absolute;
  font-size: 14px;
`;

interface TimerProps {
  initialMinutes: number;
}

export const Timer = memo(({ initialMinutes }: TimerProps) => {
  const INTERVAL = 1000;
  // 분 단위를 밀리초로 변환하여 초기 시간 설정
  const initialTimeInMs = initialMinutes * 60 * 1000;
  const [timeLeft, setTimeLeft] = useState<number>(initialTimeInMs);

  // 분, 초 계산
  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
    2,
    '0',
  );
  const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

  useEffect(() => {
    // 타이머가 0보다 크거나 같을 때에만 interval 실행
    if (timeLeft <= 0) {
      console.log('타이머가 종료되었습니다.');
      return; // 이미 종료되었으므로 interval 생성하지 않음
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= INTERVAL) {
          clearInterval(timer);
          console.log('타이머가 종료되었습니다.');
          return 0;
        }
        return prevTime - INTERVAL;
      });
    }, INTERVAL);

    // 컴포넌트 unmount 시 interval 클리어
    return () => clearInterval(timer);
  }, [timeLeft, INTERVAL]);

  return (
    <TimerWrapper>
      {minutes} : {seconds}
    </TimerWrapper>
  );
});
