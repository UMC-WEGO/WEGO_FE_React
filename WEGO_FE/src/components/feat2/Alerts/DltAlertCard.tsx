import * as S from './AlertsStyle.ts'

const DltAlertCard = ({ message, downMessage, deletePlan }: {message: string, downMessage: () => void, deletePlan: () => void}) => {
  return(
    <S.CardBox>
      <S.MessageBox>
        {message}        
      </S.MessageBox>
      <div>
        <S.BtnBox onClick={downMessage}>
          <S.NoText>
            취소
          </S.NoText>
        </S.BtnBox>
        <S.BtnBox onClick={() => {deletePlan(); downMessage()}}>
          <S.YesText>
            삭제
          </S.YesText>
        </S.BtnBox>        
      </div>
    </S.CardBox>
  )
}

export default DltAlertCard;