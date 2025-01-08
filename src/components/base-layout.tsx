import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Orbitron } from 'next/font/google'
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

type Props = {
  children: ReactNode
  locale: string
}

export default async function BaseLayout({ children, locale }: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html className="h-full" lang={locale}>
      <body
        className={
          locale === 'fa'
            ? `${morabbaFont.className} ${morabbaFont.variable}`
            : ` ${orbitronFont.className} ${orbitronFont.variable} antialiased`
        }
      >
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
