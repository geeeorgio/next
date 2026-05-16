import Image from 'next/image';
import Link from 'next/link';

import type { CaseListItemType } from '@/types/general';

interface CasesListItemProps {
  item: CaseListItemType;
}

const CasesListItem = ({ item: { id, label_ua, img, tags, desc, task } }: CasesListItemProps) => {
  return (
    <li className="group flex flex-1 relative overflow-hidden rounded-xl border border-black/5 bg-card-light cursor-pointer transition-colors duration-500 hover:border-gold-accent-muted/30">
      <Link
        href={`/portfolio/${id}`}
        className="absolute inset-0 z-20"
        aria-label={`Перейти до кейсу ${label_ua}`}
      />

      <div className="relative w-full h-105 md:h-115 lg:h-125 xl:h-140">
        <Image
          src={img}
          alt={label_ua}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 bg-card-light rounded-tl-[50px] rounded-tr-none before:absolute before:bottom-full before:right-0 before:w-13.5 before:h-13.5 before:bg-[radial-gradient(circle_at_top_left,transparent_54px,var(--color-card-light)_55px)] before:pointer-events-none translate-y-[calc(100%-120px)] transition-transform duration-500 ease-in-out group-hover:translate-y-0">
        <div className="p-6 flex flex-col gap-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold-accent-muted">
            {tags?.[0] || 'Meta Ads'}
          </span>
          <h3 className="font-black text-primary-dark text-base md:text-lg leading-snug line-clamp-1">
            {label_ua}
          </h3>
        </div>

        <div className="px-6 pb-6 flex flex-col gap-4">
          <p className="text-primary-dark/75 text-xs md:text-sm leading-relaxed line-clamp-3">
            {desc}
          </p>
          <div className="pt-3 border-t border-primary-dark/5 flex">
            <p className="text-primary-dark/75">{task}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CasesListItem;
