import type { AnchorHTMLAttributes } from 'react';

interface ScrollLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  to?: string;
}

const ScrollLink = ({ to, text, className }: ScrollLinkProps) => {
  return (
    <a
      href={to}
      className={`
        group relative inline-flex items-center justify-center gap-2
        overflow-hidden rounded-xl
        px-5 lg:px-7
        py-3 lg:py-3.5
        bg-primary-deep/30
        border-2 border-gold-middle-accent/40
        text-gold-accent
        font-bold
        text-xs md:text-sm
        tracking-wider
        uppercase
        cursor-pointer
        transition-[transform,border-color,background-color]
        duration-300
        hover:border-gold-accent
        hover:bg-primary-dark/50
        active:scale-95
        ${className ?? ''}
      `}
    >
      <span
        className="
          absolute inset-0
          bg-linear-to-b from-gold-accent/5 to-transparent
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
        "
      />

      <span className="relative z-10">{text}</span>
    </a>
  );
};

export default ScrollLink;
