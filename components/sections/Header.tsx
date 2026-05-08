import Image from 'next/image';
import Link from 'next/link';
import { LiaTelegramPlane } from 'react-icons/lia';

import { navItemsList } from '@/lib/nav-items';

import CustomButton from '../ui/CustomButton';

const Header = () => {
  return (
    <header className="bg-header w-full border-b border-b-gold-accent-muted shadow-[0_4px_20px_rgba(201,168,76,0.3)]">
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

        <ul className="flex flex-row">
          {navItemsList.map(({ href, label_ua }) => (
            <li key={label_ua} className="">
              <Link
                href={href}
                className="block px-0.5 py-0.5 md:px-1 md:py-1 lg:px-1.5 lg:py-1.5 xl:px-2.5 xl:py-2.5 text-xs lg:text-base xl:text-lg text-foreground font-display font-semibold hover:text-gold-accent hover:[text-shadow:4px_6px_12px_rgba(201,168,76,0.5)] transition-all duration-300"
              >
                {label_ua}
              </Link>
            </li>
          ))}
        </ul>

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
