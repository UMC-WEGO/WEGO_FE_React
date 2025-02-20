import * as S from './AlertsStyle.ts'

const NoteAlertCard = ({ message, downMessage }: {message: string, downMessage: () => void}) => {
  return(
    <S.CardBox>
      <S.MessageBox>
        {message}        
      </S.MessageBox>
      <div>
        <S.OneBtnBox onClick={downMessage}>
          <S.YesText>
            확인
          </S.YesText>
        </S.OneBtnBox>     
      </div>
    </S.CardBox>
  )
}

export default NoteAlertCard;