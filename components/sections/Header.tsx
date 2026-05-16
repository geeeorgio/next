'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LiaTelegramPlane } from 'react-icons/lia';

import { navItemsList } from '@/lib/nav-items';

import CustomButton from '../ui/CustomButton';
import LogoLink from '../ui/LogoLink';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-header/92 backdrop-blur-sm w-full border-b border-b-gold-accent-muted/30 shadow-[0_4px_20px_rgba(0,0,0,0.18)] sticky top-0 z-50 px-3 md:px-4 lg:px-6">
      <div className="flex flex-row items-center justify-between py-4">
        <LogoLink />

        <nav>
          <ul className="flex flex-row gap-2">
            {navItemsList.map(({ href, label_ua }) => {
              const isActive = pathname === href;

              return (
                <li key={label_ua}>
                  <Link
                    href={href}
                    className={`relative px-2 py-2 text-sm lg:text-base xl:text-lg font-display hover:[text-shadow:0_0_12px_rgba(212, 175, 55, 0.4)] font-black tracking-wide transition-all duration-300
                      ${
                        isActive
                          ? 'text-gold-middle-accent [text-shadow:0_0_12px_rgba(212, 175, 55, 0.4)]'
                          : 'text-foreground hover:text-gold-middle-accent'
                      }`}
                  >
                    {label_ua}

                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-middle-accent rounded-full shadow-[0_0_8px_rgba(212, 175, 55, 0.4)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <CustomButton>
          <span className="text-foreground font-sans font-semibold text-sm">
            Написати в Telegram
          </span>
          <LiaTelegramPlane size={18} className="fill-gold-accent" />
        </CustomButton>
      </div>
    </header>
  );
};

export default Header;
