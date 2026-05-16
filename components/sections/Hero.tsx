'use client';

import Image from 'next/image';
import { LiaTelegramPlane } from 'react-icons/lia';

import { infoList } from '@/lib/info-list';

import CustomButton from '../ui/CustomButton';
import OrderLink from '../ui/OrderLink';
import Typewriter from '../ui/Typewriter';

const Hero = () => {
  return (
    <div className="relative w-full flex flex-col bg-linear-to-b from-primary-dark via-primary to-primary-deep py-5 md:py-10 lg:py-16 xl:py-18 overflow-hidden">
      <div className="hidden md:flex absolute md:bottom-0 lg:top-0 right-0 pointer-events-none select-none w-[60vw] h-[60vh] md:w-[35vw] md:h-[65vh] lg:w-[30vw] lg:h-[80vh] xl:w-[35vw] xl:h-screen z-0">
        <div className="absolute inset-0 bg-radial-gradient from-gold-accent/5 to-transparent" />
        <Image
          src="/hero_logo.png"
          alt="Людмила Кирилюк"
          fill
          priority
          sizes="(max-width: 767px) 0vw, (max-width: 1200px) 40vw, 40vw"
          className="object-contain object-bottom-right"
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col gap-3 md:gap-5 lg:gap-8 xl:gap-10 px-3 md:px-4 lg:px-6 xl:px-8">
        <div className="flex flex-col gap-7 md:gap-9 lg:gap-11 xl:gap-14 max-w-full md:max-w-[65%]">
          <div className="flex flex-col gap-2">
            <h1 className="text-foreground text-lg md:text-2xl lg:text-4xl xl:text-5xl font-black uppercase tracking-wide leading-[1.1]">
              Таргетована реклама в Meta та Google Ads для вашого бізнесу
            </h1>
            <div
              aria-hidden="true"
              className="min-h-[1.2em] text-xs sm:text-base md:text-xl lg:text-2xl xl:text-4xl font-black uppercase leading-[1.1]"
            >
              <Typewriter />
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-6 mt-2">
            <p className="text-foreground/80 font-medium text-xs md:text-sm lg:text-base max-w-xl border-l-2 border-gold-accent-muted/80 pl-4">
              Допомагаю бізнесу отримувати стабільний потік клієнтів через Facebook, Instagram,
              Google та Google Maps
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 w-full lg:w-3/4">
              <OrderLink extraStyle="w-full sm:flex-1" />

              <CustomButton className="w-full sm:flex-1">
                <span className="text-foreground font-semibold text-sm md:text-base">
                  Написати в Telegram
                </span>
                <LiaTelegramPlane className="text-gold-accent ml-2" size={20} />
              </CustomButton>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full bg-primary-dark/40 border border-white/5 rounded-xl p-2 sm:p-3 md:p-4 lg:p-8">
          {infoList.map(({ text, icon: Icon }) => (
            <div
              key={text}
              className="flex flex-row sm:flex-col md:flex-row sm:items-center gap-4 flex-1 min-w-0 group"
            >
              <div className="flex shrink-0 py-2 px-2 lg:px-4 lg:py-4 border border-gold-middle-accent/20 rounded-xl items-center justify-center bg-primary-deep">
                <Icon size={22} strokeWidth={1.5} className="text-gold-middle-accent" />
              </div>
              <span className="text-start sm:text-center md:text-start text-foreground/80 text-xs lg:text-sm font-medium leading-tight whitespace-pre-line">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
