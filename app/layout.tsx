
import './globals.css';
import Providers from '@/app/providers';
import { Tilt_Neon, Montserrat } from 'next/font/google';
import NavBar from '@/app/(components)/_navigation/NavBar'

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
        className={`${montserrat.variable} ${tiltNeon.variable} antialiased`}
      >
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
