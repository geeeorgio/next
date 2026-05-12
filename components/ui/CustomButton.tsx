'use client';

import type { ButtonHTMLAttributes } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handlePress?: () => void;
}

const CustomButton = ({ children, handlePress }: CustomButtonProps) => {
  return (
    <button
      onClick={handlePress}
      type="button"
      className="relative overflow-hidden cursor-pointer
      py-1 px-3 md:py-2 md:px-4 lg:py-3 lg:px-6
      border border-gold-accent-muted/45 hover:border-gold-middle-accent/65
      rounded-xl flex flex-row items-center justify-center gap-2
      bg-primary-section/35 hover:bg-secondary-section/45 transition-all duration-500 ease-out active:scale-95"
    >
      {children}
    </button>
  );
};

export default CustomButton;
