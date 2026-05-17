import type { ServicesListItemType } from '@/types/general';

interface ServicesListItemProps {
  item: ServicesListItemType;
}

const ServicesListItem = ({ item: { label_ua, icon: Icon, desc } }: ServicesListItemProps) => {
  return (
    <li className="group relative overflow-hidden flex flex-col flex-1 rounded-2xl bg-card-light shadow-md gap-4 md:gap-5 lg:gap-6 xl:gap-7 p-5 lg:p-7 transition-[background-color, color] duration-500 ease-learn-more">
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-primary-deep via-primary-dark to-primary-section transition-opacity duration-500 ease-learn-more pointer-events-none" />

      <div className="relative z-10 flex flex-col flex-1 gap-4 md:gap-6">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl border border-gold-accent/30 bg-primary-deep text-gold-middle-accent">
          <Icon className="w-7 h-7 shrink-0" />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-primary-deep group-hover:text-gold-middle-accent/90 text-base lg:text-xl font-bold transition-colors duration-500">
            {label_ua}
          </p>

          <ul className="flex flex-col gap-2.5">
            {desc.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2 text-primary-deep/75 group-hover:text-foreground/90 text-xs md:text-sm leading-relaxed transition-colors duration-500"
              >
                <span className="text-gold-middle-accent font-bold select-none pt-px">—</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default ServicesListItem;
