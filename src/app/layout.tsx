import '@mantine/core/styles.css';

import React, { ReactNode } from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { HeaderTabs } from './components/header/HeaderTabs';
// import { theme } from '../theme';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider /* theme={theme} */>
        <HeaderTabs />
        
        {children}</MantineProvider>
      </body>
    </html>
  );
}