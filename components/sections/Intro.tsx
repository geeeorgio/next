import Link from 'next/link';

import { servicesList } from '@/lib/nav-items';

import ServicesLink from '../ui/ServicesLink';

const Intro = () => {
  return (
    <div className="flex flex-col relative overflow-hidden gap-3 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-12">
      <h2 className="text-base lg:text-xl xl:text-2xl font-semibold text-foreground pl-3 md:pl-4 lg:pl-6">
        Мої послуги
      </h2>
      <div className="flex flex-col md:flex-row pl-3 pr-3 md:pl-4 md:pr-4 lg:pl-6 lg:pr-6">
        <ul className="relative w-full flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5 xl:gap-6">
          {servicesList.map(({ href, label_ua, desc, icon: Icon }) => (
            <li
              key={label_ua}
              className="group relative overflow-hidden flex flex-col flex-1 rounded-xl border border-gold-accent/15 bg-linear-to-b from-white/7 via-white/3 to-transparent p-5 lg:p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-accent/30 hover:shadow-[0_20px_50px_-20px_rgba(243,208,119,0.18)]"
            >
              <div className="flex flex-col flex-1 gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl border border-gold-accent/15 bg-white/4 text-gold-accent shadow-[0_10px_30px_-15px_rgba(243,208,119,0.25)] transition-all duration-300 group-hover:border-gold-accent/30 group-hover:bg-white/6">
                  <Icon size={28} />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-foreground text-base lg:text-xl font-semibold tracking-wide leading-snug transition-colors duration-300 group-hover:text-gold-accent">
                    {label_ua}
                  </h3>

                  <p className="text-sm md:text-base leading-relaxed text-foreground/65">{desc}</p>
                </div>
              </div>

              <Link
                href={href}
                className="mt-6 w-full relative overflow-hidden rounded-xl bg-linear-to-b from-gold-accent via-gold-middle-accent to-gold-accent-muted px-6 py-3.5 text-center shadow-[0_10px_30px_-12px_rgba(243,208,119,0.45)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(243,208,119,0.55)]
    "
              >
                <span className="relative z-10 block text-sm md:text-base font-semibold tracking-wide text-primary-dark">
                  Детальніше
                </span>

                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 animate-shimmer bg-linear-to-r from-transparent via-white/30 to-transparent" />
                </div>
              </Link>
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
