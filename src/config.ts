export const locales = ['en', 'fa'] as const

export const defaultLocale: Locale = 'fa'

export type Locale = (typeof locales)[number]
