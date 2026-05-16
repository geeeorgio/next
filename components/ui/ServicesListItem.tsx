import type { ServicesListItemType } from '@/types/general';

import DetailsLink from './DetailsLink';

interface ServicesListItemProps {
  item: ServicesListItemType;
}

const ServicesListItem = ({ item: { label_ua, icon: Icon, desc } }: ServicesListItemProps) => {
  return (
    <li className="group relative overflow-hidden flex flex-col flex-1 rounded-2xl bg-card-light shadow-md gap-4 md:gap-5 lg:gap-6 xl:gap-7 p-5 lg:p-7 transition-[border-color,background-color,color] duration-700 ease-learn-more">
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 bg-linear-to-b from-card-dark via-primary-dark to-primary-section transition-opacity duration-700 ease-learn-more pointer-events-none" />

      <div className="relative z-10 flex flex-col flex-1 gap-4 md:gap-6">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl border border-gold-accent/20 bg-primary-deep text-gold-middle-accent transition-all duration-700 group-hover:border-gold-accent/40">
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
  );
};

export default ServicesListItem;
