import Image from 'next/image';

import DetailsLink from '../ui/DetailsLink';

const Me = () => {
  return (
    <div className="flex flex-col relative overflow-hidden gap-8 sm:gap-10 lg:gap-12">
      <div className="flex flex-col gap-2 mb-4 md:mb-8">
        <h2 className="text-base lg:text-xl xl:text-2xl font-black text-gold-accent-muted uppercase tracking-[0.3em]">
          Про мене
        </h2>
        <div className="w-20 h-px bg-gold-accent-muted/40 rounded-full" />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-4">
        <div className="flex flex-col flex-1 gap-6 lg:gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide uppercase leading-tight [text-shadow:0_2px_30px_rgba(244,216,143,0.15)]">
              Людмила Кирилюк
            </h3>

            <div className="flex p-2 bg-primary-deep/90 w-fit">
              <h4 className="text-gold-middle-accent uppercase tracking-[0.25em] text-[10px] md:text-xs lg:text-sm font-bold">
                Таргетолог • Meta & Google Ads
              </h4>
            </div>
          </div>

          <div className="flex flex-col gap-5 pl-4 relative before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-gold-accent-sand/50 before:via-gold-accent-muted/40 before:to-gold-accent/30">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
              Понад 2 роки працюю з рекламою в Meta та Google Ads. За цей час запустила кампанії для
              15+ клієнтів у сферах e-commerce, нерухомості та освіти — від малого бізнесу до
              міжнародних проєктів.
            </p>
          </div>

          <div className="flex mt-2">
            <DetailsLink src="/about" text="Більше про мій досвід" />
          </div>
        </div>

        <div className="relative shrink-0 md:pr-4 lg:pr-5">
          <div className="relative h-70 w-70 lg:h-90 lg:w-90 xl:h-100 xl:w-100 overflow-hidden rounded-full border-2 border-white/10 shadow-[0_0_40px_rgba(244,216,143,0.2)] bg-primary-dark/90">
            <Image
              src="/liydmyla_kyryliuk_contact.png"
              alt="Людмила Кирилюк"
              fill
              priority
              className="object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
