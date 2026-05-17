import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
      <div className="absolute inset-y-0 left-0 w-11 rounded-full bg-primary-deep transition-[width,background-color] duration-500 ease-learn-more group-hover:w-full group-hover:bg-gold-middle-accent" />

      <div className="relative z-10 flex items-center justify-center">
        <ArrowRight className="w-5 h-5 text-gold-middle-accent group-hover:text-primary-deep transition-colors duration-300" />
      </div>

      <span className="relative z-10 text-xs md:text-sm font-bold uppercase tracking-widest text-primary-deep">
        {text}
      </span>
    </Link>
  );
};

export default DetailsLink;
