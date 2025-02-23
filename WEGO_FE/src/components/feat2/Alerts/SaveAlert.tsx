import * as S from './AlertsStyle.ts'

const SaveAlertCard = ({ 
  message, 
  downMessage, 
  SavePlan 
}: {
  message: string, 
  downMessage: () => void, 
  SavePlan: () => void
}) => {
  return(
    <S.BackgroundOverlay>
      <S.CardBox>
        <S.MessageBox>{message}</S.MessageBox>
        <div>
          <S.BtnBox onClick={downMessage}>
            <S.NoText>취소</S.NoText>
          </S.BtnBox>
          <S.BtnBox 
            onClick={() => {
              SavePlan(); 
              downMessage();
            }}
          >
            <S.YesText>확인</S.YesText>
          </S.BtnBox>        
        </div>
      </S.CardBox>
    </S.BackgroundOverlay>
  )
}

export default SaveAlertCard;