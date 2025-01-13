import * as S from './Temp.style';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { users } from '../../mocks/feat5/UserData.ts';
import grade1 from '../../images/feat5/score1.svg';
import grade2 from '../../images/feat5/score2.svg';
import grade3 from '../../images/feat5/score3.svg';
import grade4 from '../../images/feat5/score4.svg';
import grade5 from '../../images/feat5/score5.svg';
import TempInfo from '../../images/feat5/Temp_info.svg';
import TempBar from '../../images/feat5/Temp_bar.svg';
import TempDes from '../../images/feat5/Temp_description.svg';

interface GradeInfo {
  grade: string;
  imageUrl: string;
}

function TempContainer() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const { userId } = useParams();
  const user = users.find(user => user.userId === userId);
  if (!user) {
    return <div>찾을 수 없는 사용자</div>;
  }
  const toggleContent = (): void => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 3000);
  };

  const getGrade = (value: number): GradeInfo => {
    if (value <= 20) return { grade: '일반', imageUrl: grade1 };
    if (value <= 40) return { grade: '새싹', imageUrl: grade2 };
    if (value <= 60) return { grade: '탐험가', imageUrl: grade3 };
    if (value <= 80) return { grade: '자유영혼', imageUrl: grade4 };
    return { grade: '개척가', imageUrl: grade5 };
  };

  const tempValue: number = user.tempValue;
  const progressBarWidth = (tempValue / 100) * 93.5;

  return (
    <S.TempContainer>
      <S.TempHeader>
        <S.TempValueLabelWrapper>
          <S.TempValue>{tempValue}°C</S.TempValue>
          <S.TempButton onClick={toggleContent}>
            <S.TempLabel>즉흥 온도</S.TempLabel>
            <S.TempImage src={TempInfo} alt="온도정보 아이콘" />
          </S.TempButton>
        </S.TempValueLabelWrapper>
        <S.TempGrade>
          <img
            src={getGrade(tempValue).imageUrl}
            alt={getGrade(tempValue).grade}
          />
          <span>{getGrade(tempValue).grade}</span>
        </S.TempGrade>
      </S.TempHeader>

      {isClicked && (
        <S.TempInfoMessage>
          <img src={TempDes} alt="온도 설명" />
        </S.TempInfoMessage>
      )}

      <S.ProgressBarSection>
        <img src={TempBar} alt="온도 바" />
        <S.ProgressBarBar progress={progressBarWidth} />
      </S.ProgressBarSection>
    </S.TempContainer>
  );
}

export default TempContainer;
