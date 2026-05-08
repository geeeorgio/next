'use client';

import Image from 'next/image';
import { LiaTelegramPlane, LiaUserCircle } from 'react-icons/lia';

import { stats } from '@/lib/nav-items';

import CustomButton from '../ui/CustomButton';
import Typewriter from '../ui/Typewriter';

const Hero = () => {
  return (
    <div className="relative w-full min-h-[85vh] flex flex-row justify-between gap-1.5 md:gap-2 lg:gap-3 xl:gap-4 bg-linear-to-b from-primary-dark to-primary pt-1.5 pb-1.5 md:pt-2.5 md:pb-2.5 lg:pt-5 lg:pb-5 xl:pt-6 xl:pb-6 overflow-hidden px-1 py-1 md:px-2 md:py-2 lg:px-5 lg:py-3">
      <h1 className="hidden">
        Людмила Кирилюк. Таргетолог. СПЕЦІАЛІСТ З ІНТЕРНЕТ-МАРКЕТИНГУ. СИСТЕМНИЙ ТРАФІК ТА СТАБІЛЬНІ
        ЛІДИ з META та GOOGLE ADS
      </h1>

      <div className="absolute w-2xs h-80 md:h-[75%] md:w-xl lg:w-2xl flex right-0 bottom-1/6">
        <Image
          src={'/hero_logo.png'}
          alt="hero logo"
          fill
          sizes="(max-width: 768px) 288px, (max-width: 1024px) 576px, 672px"
          priority
          className="object-contain opacity-90"
        />
      </div>

      <div className="gap-1.5 md:gap-2 lg:gap-3 xl:gap-4 flex flex-1 flex-col justify-between z-10">
        <div className="flex flex-row gap-1.5 md:gap-2 lg:gap-3 divide-x divide-foreground-muted">
          <div className="flex flex-row gap-1.5 items-center justify-center">
            <LiaUserCircle className="fill-gold-accent" size={40} />
            <div className="flex flex-col gap-0.5 pr-1.5 lg:pr-3">
              <h2 className="text-gold-accent font-semibold text-xs xl:text-base">
                Людмила Кирилюк
              </h2>
              <h3 className="text-foreground font-normal text-xs xl:text-base">
                таргетолог / PPC-спеціаліст
              </h3>
            </div>
          </div>
          {stats.map(({ value, label }) => (
            <div key={value} className="flex flex-col gap-0.5 pr-1.5 lg:pr-3">
              <p className="text-gold-accent font-semibold text-xs xl:text-base">{value}</p>
              <span className="text-foreground font-normal text-xs xl:text-base">{label}</span>
            </div>
          ))}
        </div>
        <div className="w-3/4 flex flex-col gap-1 md:gap-2 lg:gap-3">
          <div className="w-full flex flex-col">
            <h4 className="text-foreground text-base md:text-xl lg:text-3xl xl:text-4xl font-bold text-shadow-amber-50 uppercase">
              Я допомогаю бізнесу отримувати
            </h4>
            <span className="overflow-hidden whitespace-nowrap text-foreground text-base md:text-xl lg:text-3xl xl:text-4xl font-bold text-shadow-amber-50 uppercase">
              <Typewriter />
            </span>
          </div>
        </div>

        <p className="text-foreground font-medium text-xs lg:text-base">
          Поєдную 15-річний інженерний досвід з алгоритмами Meta та Google Ads
        </p>

        <div className="flex flex-row self-start gap-3 md:gap-4 lg:gap-5">
          <CustomButton btnType="order">
            <span className="relative z-10 text-primary-dark font-semibold text-xs xl:text-base">
              Отримати консультацію →
            </span>
          </CustomButton>
          <CustomButton btnType="telegram">
            <span className="relative z-10 text-foreground font-semibold text-xs xl:text-base">
              Написати в Telegram
            </span>
            <LiaTelegramPlane className="fill-gold-accent" />
          </CustomButton>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Hero;
