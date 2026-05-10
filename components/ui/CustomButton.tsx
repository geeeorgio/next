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
      backdrop-saturate-200
      border border-gold-accent-muted
      rounded-xl
      flex flex-row items-center justify-center gap-2
      hover:border-gold-accent
      hover:bg-white/5
      transition-all duration-500 ease-out"
    >
      {children}
    </button>
  );
};

export default CustomButton;
