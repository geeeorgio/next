import { servicesList } from '@/lib/nav-items';

import DetailsLink from '../ui/DetailsLink';
import ServicesLink from '../ui/ServicesLink';

const Intro = () => {
  return (
    <div className="flex flex-col relative overflow-hidden gap-5 sm:gap-7 md:gap-8 lg:gap-12 xl:gap-14">
      <h2 className="text-base lg:text-xl xl:text-2xl font-semibold text-foreground pl-3 md:pl-4 lg:pl-6">
        Мої послуги
      </h2>
      <div className="flex flex-col md:flex-row pl-3 pr-3 md:pl-4 md:pr-4 lg:pl-6 lg:pr-6">
        <ul className="relative w-full flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5 xl:gap-6">
          {servicesList.map(({ label_ua, desc, icon: Icon }) => (
            <li
              key={label_ua}
              className="relative overflow-hidden flex flex-col flex-1 rounded-xl border border-gold-accent/20 bg-linear-to-b from-primary-section/60 via-primary-dark/70 to-primary-deep/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] gap-4 md:gap-5 lg:gap-6 xl:gap-7 p-5 lg:p-7 transition-all duration-500 hover:border-gold-accent/30 hover:shadow-[0_25px_60px_-25px_rgba(214,176,106,0.28)]"
            >
              <div className="absolute inset-0 bg-linear-to-br from-gold-accent/3 via-transparent to-transparent pointer-events-none" />
              <div className="flex flex-col flex-1 gap-4 lg:gap-5 xl:gap-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl border border-gold-accent-muted/50 bg-linear-to-b from-secondary-section/70 to-primary-dark text-gold-accent shadow-[0_10px_30px_-15px_rgba(243,208,119,0.2)] transition-all duration-300 hover:border-gold-accent-muted/75 hover:bg-white/6">
                  <Icon size={28} />
                </div>

                <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-7">
                  <h3 className="text-gold-middle-accent text-base lg:text-xl font-bold tracking-wide leading-snug">
                    {label_ua}
                  </h3>

                  <p className="text-sm md:text-base leading-relaxed text-foreground/85">{desc}</p>
                </div>
              </div>

              <DetailsLink src="/services" text="Детальніше" />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center px-3 md:px-6">
        <ServicesLink src="/services" text="Усі послуги та формати співпраці" />
      </div>
    </div>
  );
};

export default Intro;
