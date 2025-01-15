'use client'

import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

import { Icons } from '@/components/icon'
import useLang from '@/hooks/useLang'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { LanguagesIcon } from 'lucide-react'

export function Navbar(props: { translations: Record<string, string> }) {
  const lang = useLang()
  return (
    <nav className="hidden md:flex justify-end">
      <ul className="flex justify-between gap-12 rtl:text-lg" key={'navbar'}>
        <li key="projects-menu-item">
          <Link
            href={'/'}
            legacyBehavior
            passHref
            onClick={() => {
              const services = document.getElementById('services')
              if (services) {
                services.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            {props.translations['home']}
          </Link>
        </li>

        <li key="about-menu-item">
          <Link
            href={'#services'}
            legacyBehavior
            onClick={() => {
              const services = document.getElementById('services')
              if (services) {
                services.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            passHref
          >
            {props.translations['services']}
          </Link>
        </li>

        <li key="contacts-menu-item">
          <Link
            href={'#feedback'}
            legacyBehavior
            onClick={() => {
              const services = document.getElementById('feedback')
              if (services) {
                services.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            passHref
          >
            {props.translations['feedbacks']}
          </Link>
        </li>

        <li key="portfolio">
          <Link
            href={'#portfolio'}
            legacyBehavior
            onClick={() => {
              const services = document.getElementById('portfolio')
              if (services) {
                services.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            passHref
          >
            {props.translations['portfolio']}
          </Link>
        </li>

        <li key="blog">
          <Link
            href={'#blog'}
            legacyBehavior
            onClick={() => {
              const services = document.getElementById('blog')
              if (services) {
                services.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            passHref
          >
            {props.translations['blog']}
          </Link>
        </li>

        <li key="contact">
          <Link
            href={'#contact'}
            legacyBehavior
            onClick={() => {
              const services = document.getElementById('contact')
              if (services) {
                services.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            passHref
          >
            {props.translations['contact']}
          </Link>
        </li>

        <Popover>
          <PopoverTrigger><LanguagesIcon/></PopoverTrigger>
          <PopoverContent side="bottom" align="end" className="mt-4">
            <ul className="flex gap-y-2 flex-col justify-start" key={'navbar'}>
              <li className="hover:bg-primary transition-all duration-300 ease-in-out px-2 rounded-md">
                <Link href={'/en'}>English</Link>
              </li>

              <li className="hover:bg-primary transition-all duration-300 ease-in-out px-2 rounded-md">
                <Link href={'/fa'}>فارسی</Link>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </ul>
    </nav>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & {
    title: string
    href: string
    image?: string
    badge?: string
    icon?: keyof typeof Icons
  }
>(({ className, title, image, children, ...props }, _ref) => {
  return (
    <li key={props.key}>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            'focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent',
            className,
          )}
          target={props.target || '_self'}
          {...props}
        >
          <div className="flex flex-row items-center gap-4">
            {image ? (
              <Image
                src={image}
                height={40}
                width={80}
                alt="Logo"
                className="h-fit w-[80px] opacity-70"
              />
            ) : null}

            <div className="flex flex-1 flex-col">
              <div className="flex flex-row gap-1">
                <div className="items-center text-sm font-semibold leading-tight">{title}</div>
              </div>
              <p className="mt-1 line-clamp-2 text-sm leading-tight text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = 'ListItem'
