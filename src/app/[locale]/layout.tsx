import * as React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import localFont from "next/font/local";
import { Roboto_Condensed } from "next/font/google";
import MuiThemeProvider from "@/components/theme/mui-theme-provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import "../css/globals.css";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

const newake = localFont({
  src: [
    {
      path: "../../../public/indieground-newake-font/Newake-Font-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-newake",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
  // adjustFontFallback: true,
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: Omit<LayoutProps, "children">,
): Promise<Metadata> {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/favicon.ico?v=2",
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body className={newake.variable + " " + robotoCondensed.variable}>
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
