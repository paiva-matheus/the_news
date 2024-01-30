import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/components/header';

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
