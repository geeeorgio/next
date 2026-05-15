import type { AnchorHTMLAttributes } from 'react';

interface ScrollLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  to?: string;
}

const ScrollLink = ({ to, text, className }: ScrollLinkProps) => {
  return (
    <a
      href={to}
      className={`relative overflow-hidden cursor-pointer py-1 md:py-2 lg:py-3 xl:py-4 px-2 md:px-3 lg:px-4 xl:px:5 rounded-xl flex items-center justify-center gap-2 bg-primary-deep text-gold-accent border border-gold-middle-accent/50 shadow-[0_4px_12px_rgba(2,15,10,0.08)] hover:bg-primary-dark hover:border-gold-middle-accent/70 hover:shadow-[0_6px_20px_rgba(2,15,10,0.12)] transition-all duration-300 ease-out active:scale-95 font-bold uppercase tracking-widest text-xs md:text-sm ${className ?? ''}`}
    >
      {text}
    </a>
  );
};

export default ScrollLink;
