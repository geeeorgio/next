import Image from 'next/image';

import DetailsLink from '../ui/DetailsLink';

const Me = () => {
  return (
    <div className="flex flex-col relative overflow-hidden gap-8 sm:gap-10 lg:gap-12">
      <h2 className="text-base lg:text-xl xl:text-2xl font-black pl-3 md:pl-4 lg:pl-6 text-gold-middle-accent uppercase tracking-[0.2em]">
        Про мене
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-4">
        <div className="flex flex-col pl-3 pr-3 md:pl-4 md:pr-4 lg:pl-6 lg:pr-6 flex-1 gap-6 lg:gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight uppercase leading-tight text-foreground [text-shadow:0_2px_30px_rgba(244,216,143,0.15)]">
              Людмила Кирилюк
            </h3>

            <h4 className="text-gold-middle-accent uppercase tracking-[0.25em] text-[10px] md:text-xs lg:text-sm font-bold">
              Таргетолог • Meta & Google Ads
            </h4>
          </div>

          <div className="flex flex-col gap-5 pl-4 relative before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-gold-accent/50 before:via-gold-accent/25 before:to-gold-accent/10">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-foreground-muted max-w-2xl">
              Понад 2 роки працюю з рекламою в Meta та Google Ads. За цей час запустила кампанії для{' '}
              <span className="text-gold-accent">15+ клієнтів</span> у сферах e-commerce,
              нерухомості та освіти — від малого бізнесу до міжнародних проєктів.
            </p>

            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-foreground-muted/90 max-w-2xl">
              До digital-маркетингу прийшла з{' '}
              <span className="text-gold-accent">15-річним досвідом в інженерії</span> — це дає
              системний підхід до аналітики та точне розуміння ROI кожної кампанії.
            </p>
          </div>

          <div className="flex mt-2">
            <DetailsLink src="/about" text="Більше про мій досвід" />
          </div>
        </div>

        <div className="relative shrink-0 md:pr-4 lg:pr-5">
          <div className="relative h-64 w-64 lg:h-80 lg:w-80 xl:h-90 xl:w-90 overflow-hidden rounded-full border-2 border-white/10 shadow-[0_0_40px_rgba(244,216,143,0.1)] bg-primary-dark/50">
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
