import type { Metadata } from "next";
import "./css/globals.css";
import * as React from "react";
import { Roboto_Condensed } from "next/font/google";
import MuiThemeProvider from "@/components/theme/mui-theme-provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "Tele Caster Nilsen - dev & coffee",
  description: "My take on my website portfolio.",
  icons: {
    icon: "/favicon.ico?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={robotoCondensed.variable}>
        <AppRouterCacheProvider>
          <MuiThemeProvider>{children}</MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
