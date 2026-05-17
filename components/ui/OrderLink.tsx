import Link from 'next/link';

interface OrderLinkProps {
  extraStyle?: string;
}

const OrderLink = ({ extraStyle }: OrderLinkProps) => {
  return (
    <Link
      href="/order"
      className={`
        group inline-flex items-center justify-center
        rounded-xl
        px-6 py-3
        bg-linear-to-br
        from-gold-middle-accent via-gold-accent to-gold-accent-sand
        text-primary-deep
        text-sm md:text-base
        font-semibold
        tracking-wide
        transition-[transform, filter]
        duration-300
        hover:brightness-110
        active:scale-95
        ${extraStyle ?? ''}
      `}
    >
      <span className="relative z-10">Обговорити проєкт</span>
    </Link>
  );
};

export default OrderLink;
