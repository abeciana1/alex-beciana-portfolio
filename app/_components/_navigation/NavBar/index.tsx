'use client';
import { useState } from 'react';
import {
  Navbar,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarItem,
} from '@nextui-org/react';
import Link from 'next/link';
import NavLink from '@/app/_components/_navigation/NavLink'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="font-tiltNeon py-3"
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" prefetch data-testid="my-name" className="text-2xl">
            Alex Beciana
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavLink
          linkText='About'
          href='/about'
        />
        <NavLink
          linkText='Freelance'
          href='/freelance'
        />
        <NavLink
          linkText='Projects'
          href='/projects'
        />
        <NavLink
          linkText='References'
          href='/references'
        />
        <NavLink
          linkText='Blog'
          href='/blog'
        />
        <NavLink
          linkText='Contact'
          href='/contact'
        />
      </NavbarContent>
      <NavbarMenu className='pt-6 gap-4 bg-background'>
      <NavLink
          linkText='About'
          href='/about'
        />
        <NavLink
          linkText='Freelance'
          href='/freelance'
        />
        <NavLink
          linkText='Projects'
          href='/projects'
        />
        <NavLink
          linkText='References'
          href='/references'
        />
        <NavLink
          linkText='Blog'
          href='/blog'
        />
        <NavLink
          linkText='Contact'
          href='/contact'
        />
      </NavbarMenu>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden font-bold text-3xl"
      />
    </Navbar>
  );
};

export default NavBar;
