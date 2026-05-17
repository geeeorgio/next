'use client';

import { useScrollDirection } from '@/hooks/useScrollDirection';

import HeaderNav from '../ui/HeaderNav';
import LogoLink from '../ui/LogoLink';
import TelegramLink from '../ui/TelegramLink';

const Header = () => {
  const isVisible = useScrollDirection();

  return (
    <header
      className={`bg-header/95 w-full border-b border-b-gold-accent-muted/30 fixed top-0 left-0 z-50 px-3 md:px-4 lg:px-6 duration-1000 ease-in-out transition-transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="flex flex-row items-center justify-between py-4">
        <LogoLink />

        <HeaderNav />

        <TelegramLink />
      </div>
    </header>
  );
};

export default Header;
