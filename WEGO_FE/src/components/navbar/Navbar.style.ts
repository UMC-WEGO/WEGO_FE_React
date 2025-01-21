import styled from 'styled-components';

const NavbarLayout = styled.div`
  max-width: var(--size-max-width);
  width: 100%;
  /* height: var(--size-navbar); */
  height: clamp(60px, 9vh, 90px);
  /* position: fixed; */
  /* bottom: 5%; */
  border-top: 1px solid rgba(165, 165, 165, 1);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
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
    height: 50px;
  }
`;

export { NavbarLayout, NavbarBox };
