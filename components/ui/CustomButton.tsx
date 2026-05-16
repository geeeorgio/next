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
        group relative overflow-hidden cursor-pointer
        py-2 sm:py-3
        px-3 md:px-4
        rounded-xl
        flex items-center justify-center gap-2
        bg-linear-to-b
        from-primary-section
        via-primary-dark
        to-primary-deep
        text-gold-accent
        border border-gold-middle-accent/50
        hover:border-gold-accent/60
        transition-all duration-500 ease-out
        active:scale-95
        font-bold text-xs md:text-sm
        ${className ?? ''}
      `}
    >
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-r from-transparent via-gold-accent/10 to-transparent -translate-x-full group-hover:translate-x-full" />

      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default CustomButton;
