import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default Providers;
