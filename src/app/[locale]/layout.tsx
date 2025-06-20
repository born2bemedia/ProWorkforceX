import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { hasLocale, NextIntlClientProvider } from 'next-intl';

import { OrderDialog, OrderForm } from '@/features/order-form/components';
import {
  RequestDialog,
  RequestForm,
  RequestScrollContainer,
} from '@/features/request-form/components';

import { Toaster } from '@/shared/lib/toast';
import { CookieConsent } from '@/shared/ui/components/cookie-consent';
import { Footer } from '@/shared/ui/components/footer';
import { Header } from '@/shared/ui/components/header';
import { Preloader } from '@/shared/ui/components/preloader';

import './globals.css';
import './reset.css';
import { routing } from '@/i18n/routing';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ProWorkforceX',
  description: 'ProWorkforceX',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
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
      </head>
      <body className={outfit.variable}>
        <NextIntlClientProvider>
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
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
