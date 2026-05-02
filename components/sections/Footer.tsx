import Link from 'next/link';

import { navItemsList } from '@/lib/nav-items';

const Footer = () => {
  return (
    <footer className="bg-footer border-t border-t-gold-accent-muted shadow-[0_4px_20px_rgba(201,168,76,0.3)]">
      <ul>
        {navItemsList.map(({ href, label }) => (
          <li key={label}>
            <Link href={href} className="text-foreground font-display">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
