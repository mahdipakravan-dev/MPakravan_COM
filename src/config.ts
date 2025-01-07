export const locales = ['en', 'fa'] as const

export const defaultLocale: Locale = 'en'

export type Locale = (typeof locales)[number]
