import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import localFont from 'next/font/local'
import "../globals.css";
import { ProgressProvider } from "../../components/progress-provider";
import { TailwindIndicator } from "../../components/tailwind-indicator";
import { routing } from "../../i18n/routing";

const orbitronFont = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const morabbaFont = localFont({
  variable: "--font-morabba",
  src: [
    {
      path: '../../fonts/morabba/fonts/woff2/Morabba-UltraLight.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../fonts/morabba/fonts/woff2/Morabba-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/morabba/fonts/woff2/Morabba-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../fonts/morabba/fonts/woff2/Morabba-Heavy.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: "Mahdi Pakravan",
  description: "Developer",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params : {locale : string}
}>) {

  if (!routing.locales.includes(locale as "en" | "fa")) {
    locale = "en"
  }

  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <body
        className={locale === "fa" 
          ? `${morabbaFont.className} ${morabbaFont.variable}` 
          : ` ${orbitronFont.className} ${orbitronFont.variable} antialiased`
        }
      >
        <ProgressProvider>
          {children}
          <TailwindIndicator/>
        </ProgressProvider>
      </body>
    </html>
  );
}
