import Image from 'next/image';
import Link from 'next/link';

const LogoLink = () => {
  return (
    <Link href="/" className="group relative block w-24 h-10 md:w-30 md:h-12 xl:w-36 lg:h-14">
      <Image
        src="/logo.png"
        alt="Кирилюк Людмила логотип"
        fill
        sizes="(max-width: 768px) 96px, (max-width: 1024px) 120px, 144px"
        priority
        className="object-contain"
      />
    </Link>
  );
};

export default LogoLink;
