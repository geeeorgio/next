import { workSteps } from '@/lib/work-steps';

import ServicesLink from '../ui/ServicesLink';

const Steps = () => {
  return (
    <div className="flex flex-col relative overflow-hidden gap-8 sm:gap-10 lg:gap-12">
      <div className="flex flex-col gap-2 mb-4 md:mb-8">
        <h2 className="text-base lg:text-xl xl:text-2xl font-black text-gold-accent-muted uppercase tracking-[0.3em]">
          Етапи роботи
        </h2>
        <div className="w-20 h-px bg-gold-accent-muted/40 rounded-full" />
      </div>

      <div className="relative w-full">
        <div className="hidden md:block absolute top-7 left-10 right-10 h-px border-t border-dashed border-primary-deep/20 z-0" />

        <ul className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-6 w-full items-start">
          {workSteps.map(({ text, icon: Icon }, index) => (
            <li
              key={text}
              className="group relative flex flex-row md:flex-col items-center gap-5 md:gap-6 flex-1 z-10"
            >
              <span className="absolute -top-6 md:-top-8 lg:-top-9 text-4xl md:text-5xl font-black text-primary-deep/8 transition-colors group-hover:text-gold-accent-sand/40">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="relative flex shrink-0 items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-bckg-light border border-gold-middle-accent/20 group-hover:border-gold-middle-accent group-hover:-translate-y-2 transition-all duration-500 shadow-sm group-hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.3)]">
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-primary-deep group-hover:text-gold-middle-accent transition-colors duration-500"
                />
              </div>

              <div className="flex flex-col md:items-center gap-2">
                <span className="text-sm lg:text-base font-bold text-primary-deep/80 group-hover:text-primary-deep transition-colors md:text-center leading-relaxed">
                  {text}
                </span>
                <div className="w-0 h-0.5 bg-gold-middle-accent transition-all duration-500 group-hover:w-full" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center">
        <ServicesLink src="/work" text="Детальніше про кожен етап" />
      </div>
    </div>
  );
};

export default Steps;
