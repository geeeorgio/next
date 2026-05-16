import Link from 'next/link';

import { navItemsList } from '@/lib/nav-list-items';

const FooterNav = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-1.5">
        {navItemsList.map(({ href, label_ua }) => (
          <li
            key={label_ua}
            className="text-sm lg:text-base font-medium transition-colors duration-300 text-foreground/70 hover:text-foreground"
          >
            <Link href={href} className={`pt-2 pb-2`}>
              {label_ua}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNav;
