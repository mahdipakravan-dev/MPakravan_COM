import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { defaultLocale } from '@/config'

export const routing = defineRouting({
  locales: ['en', 'fa'],
  defaultLocale: defaultLocale,
  localeDetection: false,
})

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
