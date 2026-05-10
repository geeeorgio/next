import Image from 'next/image';
import Link from 'next/link';

const LogoLink = () => {
  return (
    <Link
      href="/"
      className="relative w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20
             filter drop-shadow-[0_5px_15px_rgba(224,184,79,0.4)]
             hover:drop-shadow-[0_8px_20px_rgba(224,184,79,0.6)]
             transition-all duration-300"
    >
      <Image
        src="/logo.png"
        alt="Кирилюк Людмила логотип"
        fill
        sizes="(max-width: 768px) 40px, (max-width: 1024px) 60px, 80px"
        priority
        className="object-contain"
      />
    </Link>
  );
};

export default LogoLink;
