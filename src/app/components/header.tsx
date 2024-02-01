'use client';
import { Navbar, DarkThemeToggle } from 'flowbite-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  weight: ['400', '400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const activeRoute = (category: string) => {
    return pathname.includes(category);
  };
  return (
    <Navbar fluid={true}>
      <Navbar.Brand href="/">
        <Image
          src={'/logo.png'}
          alt="Logo The News"
          width={40}
          height={30}
          className="mr-2 h-6 sm:h-9"
        />
        {isHomePage ? (
          <h1
            className={`${pacifico.className} self-center whitespace-nowrap text-xl font-semibold dark:text-white`}
          >
            TheNews
          </h1>
        ) : (
          <span
            className={`${pacifico.className} self-center whitespace-nowrap text-xl font-semibold dark:text-white`}
          >
            TheNews
          </span>
        )}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse style={{ alignItems: 'center' }}>
        <Navbar.Link href="/categories/general" active={activeRoute('general')}>
          Geral
        </Navbar.Link>
        <Navbar.Link
          href="/categories/business"
          active={activeRoute('business')}
        >
          Negócios
        </Navbar.Link>
        <Navbar.Link
          href="/categories/entertainment"
          active={activeRoute('entertainment')}
        >
          Entreterimento
        </Navbar.Link>
        <Navbar.Link href="/categories/health" active={activeRoute('health')}>
          Saúde
        </Navbar.Link>
        <Navbar.Link href="/categories/science" active={activeRoute('science')}>
          Ciência
        </Navbar.Link>
        <Navbar.Link href="/categories/sports" active={activeRoute('sports')}>
          Esportes
        </Navbar.Link>
        <Navbar.Link
          href="/categories/technology"
          active={activeRoute('technology')}
        >
          Tecnologia
        </Navbar.Link>
        <DarkThemeToggle className="md:hidden" />
      </Navbar.Collapse>
      <DarkThemeToggle className="hidden md:block" />
    </Navbar>
  );
}