'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '../icon'

export const HeaderLinks = (t: Record<string, any>) => [
  {
    text: t['home'],
    href: '/',
    id: 'home',
  },
  {
    text: t['services'],
    href: '#services',
    id: 'services',
  },
  {
    text: t['feedbacks'],
    href: '#feedback',
    id: 'feedback',
  },
  {
    text: t['contact'],
    href: '#contact',
    id: 'contact',
  },
]

const MobileNav = ({ translations }: { translations: Record<string, any> }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex items-center justify-center p-0 md:hidden"
          type="button"
          aria-label="Toggle menu"
          title="Toggle menu"
          variant="ghost"
        >
          <Icon name={'menu'} className="size-6" size={40} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {HeaderLinks(translations).map((link) => (
          <DropdownMenuItem key={link.text} asChild>
            <Link
              href={link.href}
              className="flex items-center gap-4"
              onClick={() => {
                setOpen(false)
                const services = document.getElementById(link.id)
                if (services) {
                  services.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              <div>{link.text}</div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileNav
