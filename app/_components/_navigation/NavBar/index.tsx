import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="font-tiltNeon px-5 md:px-10 py-3">
      <Link data-testid="my-name" href="/" className="text-2xl">
        Alex Beciana
      </Link>
      <ul></ul>
    </nav>
  );
};

export default NavBar;
