import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import GlobalStyle from './styles/GlobalStyles';
import GlobalFont from './styles/GlobalFonts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <GlobalFont />
    <App />
  </StrictMode>,
);
