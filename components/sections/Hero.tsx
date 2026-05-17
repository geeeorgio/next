import Image from 'next/image';

import OrderLink from '../ui/OrderLink';
import TelegramLink from '../ui/TelegramLink';
import Typewriter from '../ui/Typewriter';

const Hero = () => {
  return (
    <div className="relative w-full flex flex-col bg-linear-to-b from-primary-dark via-primary to-primary-deep py-5 md:py-10 lg:py-16 xl:py-18 overflow-hidden">
      <div className="hidden md:flex absolute md:bottom-0 lg:top-0 right-0 pointer-events-none select-none w-[60vw] h-[60vh] md:w-[35vw] md:h-[65vh] lg:w-[30vw] lg:h-[80vh] xl:w-[40vw] xl:h-screen z-0">
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

      <div className="relative z-10 flex flex-1 flex-col px-3 md:px-4 lg:px-6 xl:px-8">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14 xl:gap-18 max-w-full md:max-w-[65%]">
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

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-10 w-full lg:w-3/4">
              <OrderLink extraStyle="w-full sm:flex-1" />

              <TelegramLink extraStyle="w-full sm:flex-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
