import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

import type { PageRoutesTypes } from '@/types/client-types';

interface DetailsLinkProps {
  src: PageRoutesTypes;
  text: string;
}

const DetailsLink = ({ src, text }: DetailsLinkProps) => {
  return (
    <Link
      href={src}
      className="group relative inline-flex self-center items-center gap-4 lg:gap-5 py-3 px-3 active:scale-95 transition-transform"
    >
      <div className="absolute inset-y-0 left-0 w-11 rounded-full border border-gold-middle-accent/45 bg-primary-deep/80 transition-all duration-500 ease-learn-more group-hover:w-full group-hover:bg-gold-accent" />

      <div className="relative z-10 flex items-center justify-center transition-transform duration-500 ease-learn-more group-hover:translate-x-1.5">
        <FaArrowRight
          size={20}
          className="text-foreground group-hover:text-primary-deep transition-colors duration-300"
        />
      </div>

      <span className="relative z-10 text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/70 group-hover:text-primary-deep transition-all duration-300 pr-1">
        {text}
      </span>
    </Link>
  );
};

export default DetailsLink;
