import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </NextThemesProvider>
  );
};

export default Providers;
