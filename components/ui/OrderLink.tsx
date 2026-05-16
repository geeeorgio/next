import Link from 'next/link';

interface OrderLinkProps {
  extraStyle?: string;
}

const OrderLink = ({ extraStyle }: OrderLinkProps) => {
  return (
    <Link
      href={'/order'}
      className={`relative flex items-center justify-center ${extraStyle ?? ''} overflow-hidden cursor-pointer py-2 sm:py-3 lg:py-4 px-2 md:px-3 lg:px-5 rounded-xl bg-linear-to-br from-gold-accent via-gold-middle-accent to-gold-accent-sand hover:brightness-105 transition-transform active:scale-95`}
    >
      <span className="text-center text-primary-deep font-semibold text-sm md:text-base">
        Обговорити проєкт
      </span>
    </Link>
  );
};

export default OrderLink;
