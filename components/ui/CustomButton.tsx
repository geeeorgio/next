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
      className={`relative overflow-hidden cursor-pointer py-2 sm:py-3 lg:py-4 px-2 md:px-3 lg:px:5 rounded-xl flex items-center justify-center gap-2 bg-primary-deep/90 text-gold-accent border border-gold-middle-accent/50 shadow-[0_4px_12px_rgba(2,15,10,0.08)] hover:bg-primary-dark hover:border-gold-middle-accent/70 hover:shadow-[0_6px_20px_rgba(2,15,10,0.12)] transition-all duration-300 ease-out active:scale-95 font-bold text-xs md:text-sm ${className ?? ''}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
