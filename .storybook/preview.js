
import * as nextImage from 'next/image';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import theme from '../themes';
import 'tailwindcss/tailwind.css';

const queryClient = new QueryClient();

addDecorator(storyFn => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </QueryClientProvider>
));

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}