import Link from 'next/link';

const OrderLink = () => {
  return (
    <Link
      href={'/order'}
      className="relative overflow-hidden cursor-pointer py-1 md:py-2 lg:py-3 xl:py-4 px-2 md:px-3 lg:px-4 xl:px:5 bg-linear-to-b from-gold-accent via-gold-middle-accent to-gold-accent-sand rounded-xl shadow-[0_10px_20px_-10px_rgba(244,216,143,0.28)] hover:shadow-[0_15px_30px_-10px_rgba(244,216,143,0.38)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center active:scale-95"
    >
      <span className="text-primary-deep font-semibold text-sm md:text-base">
        Обговорити проєкт
      </span>
    </Link>
  );
};

export default OrderLink;
