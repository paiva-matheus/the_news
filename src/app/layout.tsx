import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/src/app/components/header';
import { ThemeModeScript } from 'flowbite-react';
import ReactQueryProvider from '@/providers/react-query-provider';
import { Footer } from './components/footer';

export const metadata: Metadata = {
  title: 'The News',
  description: 'World news centralized in one place'
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
        <Footer />
      </body>
    </html>
  );
}
