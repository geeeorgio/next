'use client';

import Link from 'next/link';

import { servicesList } from '@/lib/nav-items';

const Intro = () => {
  return (
    <div className="flex flex-col bg-primary-dark/80 pt-2.5 pb-2.5 md:pt-3.5 md:pb-3.5 lg:pt-5 lg:pb-5 xl:pt-6 xl:pb-6 border-t border-t-gold-accent-muted/60 shadow-[0_-4px_20px_rgba(201,168,76,0.5)">
      <div className="flex flex-col md:flex-row pl-3 pr-3 md:pl-4 md:pr-4 lg:pl-6 lg:pr-6">
        <ul className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5 xl:gap-6 w-full">
          {servicesList.map(({ href, label_ua, desc }) => (
            <li
              key={label_ua}
              className="flex flex-col flex-1 border border-gold-accent-muted rounded-xl items-center gap-2.5 p-6 bg-foreground-muted/10 hover:bg-foreground-muted/15 transition-all duration-300 backdrop-blur-md"
            >
              <h5 className="text-foreground font-semibold text-sm md:text-base lg:text-lg">
                {label_ua}
              </h5>
              <span className="text-foreground/75 text-sm md:text-base">{desc}</span>

              <Link
                href={href}
                className="group relative w-full overflow-hidden rounded-xl bg-linear-to-b from-gold-middle-accent to-gold-accent-muted px-6 py-3.5 shadow-lg transition-all duration-300 active:scale-95"
              >
                <span className="relative z-20 text-center block font-semibold text-primary-dark tracking-wider text-sm md:text-base">
                  Детальніше
                </span>

                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 w-full h-full animate-shimmer bg-linear-to-r from-transparent via-white/30 to-transparent blur-2xl" />

                  <div className="absolute inset-0 w-full h-full animate-shimmer bg-linear-to-r from-transparent via-white/60 to-transparent blur-[2px] [animation-delay:0.05s]" />

                  <div className="absolute inset-0 w-full h-full animate-shimmer bg-linear-to-r from-transparent via-green-accent/20 to-transparent blur-lg [animation-delay:0.15s]" />
                </div>

                <div className="absolute inset-0 z-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Intro;
