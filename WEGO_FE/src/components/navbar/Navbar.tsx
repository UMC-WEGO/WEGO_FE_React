import React from 'react';
import * as S from './Navbar.style';
import myIcon from '../../images/feat1/Nav_MY_icon.svg';
import scrapIcon from '../../images/feat1/Nav_scrap_icon.svg';
import homeIcon from '../../images/feat1/Nav_home_icon.svg';
import boardIcon from '../../images/feat1/Nav_board_icon.svg';
import scheduleIcon from '../../images/feat1/Nav_schedule_icon.svg';

function Navbar() {
  return (
    <S.Navbar>
      <div>
        <img src={scheduleIcon} alt="" />
        <img src={boardIcon} alt="" />
        <img src={homeIcon} alt="" />
        <img src={scrapIcon} alt="" />
        <img src={myIcon} alt="" />
      </div>
    </S.Navbar>
  );
}

export default Navbar;
