import Image from 'next/image';
import Link from 'next/link';

const LogoLink = () => {
  return (
    <Link href="/" className="group relative block w-28 h-10 md:w-32 md:h-12 xl:w-40 lg:h-14">
      <Image
        src="/logo.png"
        alt="Кирилюк Людмила логотип"
        fill
        sizes="(max-width: 768px) 112px, (max-width: 1024px) 128px, 160px"
        priority
        className="object-contain"
      />
    </Link>
  );
};

export default LogoLink;
