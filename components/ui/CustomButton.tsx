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
      className={`relative overflow-hidden cursor-pointer
      py-2 px-2
      border border-gold-accent-muted/45 hover:border-gold-middle-accent/65
      rounded-xl flex flex-row items-center justify-center gap-2
      bg-primary-section/35 hover:bg-secondary-section/45 transition-all duration-500 ease-out active:scale-95 ${className ?? ''}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
