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
import IconButton from '@/app/_components/_buttons/IconButton';
import { useTheme } from 'next-themes';
import { MdLightMode, MdNightlightRound } from 'react-icons/md';
import { ColorE, RadiusE } from '@/app/_definitions/enums/_general';
import cx from 'classnames';

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
      className={cx(
        'z-50 font-tiltNeon py-3 text-foreground backdrop-blur-none w-full',
        {
          ['bg-background']: isMenuOpen,
          ['bg-transparent']: !isMenuOpen,
        }
      )}
    >
      <NavbarContent className="max-w-fit">
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
      <NavbarContent
        data-testid="linkList"
        className="hidden tab:flex gap-4"
        justify="center"
      >
        <NavLink linkText="About" href="/about" />
        <NavLink linkText="Freelance" href="/freelance" />
        <NavLink linkText="Projects" href="/projects" />
        <NavLink linkText="References" href="/references" />
        <NavLink linkText="Blog" href="/blog" />
        <NavLink linkText="Contact" href="/contact" />
      </NavbarContent>
      <NavbarContent className="max-w-fit" justify="end">
        <IconButton
          iconOnly
          startIcon
          color={ColorE.TRANSPARENT}
          onClick={modeChangeHandler}
          testId="mode-changer"
          iconSize={22}
          radius={RadiusE.FULL}
          buttonIcon={theme === 'light' ? MdNightlightRound : MdLightMode}
          textColor={ColorE.FORE}
          variant="bordered"
        />
      </NavbarContent>
      <NavbarMenu className="pt-6 gap-4 bg-background h-screen z-50 px-12">
        <NavLink linkText="About" href="/about" />
        <NavLink linkText="Freelance" href="/freelance" />
        <NavLink linkText="Projects" href="/projects" />
        <NavLink linkText="References" href="/references" />
        <NavLink linkText="Blog" href="/blog" />
        <NavLink linkText="Contact" href="/contact" />
      </NavbarMenu>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="tab:hidden font-bold text-3xl text-foreground"
      />
    </Navbar>
  );
};

export default NavBar;
