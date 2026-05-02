import Image from 'next/image';
import Link from 'next/link';

import { navItemsList } from '@/lib/nav-items';

const Header = () => {
  return (
    <header className="bg-header border-b border-b-gold-accent-muted shadow-[0_4px_20px_rgba(201,168,76,0.3)]">
      <div className="flex flex-row items-center px-6 py-3">
        <Link
          href="/"
          className="mr-8 border rounded-full border-neutral-500 shadow-[0_4px_16px_rgba(145,172,0,0.25)]"
        >
          <Image src="/logo.png" alt="Кирилюк Людмила логотип" width={50} height={50} priority />
        </Link>

        <ul className="flex flex-row">
          {navItemsList.map(({ href, label }) => (
            <li key={label} className="">
              <Link
                href={href}
                className="block px-4 py-2 text-lg text-foreground font-display hover:text-gold-accent hover:[text-shadow:0_0_12px_rgba(201,168,76,0.5)] transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
