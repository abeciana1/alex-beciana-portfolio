'use client';
import { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
} from '@nextui-org/react';
import Link from 'next/link';
import NavLink from '@/app/_components/_navigation/NavLink';
import { IconButton } from '@/app/_components/_buttons';
import { useTheme } from 'next-themes';
import { MdLightMode, MdNightlightRound } from 'react-icons/md';
import { ColorE, RadiusE } from '@/app/_definitions/enums/_general';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const modeChangeHandler = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="font-tiltNeon py-3 bg-background text-foreground"
    >
      <NavbarContent>
        <NavbarBrand>
          <Link
            href="/"
            prefetch
            data-testid="my-name"
            className="text-2xl text-foreground"
          >
            Alex Beciana
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavLink linkText="About" href="/about" />
        <NavLink linkText="Freelance" href="/freelance" />
        <NavLink linkText="Projects" href="/projects" />
        <NavLink linkText="References" href="/references" />
        <NavLink linkText="Blog" href="/blog" />
        <NavLink linkText="Contact" href="/contact" />
      </NavbarContent>
      <NavbarContent justify="end">
        <IconButton
          iconOnly
          startIcon
          color={ColorE.BACK}
          onClick={modeChangeHandler}
          testId="mode-changer"
          iconSize={22}
          radius={RadiusE.FULL}
          buttonIcon={theme === 'light' ? MdNightlightRound : MdLightMode}
          textColor={ColorE.FORE}
        />
      </NavbarContent>
      <NavbarMenu className="pt-6 gap-4 bg-background">
        <NavLink linkText="About" href="/about" />
        <NavLink linkText="Freelance" href="/freelance" />
        <NavLink linkText="Projects" href="/projects" />
        <NavLink linkText="References" href="/references" />
        <NavLink linkText="Blog" href="/blog" />
        <NavLink linkText="Contact" href="/contact" />
      </NavbarMenu>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden font-bold text-3xl text-foreground"
      />
    </Navbar>
  );
};

export default NavBar;
