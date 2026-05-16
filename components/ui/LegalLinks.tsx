import Link from 'next/link';

import { legalLinks } from '@/lib/legal';

const LegalLinks = () => {
  return (
    <ul className="flex flex-col md:flex-row items-start p-2 md:p-3 lg:p-4 gap-3 md:gap-4 lg:gap-5 border-2 border-white/50">
      {legalLinks.map(({ label, href }) => (
        <li
          key={label}
          className="relative font-robo text-foreground/90 font-semibold text-sm after:absolute after:bottom-0 after:left-2 after:h-px after:w-0 after:bg-foreground/90 after:transition-all after:duration-300 hover:after:w-[calc(100%-16px)]"
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
