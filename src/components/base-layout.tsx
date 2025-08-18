import clsx from 'clsx'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Orbitron, Vazirmatn } from 'next/font/google'
import localFont from 'next/font/local'
import { ReactNode } from 'react'

const orbitronFont = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
})

const morabbaFont = localFont({
  variable: '--font-morabba',
  src: [
    {
      path: '../fonts/morabba/fonts/woff2/Morabba-UltraLight.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/morabba/fonts/woff2/Morabba-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/morabba/fonts/woff2/Morabba-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/morabba/fonts/woff2/Morabba-Heavy.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

const iranYekkan = localFont({
  variable: '--font-morabba',
  src: [
    {
      path: '../fonts/yekan/woff2/IRANYekanX-UltraLight.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/yekan/woff2/IRANYekanX-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/yekan/woff2/IRANYekanX-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/yekan/woff2/IRANYekanX-Heavy.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

const titleFont = Vazirmatn({
  variable: '--font-title',
  subsets: ['arabic'],
  weight: '400',
})

type Props = {
  children: ReactNode
  locale: string
}

export default async function BaseLayout({ children, locale }: Props) {
  const messages = await getMessages()

  return (
    <html className="h-full" dir={locale === 'en' ? 'ltr' : 'rtl'} lang={locale}>
      <body
        className={clsx(
          titleFont.className,
          locale === 'fa'
            ? `${morabbaFont.className} ${morabbaFont.variable}`
            : ` ${orbitronFont.className} ${orbitronFont.variable} antialiased`,
        )}
      >
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
