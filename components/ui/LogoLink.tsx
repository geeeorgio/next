import Image from 'next/image';
import Link from 'next/link';

const LogoLink = () => {
  return (
    <Link
      href="/"
      className="relative block w-24 h-10 md:w-30 md:h-12 xl:w-36 lg:h-14
             filter drop-shadow-[0_5px_15px_rgba(214,177,104,0.22)]
             hover:drop-shadow-[0_8px_20px_rgba(244,216,143,0.32)]
             transition-all duration-300"
    >
      <Image
        src="/logo.png"
        alt="Кирилюк Людмила логотип"
        fill
        sizes="(max-width: 768px) 112px, (max-width: 1024px) 144px, 160px"
        priority
        className="object-contain"
      />
    </Link>
  );
};

export default LogoLink;
