'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LiaTelegramPlane, LiaUserCircle } from 'react-icons/lia';

import { infoList, stats } from '@/lib/nav-items';

import CustomButton from '../ui/CustomButton';
import Typewriter from '../ui/Typewriter';

const Hero = () => {
  return (
    <div className="relative w-full flex flex-col bg-linear-to-b from-primary-dark to-primary-deep pt-2.5 pb-2.5 md:pt-4 md:pb-4 lg:pt-6 lg:pb-6 xl:pt-8 xl:pb-8 overflow-hidden p-1.5">
      <h1 className="hidden">
        Людмила Кирилюк. Таргетолог. СПЕЦІАЛІСТ З ІНТЕРНЕТ-МАРКЕТИНГУ. СИСТЕМНИЙ ТРАФІК ТА СТАБІЛЬНІ
        ЛІДИ з META та GOOGLE ADS
      </h1>

      <div className="hidden md:flex absolute md:bottom-0 lg:top-0 right-0  pointer-events-none select-none w-[60vw] h-[60vh] md:w-[35vw] md:h-[70vh] lg:w-[30vw] lg:h-[80vh] xl:w-[35vw] xl:h-screen z-0 before:absolute before:w-125 before:h-125 before:bg-green-accent/10 before:blur-[120px]">
        <Image
          src="/hero_logo.png"
          alt="Людмила Кирилюк"
          fill
          priority
          sizes="(max-width: 767px) 0vw, (max-width: 1200px) 40vw, 40vw"
          className="object-contain object-bottom-right opacity-90"
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-8 pl-3 pr-3 md:pl-4 md:pr-4 lg:pl-6 lg:pr-6">
        <div className="flex flex-col md:flex-row flex-wrap md:divide-x divide-foreground-muted/50 gap-y-1.5 gap-x-1.5">
          <div className="flex flex-row gap-2 items-center pr-1 md:pr-1.5 lg:pr-3">
            <LiaUserCircle className="text-gold-accent shrink-0" size={24} />
            <div className="flex flex-col">
              <h2 className="text-gold-accent font-semibold text-sm md:text-base xl:text-lg">
                Людмила Кирилюк
              </h2>
              <h3 className="text-foreground/80 font-medium text-[10px] md:text-xs xl:text-sm">
                таргетолог / PPC-спеціаліст
              </h3>
            </div>
          </div>

          {stats.map(({ value, label }) => (
            <div key={value} className="flex flex-col justify-center px-1.5 md:px-2.5 lg:px-6">
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
            <h4 className="text-foreground text-sm md:text-2xl lg:text-4xl xl:text-5xl font-black uppercase leading-[1.1] text-shadow-sm">
              Я допомогаю бізнесу отримувати
            </h4>
            <div className="min-h-[1.2em] text-gold-accent text-sm md:text-2xl lg:text-4xl xl:text-5xl font-black uppercase leading-[1.1]">
              <Typewriter />
            </div>
          </div>

          <p className="text-foreground/90 text-xs font-medium md:text-base lg:text-lg xl:text-xl max-w-xl leading-relaxed border-l-2 border-gold-accent pl-4">
            Поєдную 15-річний інженерний досвід з алгоритмами Meta та Google Ads
          </p>

          <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4 mt-1.5">
            <Link
              href={'/order'}
              className="w-full sm:w-auto relative overflow-hidden cursor-pointer p-1 md:p-2 lg:p-3 xl:p-4 bg-linear-to-b from-gold-accent via-gold-middle-accent to-gold-accent-muted rounded-xl shadow-[0_10px_20px_-10px_rgba(224,184,79,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(224,184,79,0.6)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center text-primary-deep text-sm md:text-base"
            >
              Отримати консультацію
            </Link>
            <CustomButton className="w-full sm:w-auto">
              <span className="text-foreground font-bold text-sm md:text-base">
                Написати в Telegram
              </span>
              <LiaTelegramPlane className="text-gold-accent ml-2" size={20} />
            </CustomButton>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-2 lg:gap-3 w-full bg-primary-dark/40 border border-foreground-muted/25 rounded-2xl p-2 lg:p-4 backdrop-blur-xl">
          {infoList.map(({ text, icon: Icon }) => (
            <div key={text} className="flex flex-row items-center gap-3 flex-1 min-w-0 group">
              <div className="flex shrink-0 p-3 border border-gold-middle-accent/10 rounded-xl items-center justify-center bg-foreground-muted/5 group-hover:bg-foreground-muted/10 transition-colors">
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
