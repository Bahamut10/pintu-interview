import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import themes from '../themes';
import '../styles/globals.css';
import { MarketContextProvider } from '../contexts/MarketContext';

const queryClient = new QueryClient();

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <MarketContextProvider>
      <ThemeProvider theme={themes}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </ThemeProvider>
    </MarketContextProvider>
  );
}

export default MyApp;
