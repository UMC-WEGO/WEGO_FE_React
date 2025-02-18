import * as S from './AlertsStyle.ts'

const SaveAlertCard = ({ message, downMessage, SavePlan }: {message: string, downMessage: () => void, SavePlan: () => void}) => {
  return(
    <S.CardBox>
      <S.MessageBox>
        {message}        
      </S.MessageBox>
      <div>
        <S.BtnBox onClick={downMessage}>
          취소
        </S.BtnBox>
        <S.BtnBox onClick={() => {SavePlan(); downMessage()}}>
          확인
        </S.BtnBox>        
      </div>
    </S.CardBox>
  )
}

export default SaveAlertCard;