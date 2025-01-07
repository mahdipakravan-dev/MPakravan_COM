import { cookies } from 'next/headers'
import { defaultLocale } from './config'

const COOKIE_NAME = 'NEXT_LOCALE'

export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale
}

export async function setUserLocale(locale: string) {
  ;(await cookies()).set(COOKIE_NAME, locale)
}
