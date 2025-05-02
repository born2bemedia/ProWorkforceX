import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Script from 'next/script';

import { OrderDialog, OrderForm } from '@/features/order-form/components';
import {
  RequestDialog,
  RequestForm,
  RequestScrollContainer,
} from '@/features/request-form/components';

import { Toaster } from '@/shared/lib/toast';
import { Footer } from '@/shared/ui/components/footer';
import { Header } from '@/shared/ui/components/header';
import { Preloader } from '@/shared/ui/components/preloader';

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
        <Script src="/scripts/translation.js" strategy="beforeInteractive" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0RY6VYMMYY"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0RY6VYMMYY');
          `}
        </Script>
        {process.env.GOOGLE_TRANSLATION_CONFIG && (
          <Script
            src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={outfit.variable}>
        <Header />
        <RequestDialog>
          <RequestScrollContainer>
            <RequestForm />
          </RequestScrollContainer>
        </RequestDialog>
        <OrderDialog>
          <RequestScrollContainer>
            <OrderForm />
          </RequestScrollContainer>
        </OrderDialog>
        <main className="main-layout">{children}</main>
        <Footer />
        <Toaster />
        <Preloader />
      </body>
    </html>
  );
}
