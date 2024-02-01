import { ReactNode } from 'react';
import { PT_Sans } from 'next/font/google';

const ptSans = PT_Sans({
  weight: ['700'],
  subsets: ['latin']
});

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2
      className={`font-bold text-3xl py-8 text-center dark:text-white ${ptSans.className}`}
    >
      {children}
    </h2>
  );
}
