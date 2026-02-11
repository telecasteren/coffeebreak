import type { Metadata } from "next";
import Script from "next/script";
import "./css/globals.css";
import { MuiThemeProvider } from "@/components/theme/mui-theme-provider";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "Tele Caster Nilsen - dev & coffee",
  description: "A Next.js. showcasing website.",
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
    <html lang="en">
      <head>
        <Script
          src="https://kit.fontawesome.com/2669aff4ad.js"
          crossOrigin="anonymous"
        ></Script>
      </head>
      <body className={robotoCondensed.variable}>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
