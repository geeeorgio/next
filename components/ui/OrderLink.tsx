import Link from 'next/link';

const OrderLink = () => {
  return (
    <Link
      href={'/order'}
      className="w-full sm:w-auto relative overflow-hidden cursor-pointer p-1 md:p-2 lg:p-3 xl:p-4 bg-linear-to-b from-gold-accent via-gold-middle-accent to-gold-accent-muted rounded-xl shadow-[0_10px_20px_-10px_rgba(224,184,79,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(224,184,79,0.6)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
    >
      <span className="text-primary-deep font-semibold text-sm md:text-base">
        Обговорити проєкт
      </span>
    </Link>
  );
};

export default OrderLink;
