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
    <header className="bg-header/80 backdrop-blur-xl w-full border-b border-b-gold-accent-muted/60 shadow-[0_4px_16px_rgba(201,168,76,0.3)] sticky top-0 z-50">
      <div className="flex flex-row items-center justify-between px-1 py-1 md:px-2 md:py-1.5 lg:px-3 lg:py-2">
        <LogoLink />

        <nav>
          <ul className="flex flex-row gap-2">
            {navItemsList.map(({ href, label_ua }) => {
              const isActive = pathname === href;

              return (
                <li key={label_ua}>
                  <Link
                    href={href}
                    className={`relative px-2.5 py-2 text-sm lg:text-base xl:text-lg font-display hover:[text-shadow:0_0_12px_rgba(224,184,79,0.35)] font-semibold transition-all duration-300
                      ${
                        isActive
                          ? 'text-gold-accent [text-shadow:0_0_12px_rgba(224,184,79,0.4)]'
                          : 'text-foreground hover:text-gold-accent'
                      }`}
                  >
                    {label_ua}

                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-accent rounded-full shadow-[0_0_8px_#e0b84f]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <CustomButton>
          <span className="text-foreground font-sans font-semibold text-sm lg:text-base">
            Написати в Telegram
          </span>
          <LiaTelegramPlane className="fill-gold-accent" />
        </CustomButton>
      </div>
    </header>
  );
};

export default Header;
