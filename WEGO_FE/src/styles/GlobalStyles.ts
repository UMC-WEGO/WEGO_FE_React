import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    /* color */
    --color-black: #000000;
    --color-gray-700: #262626; // 38 38 38
    --color-gray-600: #424242; // 66 66 66
    --color-gray-500: #696969; // 105 105 105
    --color-gray-400: #a5a5a5; // 165 165 165
    --color-gray-300: #d9d9d9; // 217 217 217
    --color-gray-200: #eaeaea; // 234 234 234
    --color-gray-100: #f6f6f6; // 246 246 246
    --color-white: #ffffff;

    --color-main-blue: #0059FF;
    --color-kakao-yellow: #FEE500;
    --color-naver-green: #03C75A;

    /* size => 어떻게 할까 고민중 (내일 회의에 물어보자) */ 
    --size-max-width: 420px;
    --size-min-width: 393px;
    --size-min-height: 852px;
    --size-max-height: 852px;
    --size-navbar: 9vh;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: min(100%, var(--size-max-width));
    height: 100vh;
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: hidden;
      max-width: var(--size-max-width);
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
