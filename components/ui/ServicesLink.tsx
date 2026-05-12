import Link from 'next/link';

import type { PageRoutesTypes } from '@/types/client-types';

interface ServicesLinkProps {
  src: PageRoutesTypes;
  text: string;
}

const ServicesLink = ({ src, text }: ServicesLinkProps) => {
  return (
    <Link
      href={src}
      className="group relative inline-flex items-center justify-center px-4 py-4 lg:px-6 lg:py-5 active:scale-95 transition-transform duration-500 overflow-hidden"
    >
      <div className="absolute inset-y-0 left-0 w-0 bg-linear-to-r from-gold-accent-sand via-gold-middle-accent/85 to-gold-accent/60 transition-[width] duration-500 ease-learn-more group-hover:w-[50%]" />

      <div className="absolute inset-y-0 right-0 w-0 bg-linear-to-l from-gold-accent-sand via-gold-middle-accent/85 to-gold-accent/60 transition-[width] duration-500 ease-learn-more group-hover:w-[50%]" />

      <span className="absolute inset-0 z-10">
        <span className="absolute left-0 top-0 w-3 h-3 border-t-2 border-l-2 border-foreground-muted group-hover:border-foreground transition-all duration-500 group-hover:w-5 group-hover:h-5" />
        <span className="absolute left-0 bottom-0 w-3 h-3 border-b-2 border-l-2 border-foreground-muted group-hover:border-foreground transition-all duration-500 group-hover:w-5 group-hover:h-5" />
      </span>

      <span className="absolute inset-0 z-10">
        <span className="absolute right-0 top-0 w-3 h-3 border-t-2 border-r-2 border-foreground-muted group-hover:border-foreground transition-all duration-500 group-hover:w-5 group-hover:h-5" />
        <span className="absolute right-0 bottom-0 w-3 h-3 border-b-2 border-r-2 border-foreground-muted group-hover:border-foreground transition-all duration-500 group-hover:w-5 group-hover:h-5" />
      </span>

      <span className="relative z-20 text-sm md:text-base font-semibold uppercase tracking-[0.2em] px-2 text-foreground/80 group-hover:text-foreground transition-colors duration-500">
        {text}
      </span>
    </Link>
  );
};

export default ServicesLink;
