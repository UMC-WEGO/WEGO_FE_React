import React, { useEffect, useState } from 'react';
import * as S from '../../../pages/feat_1/signup/SignupPage.style';
import * as SS from './_SignUpSubPage.style';
import Input from '../../../components/feat1/input/Input';
import Button from '../../../components/feat1/button/Button';
import termsAllCheckedIcon from '../../../images/feat1/terms_all_checked.svg';
import termsAllNonCheckedIcon from '../../../images/feat1/terms_all_nonChecked.svg';
import detailViewArrow from '../../../images/feat1/terms_detailViewOpenIcon.svg';
import termItemCheckedIcon from '../../../images/feat1/terms_item_checked.svg';
import termItemNonCheckedIcon from '../../../images/feat1/terms_item_nonChecked.svg';

import styled from 'styled-components';
import { Navigate, useNavigate } from 'react-router';
const TermsInputsBox = styled(S.SignUpInputsBox)`
  width: 100%;
  align-items: flex-start;
  gap: 20px;
`;
const TermsAllCheckBox = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid var(--color-gray-200);
  font-family: Pretendard-SemiBold;
  font-size: 20px;
  gap: 10px;
  color: var(--color-gray-700);

  img {
    cursor: pointer;
  }
`;
const TermItemCheckBox = styled.div`
  width: 100%;
  height: 20px;
`;
const TermItemAgreeIcon = styled.img`
  position: relative;
  left: 3px;
  cursor: pointer;
  margin-right: 10px;
`;
const TermDetailArrow = styled.img`
  position: absolute;
  right: 25px;
`;

function TermsView({
  returnsOfUseForm,
}: {
  returnsOfUseForm: TReturnsOfUseForm;
}) {
  const navigate = useNavigate();
  const nextText = '다음';

  const { register, formState } = returnsOfUseForm;
  const { errors } = formState;

  const [istNextReady, setIsNextReady] = useState(false);
  // 전체 동의 버튼 상태 (개별적으로 다 동의 버튼 눌러도 활성화됨)
  const [isAllAgreeButtonChecked, setIsAllAgreeButtonChecked] = useState(false);
  const [isServiceTermAgree, setIsServiceTermAgree] = useState(false);
  const [isPrivateInfoAgree, setIsPrivateInfoAgree] = useState(false);
  const [isPrivateInfoProvideAgree, setIsPrivateInfoProvideAgree] =
    useState(false);
  const [isMoreThan14, setIsMoreThan14] = useState(false);
  const [isMarketingAgree, setIsMarketingAgree] = useState(false);
  const [isMarketingInfoReceiveAgree, setIsMarketingInfoReceiveAgree] =
    useState(false);

  const handleClickAllItemAgree = () => {
    // 상태 변경을 동시에 해야하는 경우 한 로직에 몰아서 사용해야 리렌더링 추적이 원활한 느낌?
    // 체크 버튼 상태를 체크 되어 있는 상태로 바꿈
    setIsAllAgreeButtonChecked(true);

    // 하위 약관들 모두 동의
    setIsServiceTermAgree(true);
    setIsPrivateInfoAgree(true);
    setIsPrivateInfoProvideAgree(true);
    setIsMoreThan14(true);
    setIsMarketingAgree(true);
    setIsMarketingInfoReceiveAgree(true);

    // 넘어갈 수 있게 됨
    setIsNextReady(true);
  };

  const handleClickAllItemAgreeReverse = () => {
    setIsAllAgreeButtonChecked(false);

    setIsServiceTermAgree(false);
    setIsPrivateInfoAgree(false);
    setIsPrivateInfoProvideAgree(false);
    setIsMoreThan14(false);
    setIsMarketingAgree(false);
    setIsMarketingInfoReceiveAgree(false);

    setIsNextReady(false);
  };

  const handleNextButtonOn = () => {
    setIsNextReady(true);
  };

  const handleNextButtonOff = () => {
    setIsNextReady(false);
  };

  const handleAllAgreeOff = () => {
    setIsAllAgreeButtonChecked(false);
  };

  useEffect(() => {
    // 기본적으로는 다음버튼, 전체동의 상태 off
    handleNextButtonOff();
    handleAllAgreeOff();

    // 개별적으로 필수 항목에 모두 동의한 경우를 추적해서 handleNextButtonOn 함수 실행
    if (
      isServiceTermAgree &&
      isPrivateInfoAgree &&
      isPrivateInfoProvideAgree &&
      isMoreThan14
    ) {
      handleNextButtonOn();
    }

    // 개별적으로 모든 항목에 동의한 경우를 추적해서 handleClickAllItemAgree 함수 실행
    if (
      isServiceTermAgree &&
      isPrivateInfoAgree &&
      isPrivateInfoProvideAgree &&
      isMoreThan14 &&
      isMarketingAgree &&
      isMarketingInfoReceiveAgree
    ) {
      handleClickAllItemAgree();
    }
  }, [
    isServiceTermAgree,
    isPrivateInfoAgree,
    isPrivateInfoProvideAgree,
    isMoreThan14,
    isMarketingAgree,
    isMarketingInfoReceiveAgree,
  ]);

  return (
    <SS.SignUpViewSection>
      <SS.SignUpTextBox>
        이용약관에<br></br>동의해주세요.
      </SS.SignUpTextBox>
      <TermsInputsBox>
        <TermsAllCheckBox>
          <TermItemAgreeIcon
            src={
              isAllAgreeButtonChecked
                ? termsAllCheckedIcon
                : termsAllNonCheckedIcon
            }
            alt="약관 전체 동의 아이콘"
            onClick={
              !isAllAgreeButtonChecked // 체크되어 있지 않은 상태에서는
                ? handleClickAllItemAgree // 모두 동의하는 기능
                : handleClickAllItemAgreeReverse // 반대 경우의 기능
            }
          />
          <span>전체 동의</span>
        </TermsAllCheckBox>
        <TermItemCheckBox>
          <TermItemAgreeIcon
            src={
              isServiceTermAgree ? termItemCheckedIcon : termItemNonCheckedIcon
            }
            alt="위고 서비스 이용약관 동의 아이콘"
            onClick={() => setIsServiceTermAgree(prev => !prev)}
          />
          <span>[필수] 위고 서비스 이용약관 동의</span>
          <TermDetailArrow
            src={detailViewArrow}
            alt="위고 서비스 이용약관 자세히보기"
          />
        </TermItemCheckBox>
        <TermItemCheckBox>
          <TermItemAgreeIcon
            src={
              isPrivateInfoAgree ? termItemCheckedIcon : termItemNonCheckedIcon
            }
            alt="개인정보 수집·이용 동의 아이콘"
            onClick={() => setIsPrivateInfoAgree(prev => !prev)}
          />
          <span>[필수] 개인정보 수집·이용 동의</span>
          <TermDetailArrow
            src={detailViewArrow}
            alt=" 개인정보 수집·이용 자세히보기"
          />
        </TermItemCheckBox>
        <TermItemCheckBox>
          <TermItemAgreeIcon
            src={
              isPrivateInfoProvideAgree
                ? termItemCheckedIcon
                : termItemNonCheckedIcon
            }
            alt=""
            onClick={() => setIsPrivateInfoProvideAgree(prev => !prev)}
          />
          <span>[필수] 개인정보 제 3자 제공 동의</span>
        </TermItemCheckBox>
        <TermItemCheckBox>
          <TermItemAgreeIcon
            src={isMoreThan14 ? termItemCheckedIcon : termItemNonCheckedIcon}
            alt=""
            onClick={() => setIsMoreThan14(prev => !prev)}
          />
          <span>[필수] 만 14세 이상입니다.</span>
        </TermItemCheckBox>
        <TermItemCheckBox>
          <TermItemAgreeIcon
            src={
              isMarketingAgree ? termItemCheckedIcon : termItemNonCheckedIcon
            }
            alt=""
            onClick={() => setIsMarketingAgree(prev => !prev)}
          />
          <span>[선택] 마케팅 활용 동의</span>
        </TermItemCheckBox>
        <TermItemCheckBox>
          <TermItemAgreeIcon
            src={
              isMarketingInfoReceiveAgree
                ? termItemCheckedIcon
                : termItemNonCheckedIcon
            }
            alt=""
            onClick={() => setIsMarketingInfoReceiveAgree(prev => !prev)}
          />
          <span>[선택] 마케팅 정보 수신에 대한 동의</span>
        </TermItemCheckBox>
        <Button
          type={'submit'}
          color={istNextReady ? '--color-main-blue' : '--color-gray-300'} // css 전역변수명을 그대로 사용 -> 받아서 var()로 처리
          content={nextText}
          disabled={!istNextReady} // 준비가 안되면 사용불가
          onClickHandler={() => {
            // 여기에 register 상태 termsAgree true로 전달
            navigate('/signup/nickname');
          }}
        ></Button>
      </TermsInputsBox>
    </SS.SignUpViewSection>
  );
}

export default TermsView;
