import { NavLinkI } from '@/app/_definitions/interfaces/_navigation';
import Link from 'next/link'

const NavLink = ({
  linkText,
  href
}: NavLinkI) => {
  return (
    <li>
      <Link href={href} prefetch>
        {linkText}
      </Link>
    </li>
  )
};

export default NavLink;
