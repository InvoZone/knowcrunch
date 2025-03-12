import { Foco } from "@/lib/fonts"; // Importing custom font class
import type { Metadata, Viewport } from "next"; // Importing types for metadata and viewport
import "./globals.css"; // Importing global CSS styles
import StoreProvider from "./StoreProvider"; // Importing store provider for state management
import { NextIntlClientProvider } from "next-intl"; // Importing provider for internationalization
import { getLocale, getMessages } from "next-intl/server"; // Importing functions for locale and messages
import { ThemeProvider } from "@mui/material"; // Importing theme provider for Material-UI
import theme from "@/theme"; // Importing custom theme
import { breadcrumbJsonLd, organizationJsonLd, webpageJsonLd } from "@/constants/jsonLd"; // Importing JSON-LD data for SEO
import Layout from "@/components/Layout"; // Importing layout component

export const metadata: Metadata = {
  title: "Knowcrunch - Professional digital marketing courses & training",
  applicationName: "Knowcrunch",
  authors: [{ name: "Knowcrunch" }],
  description: "Knowcrunch is offering high-level professional digital & social media marketing training & education in a class or via video-on-demand e-learning. Enroll now.",
  robots: "index, follow",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_LINK}`),
  publisher: "Knowcrunch",
}; // Defining metadata for the application

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}; // Defining viewport settings

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale(); // Fetching locale

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
