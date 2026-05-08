'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LiaTelegramPlane } from 'react-icons/lia';

import { navItemsList } from '@/lib/nav-items';

import CustomButton from '../ui/CustomButton';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-header/60 w-full border-b border-b-gold-accent-muted/60 shadow-[0_-4px_20px_rgba(201,168,76,0.5)] sticky top-0 z-50 backdrop-blur-md">
      <div className="flex flex-row items-center justify-between px-1 py-1 md:px-2 md:py-1.5 lg:px-3 lg:py-2">
        <Link
          href="/"
          className="relative w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20
             filter drop-shadow-[0_5px_15px_rgba(224,184,79,0.4)]
             hover:drop-shadow-[0_8px_20px_rgba(224,184,79,0.6)]
             transition-all duration-300"
        >
          <Image
            src="/logo.png"
            alt="Кирилюк Людмила логотип"
            fill
            sizes="(max-width: 768px) 40px, (max-width: 1024px) 60px, 80px"
            priority
            className="object-contain"
          />
        </Link>

        <nav>
          <ul className="flex flex-row gap-2">
            {navItemsList.map(({ href, label_ua }) => {
              const isActive = pathname === href;

              return (
                <li key={label_ua}>
                  <Link
                    href={href}
                    className={`relative px-2.5 py-2 text-xs lg:text-base xl:text-lg font-display font-semibold transition-all duration-300
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
          <span className="text-foreground font-sans font-semibold text-xs lg:text-base">
            Написати в Telegram
          </span>
          <LiaTelegramPlane className="fill-gold-accent" />
        </CustomButton>
      </div>
    </header>
  );
};

export default Header;
