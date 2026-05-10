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
      className="
        group relative inline-flex items-center justify-center
        overflow-hidden rounded-2xl
        border border-gold-accent/15
        bg-linear-to-b from-white/6 via-white/3 to-transparent
        px-8 py-4
        backdrop-blur-xl
        transition-all duration-300
        hover:border-gold-accent/30
        hover:bg-white/5
        hover:shadow-[0_12px_30px_-18px_rgba(243,208,119,0.25)]
        active:scale-[0.98]
      "
    >
      <span
        className="
          relative z-10
          text-sm md:text-base
          font-medium tracking-wide
          text-foreground/75
          transition-colors duration-300
          group-hover:text-gold-accent
        "
      >
        {text}
      </span>

      <div
        className="
          absolute inset-x-6 bottom-0 h-px
          bg-linear-to-r from-transparent via-gold-accent/40 to-transparent
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
      />
    </Link>
  );
};

export default ServicesLink;
