import './globals.css';
import Providers from '@/app/providers';
import { Tilt_Neon, Montserrat } from 'next/font/google';
import NavBar from '@/app/_components/_navigation/NavBar';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alex Beciana',
  description: 'Full stack software engineer with three years of experience with an entrepreneurial spirit.'
}

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const tiltNeon = Tilt_Neon({
  subsets: ['latin'],
  variable: '--font-tilt-neon',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${tiltNeon.variable} antialiased bg-background text-foreground`}
      >
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
