'use client';

import Image from 'next/image';
import { LiaTelegramPlane } from 'react-icons/lia';

import { infoList } from '@/lib/nav-items';

import CustomButton from '../ui/CustomButton';
import OrderLink from '../ui/OrderLink';
import Typewriter from '../ui/Typewriter';

const Hero = () => {
  return (
    <div className="relative w-full flex flex-col bg-linear-to-b from-primary-dark via-primary to-primary-deep pt-4 pb-4 md:pt-8 md:pb-8 lg:pt-10 lg:pb-10 xl:pt-16 xl:pb-16 overflow-hidden">
      <div className="hidden md:flex absolute md:bottom-0 lg:top-0 right-0  pointer-events-none select-none w-[60vw] h-[60vh] md:w-[35vw] md:h-[70vh] lg:w-[30vw] lg:h-[80vh] xl:w-[35vw] xl:h-screen z-0 before:absolute before:w-125 before:h-125 before:bg-green-accent/10 before:blur-3xl">
        <Image
          src="/hero_logo.png"
          alt="Людмила Кирилюк"
          fill
          priority
          sizes="(max-width: 767px) 0vw, (max-width: 1200px) 40vw, 40vw"
          className="object-contain object-bottom-right opacity-90"
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col gap-3 md:gap-5 lg:gap-8 xl:gap-10 px-3 md:px-4 lg:px-6 xl:px-8">
        <div className="inline-flex items-center gap-2 px-3 py-3 rounded-xl border border-foreground/50 w-fit">
          <span className="w-2 h-2 rounded-full bg-gold-accent animate-pulse shrink-0" />
          <span className="text-gold-accent font-bold text-xs md:text-sm">Людмила Кирилюк</span>
          <span className="text-foreground font-semibold text-xs md:text-sm">
            Таргетолог | Meta & Google Ads
          </span>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-[90%] md:max-w-[70%] lg:max-w-[60%]">
          <div className="flex flex-col gap-2">
            <h1 className="text-foreground text-sm md:text-2xl lg:text-4xl xl:text-5xl font-black uppercase leading-[1.1] text-shadow-sm">
              РЕКЛАМА В ІНТЕРНЕТІ ДЛЯ ВАШОГО БІЗНЕСУ:
            </h1>
            <div className="min-h-[1.2em] text-xs md:text-2xl lg:text-4xl font-black uppercase leading-[1.1]">
              <Typewriter />
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-6">
            <h2 className="text-foreground/80 text-sm font-medium md:text-base max-w-xl leading-relaxed border-l-2 border-gold-accent pl-4">
              Повний цикл роботи з трафіком: від технічного запуску реклами до масштабування
              успішних кампаній. Економлю ваш час та перетворюю рекламні покази на стабільний потік
              заявок
            </h2>

            <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4 mt-1.5">
              <OrderLink />

              <CustomButton className="w-full sm:w-auto">
                <span className="text-foreground font-semibold text-sm md:text-base">
                  Написати в Telegram
                </span>
                <LiaTelegramPlane className="text-gold-accent ml-2" size={20} />
              </CustomButton>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-2 lg:gap-3 w-full bg-primary-dark/40 border border-foreground-muted/25 rounded-2xl p-2 lg:p-6 backdrop-blur-xl">
          {infoList.map(({ text, icon: Icon }) => (
            <div key={text} className="flex flex-row items-center gap-3 flex-1 min-w-0 group">
              <div className="flex shrink-0 p-3 border border-gold-middle-accent/25 rounded-xl items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                <Icon className="text-gold-middle-accent" strokeWidth={1} size={22} />
              </div>
              <span className="text-foreground/90 text-xs md:text-sm leading-snug">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
