import type { AnchorHTMLAttributes } from 'react';

interface ScrollLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  to?: string;
}

const ScrollLink = ({ to, text, className }: ScrollLinkProps) => {
  return (
    <a
      href={to}
      className={`relative overflow-hidden cursor-pointer py-1 px-3 md:py-2 md:px-4 lg:py-3 lg:px-6 border border-gold-accent-muted/45 hover:border-gold-middle-accent/65 rounded-xl flex items-center justify-center bg-primary-section/35 hover:bg-secondary-section/45 transition-all duration-500 ease-out active:scale-95 text-foreground font-semibold text-sm md:text-base ${className ?? ''}`}
    >
      {text}
    </a>
  );
};

export default ScrollLink;
