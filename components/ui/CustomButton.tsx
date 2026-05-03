'use client';

import type { BtnTypes } from '@/types/client-types';

interface CustomButtonProps {
  children: React.ReactNode;
  btnType: BtnTypes;
}

const CustomButton = ({ children, btnType }: CustomButtonProps) => {
  const handlePress = () => {
    if (btnType === 'order') {
    }

    if (btnType === 'telegram') {
    }
  };

  const style = {
    telegram: `
      relative overflow-hidden cursor-pointer
      py-1 px-3 md:py-2 md:px-4 lg:py-3 lg:px-6
      backdrop-blur-xl
      backdrop-saturate-200
      border border-gold-accent-muted
      rounded-xl
      flex flex-row items-center justify-center gap-2
      hover:border-gold-accent
      hover:bg-white/5
      transition-all duration-500 ease-out
    `,
    order: `
      relative overflow-hidden cursor-pointer
      py-1 px-3 md:py-2 md:px-4 lg:py-3 lg:px-6
      bg-linear-to-b from-gold-accent via-[#f5d98e] to-gold-accent-muted
      rounded-xl
      text-primary-dark font-bold
      shadow-[0_10px_20px_-10px_rgba(224,184,79,0.5)]
      hover:shadow-[0_15px_30px_-10px_rgba(224,184,79,0.6)]
      hover:scale-[1.02]
      transition-all duration-300
      flex items-center justify-center
    `,
  };

  return (
    <button onClick={handlePress} type="button" className={style[btnType]}>
      {children}
    </button>
  );
};

export default CustomButton;
