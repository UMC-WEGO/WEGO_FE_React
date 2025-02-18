import * as S from './AlertsStyle.ts'

const DltAlertCard = ({ message, downMessage, deletePlan }: {message: string, downMessage: () => void, deletePlan: () => void}) => {
  return(
    <S.CardBox>
      <S.MessageBox>
        {message}        
      </S.MessageBox>
      <div>
        <S.BtnBox onClick={downMessage}>
          취소
        </S.BtnBox>
        <S.BtnBox onClick={() => {deletePlan(); downMessage()}}>
          삭제
        </S.BtnBox>        
      </div>
    </S.CardBox>
  )
}

export default DltAlertCard;