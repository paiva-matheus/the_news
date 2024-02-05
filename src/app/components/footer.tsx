import { Footer as FlowbiteFooter } from 'flowbite-react';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  weight: ['400', '400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

export function Footer() {
  return (
    <FlowbiteFooter container style={{ borderRadius: '0' }}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Brand
            href="/"
            src="/logo.png"
            alt="The News Logo"
            name="The News"
            className={`${pacifico.className}`}
          />
          <FlowbiteFooter.LinkGroup>
            <FlowbiteFooter.Link href="#">About</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="#">Licensing</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="#">Contact</FlowbiteFooter.Link>
          </FlowbiteFooter.LinkGroup>
        </div>
        <FlowbiteFooter.Divider />
        <FlowbiteFooter.Copyright href="/" by="The News" year={2024} />
      </div>
    </FlowbiteFooter>
  );
}
