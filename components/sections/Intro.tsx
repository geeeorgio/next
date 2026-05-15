import { servicesList } from '@/lib/nav-items';

import DetailsLink from '../ui/DetailsLink';
import ServicesLink from '../ui/ServicesLink';

const Intro = () => {
  return (
    <div className="flex flex-col relative overflow-hidden gap-5 sm:gap-7 md:gap-8 lg:gap-12 xl:gap-14">
      <div className="flex flex-col gap-2 pl-3 md:pl-4 lg:pl-6">
        <h2 className="text-base lg:text-xl xl:text-2xl font-black text-gold-accent-muted uppercase tracking-[0.3em]">
          Мої послуги
        </h2>
        <div className="w-20 h-px bg-gold-accent-muted/40 rounded-full" />
      </div>

      <div className="flex flex-col md:flex-row pl-3 pr-3 md:pl-4 md:pr-4 lg:pl-6 lg:pr-6">
        <ul className="relative w-full flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5 xl:gap-6">
          {servicesList.map(({ label_ua, desc, icon: Icon }) => (
            <li
              key={label_ua}
              className="group relative overflow-hidden flex flex-col flex-1 rounded-2xl bg-card-light border border-white/20 shadow-[0_8px_30px_-10px_rgba(40,32,15,0.2),0_4px_10px_-4px_rgba(2,15,10,0.1)] gap-4 md:gap-5 lg:gap-6 xl:gap-7 p-5 lg:p-7 transition-all duration-700 ease-learn-more hover:border-gold-middle-accent/30 hover:shadow-[0_25px_50px_-12px_rgba(180,142,50,0.2),0_10px_20px_-5px_rgba(2,15,10,0.1)]"
            >
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 bg-linear-to-b from-card-dark via-primary-dark to-primary-section transition-opacity duration-700 ease-learn-more pointer-events-none" />

              <div className="relative z-10 flex flex-col flex-1 gap-4 md:gap-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl border border-gold-accent/20 bg-primary-deep text-gold-accent transition-all duration-700 group-hover:border-gold-accent/40">
                  <Icon size={28} />
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-primary-deep group-hover:text-gold-middle-accent text-base lg:text-xl font-bold transition-colors duration-700">
                    {label_ua}
                  </p>
                  <p className="text-primary-deep/70 group-hover:text-foreground-muted text-sm md:text-base transition-colors duration-700">
                    {desc}
                  </p>
                </div>
              </div>
              <div className="mt-1">
                <DetailsLink src="/services" text="Детальніше" />
              </div>
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
