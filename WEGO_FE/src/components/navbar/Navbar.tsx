import React from 'react';
import * as S from './Navbar.style';
import myIcon from '../../images/feat1/Nav_MY_icon.svg';
import scrapIcon from '../../images/feat1/Nav_scrap_icon.svg';
import homeIcon from '../../images/feat1/Nav_home_icon.svg';
import boardIcon from '../../images/feat1/Nav_board_icon.svg';
import scheduleIcon from '../../images/feat1/Nav_schedule_icon.svg';
import myIcon_gray from '../../images/feat1/Nav_MY_gray.svg';
import scrapIcon_gray from '../../images/feat1/Nav_scrap_gray.svg';
import homeIcon_gray from '../../images/feat1/Nav_home_gray.svg';
import boardIcon_gray from '../../images/feat1/Nav_board_gray.svg';
import scheduleIcon_gray from '../../images/feat1/Nav_schedule_gray.svg';
import { useNavigate } from 'react-router';
import { userinfoApis } from '../../apis/feat5/userinfoApis';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router';

function Navbar() {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ['userData'],
    queryFn: userinfoApis,
  });

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <S.NavbarLayout>
      <S.NavbarBox>
        <img
          src={
            currentPath.includes('/schedule') ? scheduleIcon : scheduleIcon_gray
          }
          alt=""
          onClick={() => navigate('/schedule')}
        />
        <img
          src={currentPath.includes('/board') ? boardIcon : boardIcon_gray}
          alt=""
          onClick={() => navigate('/board')}
        />
        <img
          src={currentPath.includes('/home') ? homeIcon : homeIcon_gray}
          alt=""
          onClick={() => navigate('/home')}
        />
        <img
          src={currentPath.includes('/scrap') ? scrapIcon : scrapIcon_gray}
          alt=""
          onClick={() => navigate('/scrap')}
        />
        <img
          src={currentPath.includes('/mypage') ? myIcon : myIcon_gray}
          alt=""
          onClick={() => navigate('/mypage/' + data?.user_id)}
        />
      </S.NavbarBox>
    </S.NavbarLayout>
  );
}

export default Navbar;
