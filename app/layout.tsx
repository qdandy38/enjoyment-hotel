import type { Metadata } from 'next';
import { Noto_Serif_TC } from 'next/font/google';
import Header from '@/components/layout/header';
import '@/styles/globals.css';
import '@/styles/index.css';

const notoSerifTC = Noto_Serif_TC({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Enjoyment Hotel',
  description: 'Enjoyment Hotel - booking',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={notoSerifTC.className}>
        <Header />
        {/* <main className="container">{children}</main> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
