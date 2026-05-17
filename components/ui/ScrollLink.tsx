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
        bg-primary-deep/80
        border border-gold-middle-accent/40
        text-gold-accent
        font-bold
        text-xs md:text-sm lg:text-base
        tracking-wider
        cursor-pointer
        transition-[transform, border-color]
        duration-300
        hover:border-gold-accent
        active:scale-95
        ${className ?? ''}
      `}
    >
      <span className="relative z-10">{text}</span>
    </a>
  );
};

export default ScrollLink;
