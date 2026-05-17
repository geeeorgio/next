import Image from 'next/image';

import AboutMeList from '../ui/AboutMeList';
import AboutMeStatsList from '../ui/AboutMeStatsList';
import AboutTagsList from '../ui/AboutTagsList';
import DetailsLink from '../ui/DetailsLink';

const Me = () => {
  return (
    <div className="flex flex-col relative overflow-hidden gap-8 md:gap-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-base lg:text-xl xl:text-2xl font-black text-gold-accent-sand uppercase tracking-[0.3em]">
          Про мене
        </h2>
        <div className="w-20 h-px bg-gold-accent-sand/50 rounded-full" />
      </div>

      <div className="flex flex-col md:flex-row md:items-stretch gap-12 lg:gap-14">
        <div className="flex flex-col w-full sm:w-1/2 md:w-[55%] justify-between gap-6 lg:gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-wide font-display font-black uppercase leading-tight">
              Людмила Кирилюк
            </h3>

            <div className="flex p-2 bg-primary-deep/90 w-fit">
              <h4 className="text-gold-middle-accent uppercase tracking-[0.25em] text-[10px] md:text-xs lg:text-sm font-bold px-1">
                Таргетолог • Meta & Google Ads
              </h4>
            </div>
          </div>

          <AboutMeList />

          <AboutTagsList />

          <div className="flex mt-2">
            <DetailsLink src="/about" text="Більше про мій досвід" />
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-[45%] flex justify-center md:justify-start lg:justify-center relative shrink-0">
          <div className="relative w-70 h-90 lg:w-85 xl:w-90 md:h-full aspect-3/4">
            <div className="relative w-full h-full overflow-hidden rounded-[180px] bg-linear-to-br from-primary/10 to-primary-deep/20 z-10">
              <Image
                src="/liydmyla_kyryliuk_contact.png"
                alt="Людмила Кирилюк"
                fill
                priority
                sizes="(max-width: 768px) 280px, (max-width: 1280px) 340px, 360px"
                className="object-cover object-top"
              />
            </div>

            <AboutMeStatsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
