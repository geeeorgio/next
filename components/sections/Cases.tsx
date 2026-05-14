import Image from 'next/image';

import { casesList } from '@/lib/nav-items';

import DetailsLink from '../ui/DetailsLink';
import ServicesLink from '../ui/ServicesLink';

const Cases = () => {
  return (
    <div className="flex flex-col relative overflow-hidden gap-5 sm:gap-7 md:gap-8 lg:gap-12 xl:gap-14">
      <h2 className="text-base lg:text-xl xl:text-2xl font-black pl-3 md:pl-4 lg:pl-6 text-gold-middle-accent uppercase tracking-widest">
        Кейси з digital просування
      </h2>

      <div className="flex flex-col md:flex-row pl-3 pr-3 md:pl-4 md:pr-4 lg:pl-6 lg:pr-6">
        <ul className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5 xl:gap-6 w-full">
          {casesList.slice(0, 4).map(({ label_ua, desc, tags, img }) => (
            <li
              key={label_ua}
              className="group flex flex-1 flex-col relative overflow-hidden rounded-2xl border border-white/8 bg-primary-section/40 hover:border-gold-accent/20 transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(214,176,106,0.15)] cursor-pointer"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={img}
                  alt={label_ua}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-primary-section/80 via-transparent to-transparent" />

                <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest text-foreground/80 bg-primary-deep/70 px-2.5 py-1 rounded-full border border-white/10">
                  {tags}
                </span>
              </div>

              <div className="flex flex-col gap-3 p-4 lg:p-5">
                <p className="text-foreground font-semibold text-sm md:text-base leading-snug">
                  {label_ua}
                </p>
                <p className="text-foreground-muted text-xs md:text-sm leading-relaxed line-clamp-2">
                  {desc}
                </p>
                <DetailsLink src="/portfolio" text="Деталі" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center px-3 md:px-6">
        <ServicesLink src="/portfolio" text="Більше проєктів" />
      </div>
    </div>
  );
};

export default Cases;
