import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navItemsList } from '@/lib/nav-list-items';

const HeaderNav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-row gap-2">
        {navItemsList.map(({ href, label_ua }) => {
          const isActive = pathname === href;

          return (
            <li key={label_ua}>
              <Link
                href={href}
                className={`relative px-2 py-2 text-sm lg:text-base xl:text-lg font-display font-black tracking-wide
                      ${
                        isActive
                          ? 'text-gold-middle-accent'
                          : 'text-foreground hover:text-gold-middle-accent'
                      }`}
              >
                {label_ua}

                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-middle-accent rounded-full" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderNav;
