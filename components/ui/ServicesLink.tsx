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
      <div className="absolute inset-y-0 left-0 w-0 bg-gold-middle-accent transition-[width] duration-500 ease-learn-more group-hover:w-[50%]" />
      <div className="absolute inset-y-0 right-0 w-0 bg-gold-middle-accent transition-[width] duration-500 ease-learn-more group-hover:w-[50%]" />

      <span className="absolute inset-0 z-10">
        <span className="absolute left-0 top-0 w-4 h-4 border-t-2 border-l-2 border-primary-deep transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
        <span className="absolute left-0 bottom-0 w-4 h-4 border-b-2 border-l-2 border-primary-deep transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </span>

      <span className="absolute inset-0 z-10">
        <span className="absolute right-0 top-0 w-4 h-4 border-t-2 border-r-2 border-primary-deep transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />
        <span className="absolute right-0 bottom-0 w-4 h-4 border-b-2 border-r-2 border-primary-deep transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
      </span>

      <span className="relative z-20 text-sm md:text-base font-semibold uppercase tracking-[0.2em] px-2">
        {text}
      </span>
    </Link>
  );
};

export default ServicesLink;
