import { Outlet } from 'react-router-dom';
import * as S from './AppLayout.style';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';

const RootLayout = () => {
  return (
    <S.AppContainer>
      <Header />
      <S.OutletContainer>
        <Outlet />
      </S.OutletContainer>
      <Navbar />
    </S.AppContainer>
  );
};

export default RootLayout;
