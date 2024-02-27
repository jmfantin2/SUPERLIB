'use client';

import { LangContextProvider } from '@/contexts/LangContext';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LangContextProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </LangContextProvider>
  );
}
