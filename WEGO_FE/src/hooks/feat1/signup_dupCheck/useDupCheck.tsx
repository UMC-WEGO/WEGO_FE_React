import React, { useCallback, useEffect, useState } from 'react';
import { emailDupCheckApi } from '../../../apis/feat1/signupApis';
import {
  TEmailDupCheckApiReqData,
  TNicknameDupCheckApiReqData,
} from '../../../types/SignUpFormData';
import debounce from 'lodash/debounce';

type TApiResponse = {
  isSuccess: boolean;
  code: number;
  message: string;
};

type TDupCheckProps = {
  checkType: 'email' | 'nickname';
  checkData: TEmailDupCheckApiReqData | TNicknameDupCheckApiReqData;
  dupCheckApi: (
    data: TEmailDupCheckApiReqData | TNicknameDupCheckApiReqData,
  ) => Promise<TApiResponse>;
};

type TUseDupCheckReturn = {
  isAvailable: boolean;
  dupCheckLogic: (data) => Promise<void>;
  // debouncedDupCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  debouncedDupCheck: (data) => void;
  errorMsg: string;
};

function useDupCheck({
  checkType,
  checkData,
  dupCheckApi,
}: TDupCheckProps): TUseDupCheckReturn {
  const [isAvailable, setIsAvailable] = useState(false); // 중복검사 결과 저장
  const [errorMsg, setErrorMsg] = useState('');

  // api 사용 로직
  const dupCheckLogic = useCallback(
    async data => {
      const apiRes = await dupCheckApi(data);
      console.log(data, apiRes, 'API 호출됨');
      if (apiRes?.code % 100 != 2) {
        setIsAvailable(false);
        setErrorMsg(apiRes.message);
      }
      setIsAvailable(apiRes.isSuccess);
    },
    [dupCheckApi],
  );

  // 로직의 디바운스화 -> 이걸 커스텀 인풋 온체인지 핸들러에 포함시킴
  const debouncedDupCheck = useCallback(
    debounce(data => {
      dupCheckLogic(data);
    }, 500),
    [dupCheckLogic], // dupCheckLogic이 바뀌면 debounce 함수도 갱신
  );

  useEffect(() => {
    return () => {
      // 컴포넌트 언마운트 시 디바운스 타이머 클리어
      debouncedDupCheck.cancel();
    };
  }, [debouncedDupCheck]);

  return { isAvailable, dupCheckLogic, debouncedDupCheck, errorMsg };
}

export default useDupCheck;
