import Link from 'next/link';

import { legalLinks } from '@/lib/legal';

const LegalLinks = () => {
  return (
    <ul className="flex flex-col md:flex-row items-start p-2 md:p-3 lg:p-4 gap-3 md:gap-4 lg:gap-5 border border-white/50">
      {legalLinks.map(({ label, href }) => (
        <li
          key={label}
          className="group relative
          text-sm font-robo font-semibold
          text-foreground/85 hover:text-foreground transition-colors duration-300
          after:absolute after:bottom-0 after:left-2 after:h-px
          after:w-[calc(100%-16px)]
          after:origin-left
          after:scale-x-0
          after:bg-foreground
          after:transition-transform after:duration-300
          hover:after:scale-x-100
          "
        >
          <Link href={href} className="p-2 inline-block">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LegalLinks;
