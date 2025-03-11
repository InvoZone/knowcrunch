import { Foco } from "@/lib/fonts";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Knowcrunch - Professional digital marketing courses & training",
  applicationName: "Knowcrunch",
  authors: [{ name: "Knowcrunch" }],
  description: "Knowcrunch is offering high-level professional digital & social media marketing training & education in a class or via video-on-demand e-learning. Enroll now.",
  robots: "index, follow"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
      </body>
    </html>
  );
}
