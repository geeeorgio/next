import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
