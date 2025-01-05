import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    /* color */
    --color-gray-700: #262626;
    --color-gray-600: #424242;
    --color-gray-500: #696969;
    --color-gray-400: #a5a5a5;
    --color-gray-300: #d9d9d9;
    --color-gray-200: #eaeaea;
    --color-gray-100: #f6f6f6;
    --color-white: #ffffff;

    --color-main-blue: #0059FF;
    --color-kakao-yellow: #FEE500;
    --color-naver-green: #03C75A;

    /* size => 어떻게 할까 고민중 (내일 회의에 물어보자) */ 
    --size-max-width: 640px;
    --size-inner-max-width: 590px;
    --size-min-width: 393px;
    --size-header: 80px;
    --size-navbar: 89px;
    --size-side-gap: 24px;  
    --size-logo: 97px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: min(100%, var(--size-max-width));
    margin: 0 auto;
    background-color: #ffffff;
    font-family: 'Pretendard-Regular';
    overflow: hidden;

    #portal {
      height: 100vh;
      position: absolute;
      overflow: hidden;
      z-index: 1;
    }

    #root {
      height: 100vh;
      position: absolute;
      overflow: hidden;
      max-width: var(--size-max-width);
      width: 100%;
    }

    h1, h2, span, div {
      user-select: none;
    }

    button {
      cursor: pointer;
      font: inherit;
      color: inherit;
      border: 0;
    }
  }
`;

export default GlobalStyle;
