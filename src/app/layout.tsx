import 'styles/globals.scss';
import 'styles/mobile.scss';
import AppProvider from 'components/AppProvider';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Playfair_Display } from 'next/font/google';
import { Source_Serif_4 } from 'next/font/google';

const source = Source_Serif_4({ subsets: ['latin'], weight: '400', variable: '--source' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export const fetchCache = 'force-cache';

export default function RootLayout({ children }: RootLayoutProps) {
  const font = playfair.className + ' ' + source.variable;

  return (
    <html lang="en">
      <body className={font}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
