'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LiaTelegramPlane, LiaUserCircle } from 'react-icons/lia';

import { infoList, stats } from '@/lib/nav-items';

import CustomButton from '../ui/CustomButton';
import Typewriter from '../ui/Typewriter';

const Hero = () => {
  return (
    <div className="relative w-full min-h-[85vh] flex flex-row justify-between gap-1.5 lg:gap-2 xl:gap-3 bg-linear-to-b from-primary-dark to-primary pt-1.5 pb-1.5 md:pt-2.5 md:pb-2.5 lg:pt-5 lg:pb-5 xl:pt-6 xl:pb-6 overflow-hidden px-1 py-1 md:px-2 md:py-2 lg:px-5 lg:py-3">
      <h1 className="hidden">
        Людмила Кирилюк. Таргетолог. СПЕЦІАЛІСТ З ІНТЕРНЕТ-МАРКЕТИНГУ. СИСТЕМНИЙ ТРАФІК ТА СТАБІЛЬНІ
        ЛІДИ з META та GOOGLE ADS
      </h1>

      <div className="absolute right-0 bottom-2 md:bottom-4 lg:bottom-5 pointer-events-none select-none w-[70vw] h-[40vh] md:w-[50vw] md:h-[60vh] lg:w-[45vw] lg:h-[75vh] xl:w-[40vw] xl:h-[80vh]">
        <Image
          src="/hero_logo.png"
          alt="Людмила Кирилюк"
          fill
          priority
          sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 40vw"
          className="object-contain object-bottom-right opacity-80 md:opacity-95 transition-opacity duration-500"
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-between gap-4 md:gap-6 xl:gap-8">
        <div className="flex flex-wrap items-center divide-x divide-foreground-muted/50 gap-y-4">
          <div className="flex flex-row gap-3 items-center pr-4 md:pr-6 lg:pr-8">
            <LiaUserCircle className="text-gold-accent shrink-0" size={40} />
            <div className="flex flex-col">
              <h2 className="text-gold-accent font-semibold text-sm md:text-base xl:text-lg leading-tight">
                Людмила Кирилюк
              </h2>
              <h3 className="text-foreground/80 font-medium text-[10px] md:text-xs xl:text-sm tracking-wider">
                таргетолог / PPC-спеціаліст
              </h3>
            </div>
          </div>

          {stats.map(({ value, label }) => (
            <div key={value} className="flex flex-col justify-center px-4 md:px-6 lg:px-8">
              <p className="text-gold-accent font-semibold text-sm md:text-base xl:text-lg leading-tight">
                {value}
              </p>
              <span className="text-foreground/60 text-[10px] md:text-xs xl:text-sm whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 md:gap-8 max-w-[90%] md:max-w-[70%] lg:max-w-[60%]">
          <div className="flex flex-col gap-2">
            <h4 className="text-foreground text-sm md:text-3xl lg:text-4xl xl:text-5xl font-black uppercase leading-[1.1] text-shadow-sm">
              Я допомогаю бізнесу отримувати
            </h4>
            <div className="min-h-[1.2em] text-gold-accent text-sm md:text-3xl lg:text-4xl xl:text-5xl font-black uppercase leading-[1.1]">
              <Typewriter />
            </div>
          </div>

          <p className="text-foreground/90 font-medium text-xs md:text-lg xl:text-xl max-w-xl leading-relaxed border-l-2 border-gold-accent pl-4">
            Поєдную 15-річний інженерний досвід з алгоритмами Meta та Google Ads.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              href={'/order'}
              className="w-full sm:w-auto relative overflow-hidden cursor-pointer py-1 px-3 md:py-2 md:px-4 lg:py-3 lg:px-6 bg-linear-to-b from-gold-accent via-gold-middle-accent to-gold-accent-muted rounded-xl text-primary-dark font-bold shadow-[0_10px_20px_-10px_rgba(224,184,79,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(224,184,79,0.6)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
            >
              <span className="text-primary-dark font-bold text-sm md:text-base">
                Отримати консультацію
              </span>
            </Link>
            <CustomButton className="w-full sm:w-auto">
              <span className="text-foreground font-bold text-sm md:text-base">
                Написати в Telegram
              </span>
              <LiaTelegramPlane className="text-gold-accent ml-2" size={20} />
            </CustomButton>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-3 lg:gap-4 w-full bg-primary-dark/40 border border-foreground-muted/20 rounded-2xl p-4 lg:p-3 backdrop-blur-md">
          {infoList.map(({ text, icon: Icon }) => (
            <div key={text} className="flex flex-row items-center gap-3 flex-1 min-w-0 group">
              <div className="flex shrink-0 p-2.5 border border-gold-accent/30 rounded-xl items-center justify-center bg-gold-accent/5 group-hover:bg-gold-accent/10 transition-colors">
                <Icon className="text-gold-middle-accent" strokeWidth={1} size={22} />
              </div>
              <span className="text-foreground/90 text-[11px] md:text-xs xl:text-sm leading-snug">
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
