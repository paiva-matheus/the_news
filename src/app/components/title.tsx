import { ReactNode } from 'react';
import { PT_Sans } from 'next/font/google';

const montserrat = PT_Sans({
  weight: ['700'],
  subsets: ['latin']
});

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2
      className={`font-bold text-3xl py-5 dark:text-white ${montserrat.className}`}
    >
      {children}
    </h2>
  );
}
