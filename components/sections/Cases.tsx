import { casesList } from '@/lib/nav-items';

import ServicesLink from '../ui/ServicesLink';

const Cases = () => {
  return (
    <div className="flex flex-col relative overflow-hidden gap-3 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-12">
      <h2 className="text-base lg:text-xl xl:text-2xl font-semibold text-foreground pl-3 md:pl-4 lg:pl-6">
        Кейси з digital просування
      </h2>
      <div className="flex flex-col md:flex-row pl-3 pr-3 md:pl-4 md:pr-4 lg:pl-6 lg:pr-6">
        <ul className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5 xl:gap-6 w-full">
          {casesList.map(({ label_ua, desc }) => (
            <li
              key={label_ua}
              className="flex flex-col flex-1 items-center border border-foreground-muted/10 rounded-xl gap-2.5 p-6 bg-linear-to-b from-primary-section/20 via-primary-dark/50 to-primary-deep/20 hover:bg-foreground-muted/10 transition-all duration-300"
            >
              <span className="">{label_ua}</span>
              <span className="">{desc}</span>
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
