import { Foco } from '@/lib/fonts';
import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import StoreProvider from './StoreProvider';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import { breadcrumbJsonLd, organizationJsonLd, webpageJsonLd } from '@/constants/jsonLd';
import Layout from '@/components/Layout';

// Defining metadata for the application
export const metadata: Metadata = {
  title: 'Knowcrunch - Professional digital marketing courses & training',
  applicationName: 'Knowcrunch',
  authors: [{ name: 'Knowcrunch' }],
  description:
    'Knowcrunch is offering high-level professional digital & social media marketing training & education in a class or via video-on-demand e-learning. Enroll now.',
  robots: 'index, follow',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_LINK}`),
  publisher: 'Knowcrunch'
};

// Defining viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={Foco.className}>
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <ThemeProvider theme={theme}>
              <Layout>{children}</Layout>
            </ThemeProvider>
          </StoreProvider>
        </NextIntlClientProvider>
        <script
          id="breadcrumb-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          id="organization-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          id="webpage-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
        />
      </body>
    </html>
  );
}
