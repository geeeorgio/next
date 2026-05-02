import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
