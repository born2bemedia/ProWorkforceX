import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Script from 'next/script';

import {
  RequestDialog,
  RequestForm,
  RequestScrollContainer,
} from '@/features/request-form/components';

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
      <head>
        <title>ProWorkforceX</title>
        <Script src="/scripts/translation.js" strategy="beforeInteractive" />
        {process.env.GOOGLE_TRANSLATION_CONFIG && (
          <Script
            src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={outfit.variable}>
        <Header />
        <main className="main-layout">{children}</main>
        <Footer />
        <RequestDialog>
          <RequestScrollContainer>
            <RequestForm />
          </RequestScrollContainer>
        </RequestDialog>
      </body>
    </html>
  );
}
