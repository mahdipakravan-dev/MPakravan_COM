'use client'

import Image from 'next/image'
import { Button } from '../ui/button'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslations } from 'next-intl'
import { cn, makeImageUrl } from '@/lib/utils'
import useLang from '@/hooks/useLang'
import Link from 'next/link'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogHeader } from '../ui/dialog'
import clsx from 'clsx'

gsap.registerPlugin(ScrollTrigger)

type Filters = 'all' | 'react' | 'node' | 'wp' | 'academic' | 'game' | 'opensource'
type Props = {
  portfolios: {
    category: string
    collectionId: string
    collectionName: string
    created: string
    description: string
    employer: string
    enDescription: string
    id: string
    images: string[]
    name: string
    nameEn: string
    updated: string
    stack: Filters[]
    url: string
  }[]
}

const PortfolioSection = ({ portfolios }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const t = useTranslations('PortfolioSection')
  const lang = useLang()
  const [filter, setFilter] = useState<Filters>('react')
  const filteredPortfolios = portfolios.filter((portfolio) => {
    if (filter === 'all') return true
    return portfolio.stack.includes(filter)
  })

  const [selectedPortfolio, setSelectedPortfolio] = useState<Props['portfolios'][number] | null>(
    null,
  )

  const onClickPortfolio = (portfolio: Props['portfolios'][number]) => {
    const url = portfolio.url
    if (url) {
      window.open(url, '_blank')
    }
    // setSelectedPortfolio(portfolio)
  }
  const closeModal = () => {
    setSelectedPortfolio(null)
  }

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const cards = section.querySelectorAll('.project-card')

    // Animate the cards when the section comes into view
    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.8, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%', // Animation starts when the section's top is 80% from the top of the viewport
          end: 'bottom 20%', // Ends when the section's bottom is 20% from the top
          toggleActions: 'play none none none', // Plays the animation only once
        },
      },
    )
  }, [])

  return (
    <section ref={sectionRef} className="container " id="portfolio">
      <h2 className="!text-center text-[36px] font-bold">
        <span className="text-primary">{t('greenTitle')} </span>
        {t('whiteTitle')}
      </h2>
      <p className="!text-center hyphens-manual text-sm opacity-60 mt-6 leading-9 rtl:text-lg">
        {t('description')}
      </p>

      <div className="flex flex-wrap justify-center gap-2 mt-12">
        <Button
          variant={'outlinePrimary'}
          className={filter === 'all' && 'bg-primary text-white'}
          onClick={() => setFilter('all')}
        >
          {t('all')}
        </Button>
        <Button
          variant={'outlinePrimary'}
          className={filter === 'react' && 'bg-primary text-white'}
          onClick={() => setFilter('react')}
        >
          {t('react')}
        </Button>
        <Button
          variant={'outlinePrimary'}
          className={filter === 'node' && 'bg-primary text-white'}
          onClick={() => setFilter('node')}
        >
          {t('backend')}
        </Button>
        <Button
          variant={'outlinePrimary'}
          className={filter === 'game' && 'bg-primary text-white'}
          onClick={() => setFilter('game')}
        >
          {t('game')}
        </Button>
        <Button
          variant={'outlinePrimary'}
          className={filter === 'opensource' && 'bg-primary text-white'}
          onClick={() => setFilter('opensource')}
        >
          {t('opensource')}
        </Button>
        <Button
          variant={'outlinePrimary'}
          className={filter === 'wp' && 'bg-primary text-white'}
          onClick={() => setFilter('wp')}
        >
          {t('wp')}
        </Button>
        <Button
          variant={'outlinePrimary'}
          className={filter === 'academic' && 'bg-primary text-white'}
          onClick={() => setFilter('academic')}
        >
          {t('academic')}
        </Button>
      </div>

      <div className="mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
          {filteredPortfolios.map((portfolio, index) => (
            <div
              key={`po_${portfolio.id}`}
              rel="noopener noreferrer"
              onClick={() => onClickPortfolio(portfolio)}
            >
              <div className="relative w-full min-w-[200px] overflow-hidden rounded-md shadow-lg project-card group transform transition-transform duration-300 hover:scale-105">
                <Image
                  src={makeImageUrl(
                    portfolio.collectionId,
                    portfolio.id,
                    portfolio.images[0] || 'default.png',
                  )}
                  objectFit="contain"
                  // fill
                  width={300}
                  height={160}
                  alt="PROJECT"
                  className="rounded-md"
                />

                <div
                  className={cn(
                    `absolute cursor-pointer inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center`,
                    'flex flex-col',
                    'bg-gradient-to-br from-[#315b48] to-[#1a1a1a]',
                  )}
                >
                  <p className="text-white text-lg font-semibold tracking-wide text-center px-4">
                    {lang === 'en' ? portfolio.nameEn : portfolio.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={selectedPortfolio !== null}
        onOpenChange={(open) => setSelectedPortfolio((prev) => (open ? prev : null))}
      >
        <DialogContent className="h-[90vh] overflow-scroll">
          <DialogHeader>
            <DialogTitle className="my-6">
              {lang === 'en' ? selectedPortfolio?.nameEn : selectedPortfolio?.name}
            </DialogTitle>
            <DialogDescription
              className={clsx('leading-10 text-white', lang === 'fa' && 'text-md')}
              dangerouslySetInnerHTML={{
                __html:
                  lang === 'en' ? selectedPortfolio?.enDescription : selectedPortfolio?.description,
              }}
            ></DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default PortfolioSection
