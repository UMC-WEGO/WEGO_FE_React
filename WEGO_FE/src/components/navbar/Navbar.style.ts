import styled from 'styled-components';

const NavbarLayout = styled.div`
  max-width: var(--size-max-width);
  width: 100%;
  height: var(--size-navbar);
  position: fixed;
  bottom: 5%;
  border-top: 1px solid rgba(165, 165, 165, 1);
  /* background-color: rgba(
    165,
    165,
    165,
    0.4
  ); // navbar가 페이지보다 더 z축에서 위에 표현 됨 */
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavbarBox = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 20px;
  img {
    width: 50px;
    height: 60px;
  }
`;

export { NavbarLayout, NavbarBox };
