import { TG_LINK } from '@/lib/social-list';

import { TelegramIcon } from './icons/TelegramIcon';

interface TelegramLinkProps {
  extraStyle?: string;
}

const TelegramLink = ({ extraStyle }: TelegramLinkProps) => {
  return (
    <a
      href={TG_LINK}
      target="_blank"
      rel="nofollow noopener"
      aria-label="telegram link"
      className={`
        group relative inline-flex items-center justify-center gap-2
        overflow-hidden rounded-xl
        px-6 py-3
        border border-gold-middle-accent/30
        tracking-wide
        transition-[transform, border-color, filter]
        duration-300
        hover:border-gold-middle-accent/80
        hover:brightness-105
        active:scale-95
        ${extraStyle ?? ''}
      `}
    >
      <span className="text-gold-accent font-sans font-semibold text-sm md:text-base">
        Написати в Telegram
      </span>
      <TelegramIcon className="w-5 h-5 fill-gold-accent" />
    </a>
  );
};

export default TelegramLink;
