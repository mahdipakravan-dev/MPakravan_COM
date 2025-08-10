'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AmbulanceIcon, FileCodeIcon, GraduationCapIcon, SmileIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React, { useEffect, useRef } from 'react'
import { Button } from '../ui/button'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  const t = useTranslations('services')
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const context = gsap.context(() => {
      const elements = gsap.utils.toArray('.fade-in')
      elements.forEach((el: any) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          },
        )
      })

      if (gridRef.current) {
        gsap.to(gridRef.current, {
          backgroundPositionY: '+=200',
          duration: 10,
          ease: 'none',
          repeat: -1,
        })
      }
    }, containerRef)

    return () => {
      context.revert()
    }
  }, [])

  const GradientBox = (props: {
    title: string
    description: string
    icon: React.ReactNode
    price?: string
    link: string
  }) => {
    return (
      <div className="relative w-full rounded-lg overflow-hidden fade-in">
        <div className="absolute inset-0 bg-shadow-gradient pointer-events-none"></div>
        <div className="relative z-10 p-4">
          <div className="flex justify-start items-center gap-2">
            <i className="mt-4">{props.icon}</i>
            <h3 className="text-white text-lg font-semibold mt-4">{props.title}</h3>
          </div>
          <p className=" mt-4 leading-8 opacity-90 rtl:text-lg rtl:leading-10 font-regular">
            {props.description}
          </p>
          <Button
            variant="outlinePrimary"
            className="w-full mt-4"
            onClick={() => {
              window.open(props.link, '_blank')
            }}
          >
            {t('take')}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <section className="w-full mt-12 container h-full relative" id="services" ref={containerRef}>
      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0',
        }}
      />
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-2/5 h-full flex flex-col justify-start md:sticky right-0 top-[96px] items-start">
          <p className="text-[36px] font-bold fade-in">{t('heading')}</p>
          <hr className="w-28 border-2 border-primary opacity-60 mt-1 fade-in" />
          <p className="text-sm rtl:text-lg rtl:leading-10 opacity-60 mt-6 leading-9 fade-in w-full">
            {t('description')}
          </p>
        </div>
        <div className="w-full md:w-3/5 mt-4 lg:mt-0 lg:mx-8 h-full flex flex-col lg:flex-row justify-evenly gap-4">
          <div className="flex flex-col gap-y-4 lg:-mt-8">
            <GradientBox
              title={t('websiteDevelopment.title')}
              description={t('websiteDevelopment.description')}
              icon={<GraduationCapIcon width={44} height={44} className="text-primary" />}
              link={t('websiteDevelopment.link')}
              price={t('websiteDevelopment.price')}
            />
            <GradientBox
              title={t('websiteDesign.title')}
              description={t('websiteDesign.description')}
              icon={<AmbulanceIcon width={44} height={44} className="text-primary" />}
              link={t('websiteDesign.link')}
              price={t('websiteDesign.price')}
            />
          </div>
          <div className="flex flex-col gap-y-4 -mt-2">
            <GradientBox
              title={t('websiteSecurity.title')}
              description={t('websiteSecurity.description')}
              icon={<FileCodeIcon width={44} height={44} className="text-primary" />}
              link={t('websiteSecurity.link')}
              price={t('websiteSecurity.price')}
            />
            <GradientBox
              title={t('websiteMentorship.title')}
              description={t('websiteMentorship.description')}
              icon={<SmileIcon width={44} height={44} className="text-primary" />}
              link={t('websiteMentorship.link')}
              price={t('websiteMentorship.price')}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
