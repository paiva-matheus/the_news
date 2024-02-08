import Image from 'next/image';
import { Metadata } from 'next/types';
import { PT_Sans } from 'next/font/google';

const ptSans = PT_Sans({
  weight: ['700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'The News - 404 Page Not Found'
};

export default function Custom404() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center mx-auto max-w-screen-lg py-8 min-h-screen">
        <h1
          className={`font-bold text-3xl py-8 ${ptSans.className} text-slate-700`}
        >
          Page Not Found
        </h1>
        <Image
          src="/404.png"
          alt="Page not found"
          width={1100}
          height={730}
          className="max-w-[80%]"
        />
      </div>
    </main>
  );
}
