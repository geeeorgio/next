import { workSteps } from '@/lib/nav-items';

import ServicesLink from '../ui/ServicesLink';

const Steps = () => {
  return (
    <div className="flex flex-col relative overflow-hidden gap-5 sm:gap-7 md:gap-8 lg:gap-12 xl:gap-14">
      <h2 className="text-base lg:text-xl xl:text-2xl font-black pl-3 md:pl-4 lg:pl-6 text-gold-middle-accent uppercase tracking-widest">
        Етапи роботи таргетованної реклами
      </h2>

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
                <span className="text-foreground/90 text-sm lg:text-base tracking-wide group-hover:text-gold-accent transition-colors md:text-center">
                  {text}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center px-3 md:px-6">
        <ServicesLink src="/work" text="Детальніше про кожний етап" />
      </div>
    </div>
  );
};

export default Steps;
