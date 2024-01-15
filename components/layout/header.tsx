'use client';
import { useState, useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/logo.png';
import Logo_white from '@/assets/images/logo_white.png';
import Navigation from './navigation';
import MenuToggle from '@/components/common/menu-toggle';

export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true);
  const pathName = usePathname();
  const theme: string = ['/', '/booking'].includes(pathName) ? 'light' : 'dark';
  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${theme === 'dark' || !isAtTop ? 'bg-black-dark' : 'bg-transparent'}`}>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className="flex justify-between items-center;"
      >
        <Link href="/">
          <Image
            className="w-[110px] lg:w-[196px]"
            src={Logo_white}
            alt="logo"
            priority
          />
        </Link>
        <Navigation toggle={() => toggleOpen()} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </header>
  );
}
