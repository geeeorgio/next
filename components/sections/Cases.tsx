import Link from 'next/link';

import { casesList } from '@/lib/nav-items';

const Cases = () => {
  return (
    <div className="relative w-full flex flex-col gap-2 md:gap-3 lg:gap-6 xl:gap-8 pt-2.5 pb-2.5 md:pt-4 md:pb-4 lg:pt-6 lg:pb-6 xl:pt-8 xl:pb-8 bg-linear-to-b from-primary-section/50 to-secondary-section/50 border-t border-t-gold-accent-muted/40 shadow-[0_-10px_30px_rgba(243,208,119,0.05)]">
      <h3 className="text-base lg:text-xl xl:text-2xl font-semibold text-foreground pl-3 md:pl-4 lg:pl-6">
        Кейси
      </h3>
      <div className="flex flex-col md:flex-row pl-3 pr-3 md:pl-4 md:pr-4 lg:pl-6 lg:pr-6">
        <ul className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5 xl:gap-6 w-full">
          {casesList.map(({ label_ua, desc }) => (
            <li
              key={label_ua}
              className="flex flex-col flex-1 items-center border border-foreground-muted/10 rounded-xl gap-2.5 p-6 bg-linear-to-b from-primary-section/20 via-primary-dark/50 to-primary-deep/20 hover:bg-foreground-muted/10 transition-all duration-300 backdrop-blur-xl"
            >
              <span className="">{label_ua}</span>
              <span className="">{desc}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center">
        <Link
          href={'/work'}
          className="group flex relative px-8 py-3 overflow-hidden rounded-xl bg-linear-to-t from-primary/75 via-primary-section to-primary-deep/50 w-1/4 border border-gold-accent-muted/75 hover:border-gold-accent transition-all duration-500 items-center justify-center"
        >
          <span className="relative z-10 text-foreground text-xs lg:text-base">Більше кейсів</span>
          <div className="absolute inset-0 bg-gold-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </Link>
      </div>
    </div>
  );
};

export default Cases;
