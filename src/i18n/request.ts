import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  console.log('REQ_LOCALE ', locale)

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }

  console.log('LOCALE - ', locale)

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
