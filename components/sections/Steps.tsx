import Link from 'next/link';

import { workSteps } from '@/lib/nav-items';

const Steps = () => {
  return (
    <div className="bg-primary-deep/70 relative w-full flex flex-col gap-2 md:gap-3 lg:gap-6 xl:gap-8 pt-2.5 pb-2.5 md:pt-4 md:pb-4 lg:pt-6 lg:pb-6 xl:pt-8 xl:pb-8 border-t border-t-gold-accent-muted/50">
      <h3 className="text-base lg:text-xl xl:text-2xl font-semibold text-foreground pl-3 md:pl-4 lg:pl-6">
        Етапи роботи
      </h3>

      <div className="flex flex-col md:flex-row pl-3 pr-3 md:pl-4 md:pr-4 lg:pl-6 lg:pr-6 w-full">
        <ul className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5 xl:gap-6 w-full items-start">
          {workSteps.map(({ text, icon: Icon }) => (
            <li
              key={text}
              className="group relative flex flex-row md:flex-col items-center gap-4 md:gap-6 flex-1"
            >
              <div className="relative z-10 flex shrink-0 items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-gold-accent/30 group-hover:border-gold-accent transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <Icon size={24} strokeWidth={1} className="text-gold-accent" />
              </div>

              <div className="flex flex-row items-center gap-3">
                <span className="text-foreground/90 text-xs lg:text-base tracking-wide group-hover:text-gold-accent transition-colors">
                  {text}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center">
        <Link
          href={'/work'}
          className="group flex relative px-8 py-3 overflow-hidden bg-linear-to-b from-primary-dark/75 via-secondary-section/75 to-primary-section/50 rounded-xl w-1/4 border border-gold-accent-muted/50 hover:border-gold-accent transition-all duration-500 items-center justify-center"
        >
          <span className="relative z-10 text-foreground text-xs lg:text-base">
            Деталі співпраці
          </span>
          <div className="absolute inset-0 bg-gold-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </Link>
      </div>
    </div>
  );
};

export default Steps;
