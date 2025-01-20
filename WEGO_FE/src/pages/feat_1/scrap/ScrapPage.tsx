import React from 'react';
import * as S from './ScrapPage.style';
import Navbar from '../../../components/navbar/Navbar';
import ScrapBoard from '../../../components/feat1/scrapBoard/ScrapBoard';

function ScrapPage() {
  return (
    <S.ScrapPageLayout>
      <S.ViewContainer>
        <p>내가 스크랩한 글</p>
        <ScrapBoard />
        <Navbar />
      </S.ViewContainer>
    </S.ScrapPageLayout>
  );
}

export default ScrapPage;
