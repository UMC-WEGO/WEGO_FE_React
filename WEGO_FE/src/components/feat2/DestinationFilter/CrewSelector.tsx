import * as S from './FilterStyle'

interface CrewSelectorProps {
  numAdult: number;
  setNumAdult: any;
  numChild: number;
  setNumChild: any;
}

const CrewSelector = ({ numAdult, setNumAdult, numChild, setNumChild }: CrewSelectorProps) => {
  // 인원수 증감
  const UpAdult = () => { setNumAdult(numAdult + 1); }
  const DownAdult = () => { setNumAdult(numAdult - 1);   }
  const UpChild = () => { setNumChild(numChild + 1);   }
  const DownChild = () => { setNumChild(numChild - 1);  }

  // 인원수 감소 버튼 활성화 상태 (음수 방지)
  return (
    <S.ContentBox>
      <S.CrewRow>
        <span style={{fontSize: "20px", fontWeight: "600"}}>성인</span>
        <span>
            <S.AlterNumBtn onClick={ DownAdult } disabled={numAdult <= 0}> - </S.AlterNumBtn>
            <span style={{margin: "13px"}}>{numAdult}</span>
            <S.AlterNumBtn onClick={ UpAdult }> + </S.AlterNumBtn>
        </span>
      </S.CrewRow>
      <S.CrewRow>
        <span>
            <div style={{fontSize: "20px", fontWeight: "600"}}>아동</div>
            <div style={{fontSize: "10px", fontWeight: "500", color: "rgba(138, 138, 138, 1)"}}>총 아동 {"("}만 0세 ~ 17세{")"} 수</div>
        </span>
        <span>
            <S.AlterNumBtn onClick={ DownChild } disabled={numChild <= 0}> - </S.AlterNumBtn>
            <span style={{margin: "13px"}}>{numChild}</span>
            <S.AlterNumBtn onClick={ UpChild }> + </S.AlterNumBtn>
        </span>
      </S.CrewRow>
    </S.ContentBox>
  )
}

export default CrewSelector;