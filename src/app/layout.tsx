import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/components/header';
import { ThemeModeScript } from 'flowbite-react';
import ReactQueryProvider from './Providers/react-query-provider';

export const metadata: Metadata = {
  title: 'The News',
  description: 'Notícias do mundo centralizadas em um único lugar'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <ReactQueryProvider>
          <Header />
          <div>{children}</div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
