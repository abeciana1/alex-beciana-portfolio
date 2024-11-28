'use client';
import { NavLinkI } from '@/app/_definitions/interfaces/_navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cx from 'classnames';

const NavLink = ({ linkText, href }: NavLinkI) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        prefetch
        className={cx('text-2xl', {
          ['underline text-primary']: pathname === href,
          ['text-foreground']: pathname !== href,
        })}
      >
        {linkText}
      </Link>
    </li>
  );
};

export default NavLink;
