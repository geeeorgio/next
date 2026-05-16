import Link from 'next/link';

interface OrderLinkProps {
  extraStyle?: string;
}

const OrderLink = ({ extraStyle }: OrderLinkProps) => {
  return (
    <Link
      href="/order"
      className={`
        group relative inline-flex items-center justify-center
        overflow-hidden rounded-xl
        px-6 py-3
        bg-gold-accent-muted
        text-primary-deep
        font-bold
        text-sm md:text-base
        tracking-wider
        uppercase
        cursor-pointer
        transition-[transform,background-color]
        duration-300
        hover:bg-gold-middle-accent
        active:scale-95
        ${extraStyle ?? ''}
      `}
    >
      <span className="absolute inset-x-0 top-0 h-px bg-white/20 pointer-events-none" />

      <span className="relative z-10">Обговорити проєкт</span>

      <span
        className="
          absolute inset-0
          w-[150%] h-full
          bg-linear-to-r from-transparent via-white/25 to-transparent
          -translate-x-full
          group-hover:animate-shimmer
          pointer-events-none
        "
      />
    </Link>
  );
};

export default OrderLink;
