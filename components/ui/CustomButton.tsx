'use client';

import type { ButtonHTMLAttributes } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handlePress?: () => void;
}

const CustomButton = ({ children, className, handlePress }: CustomButtonProps) => {
  return (
    <button
      onClick={handlePress}
      type="button"
      className={`
        group relative inline-flex items-center justify-center gap-2
        overflow-hidden rounded-xl
        px-6 py-3
        bg-primary-deep/40
        border border-gold-middle-accent/30
        text-gold-accent
        font-semibold
        text-sm md:text-base
        tracking-wide
        cursor-pointer
        transition-[transform,border-color,background-color]
        duration-300
        hover:border-gold-accent
        hover:bg-primary-dark/80
        active:scale-95
        ${className ?? ''}
      `}
    >
      <span
        className="
          absolute inset-0
          bg-linear-to-b from-gold-accent/10 to-transparent
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
        "
      />

      <span className="absolute inset-x-0 bottom-0 h-px bg-gold-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default CustomButton;
