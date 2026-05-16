import type { AnchorHTMLAttributes } from 'react';

interface ScrollLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  to?: string;
}

const ScrollLink = ({ to, text, className }: ScrollLinkProps) => {
  return (
    <a
      href={to}
      className={`relative overflow-hidden cursor-pointer py-2 sm:py-3 lg:py-4 px-2 md:px-3 lg:px:5 rounded-xl flex items-center justify-center gap-2 bg-transparent border-2 border-gold-middle-accent/60 text-gold-accent hover:text-gold-middle-accent hover:border-gold-middle-accent hover:bg-gold-middle-accent/8 transition-all duration-300 active:scale-95 font-bold text-xs md:text-sm ${className ?? ''}`}
    >
      {text}
    </a>
  );
};

export default ScrollLink;
