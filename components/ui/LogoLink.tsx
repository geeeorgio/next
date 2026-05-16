import Image from 'next/image';
import Link from 'next/link';

const LogoLink = () => {
  return (
    <Link
      href="/"
      className="group relative block w-24 h-10 md:w-30 md:h-12 xl:w-36 lg:h-14 transition-all duration-500 ease-in-out "
    >
      <div className="absolute inset-0 rounded-full bg-gold-accent/5 opacity-20 transition-opacity duration-700 group-hover:opacity-100 group-hover:bg-gold-accent/10" />

      <Image
        src="/logo.png"
        alt="Кирилюк Людмила логотип"
        fill
        sizes="(max-width: 768px) 96px, (max-width: 1024px) 120px, 144px"
        priority
        className="object-contain transition-all duration-500 ease-learn-more group-hover:brightness-110 group-hover:saturate-110"
      />
    </Link>
  );
};

export default LogoLink;
