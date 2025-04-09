import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

import { Footer } from '@/shared/ui/components/footer';
import { Header } from '@/shared/ui/components/header';

import './globals.css';
import './reset.css';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ProWorkforceX',
  description: 'ProWorkforceX',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.variable}>
        <Header />
        <main className="main-layout">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
