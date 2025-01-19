import React from 'react';
import * as S from './Navbar.style';
import myIcon from '../../images/feat1/Nav_MY_icon.svg';
import scrapIcon from '../../images/feat1/Nav_scrap_icon.svg';
import homeIcon from '../../images/feat1/Nav_home_icon.svg';
import boardIcon from '../../images/feat1/Nav_board_icon.svg';
import scheduleIcon from '../../images/feat1/Nav_schedule_icon.svg';
import { useNavigate } from 'react-router';

function Navbar() {
  const navigate = useNavigate();
  return (
    <S.NavbarLayout>
      <S.NavbarBox>
        <img src={scheduleIcon} alt="" onClick={() => navigate('/schedule')} />
        <img src={boardIcon} alt="" onClick={() => navigate('/board')} />
        <img src={homeIcon} alt="" onClick={() => navigate('/home')} />
        <img src={scrapIcon} alt="" onClick={() => navigate('/mypage/1')} />
        <img src={myIcon} alt="" onClick={() => navigate('/mypage/1')} />
      </S.NavbarBox>
    </S.NavbarLayout>
  );
}

export default Navbar;
