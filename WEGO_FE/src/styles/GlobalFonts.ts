import { createGlobalStyle } from 'styled-components';

// 아직 적용은 하지 않음 (25.01.05)
const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;

export default GlobalFont;
