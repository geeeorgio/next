import Link from 'next/link';

interface OrderLinkProps {
  extraStyle?: string;
}

const OrderLink = ({ extraStyle }: OrderLinkProps) => {
  return (
    <Link
      href={'/order'}
      className={`relative flex items-center justify-center ${extraStyle ?? ''} overflow-hidden cursor-pointer py-2 sm:py-3 lg:py-4 px-2 md:px-3 lg:px-5 rounded-xl bg-linear-to-br from-gold-accent via-gold-middle-accent to-gold-accent-sand shadow-[0_8px_24px_-8px_rgba(212,175,55,0.5)] hover:shadow-[0_12px_32px_-8px_rgba(212,175,55,0.65)] hover:brightness-105 transition-all duration-300 active:scale-95`}
    >
      <span className="text-center text-primary-deep font-semibold text-sm md:text-base">
        Обговорити проєкт
      </span>
    </Link>
  );
};

export default OrderLink;
