import Link from 'next/link';

interface OrderLinkProps {
  extraStyle?: string;
}

const OrderLink = ({ extraStyle }: OrderLinkProps) => {
  return (
    <Link
      href={'/order'}
      className={`relative ${extraStyle ?? ''} overflow-hidden cursor-pointer py-2 sm:py-3 lg:py-4 px-2 md:px-3 lg:px:5 bg-linear-to-b from-gold-accent via-gold-middle-accent to-gold-accent-sand rounded-xl shadow-[0_10px_20px_-10px_rgba(244,216,143,0.3)] hover:shadow-[0_15px_30px_-10px_rgba(244,216,143,0.45)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center active:scale-95`}
    >
      <span className="text-primary-deep font-semibold text-sm md:text-base">
        Обговорити проєкт
      </span>
    </Link>
  );
};

export default OrderLink;
