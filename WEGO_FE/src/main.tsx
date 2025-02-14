import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import GlobalStyle from './styles/GlobalStyles';
import GlobalFont from './styles/GlobalFonts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// QueryClient 인스턴스 생성
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // 실패 시 1번 재시도
      staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선하다고 간주
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <GlobalFont />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
