import type { Metadata } from "next";
import "../css/globals.css";
import * as React from "react";
import { Roboto_Condensed } from "next/font/google";
import MuiThemeProvider from "@/components/theme/mui-theme-provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();

  const meta = messages.meta as {
    title: string;
    description: string;
  };

  return {
    title: meta.title,
    description: meta.description,
    icons: {
      icon: "/favicon.ico?v=2",
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body className={robotoCondensed.variable}>
        <AppRouterCacheProvider>
          <MuiThemeProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
