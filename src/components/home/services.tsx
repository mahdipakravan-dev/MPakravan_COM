'use client'

import { MapIcon, PaintbrushIcon, SquareCodeIcon, SwordIcon } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(ScrollTrigger)

const Services = ({ t }: { t: Record<string, any> }) => {
  const containerRef = useRef<HTMLDivElement>(null)

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
              start: 'top 80%', // Animation starts when the top of the element is at 80% of the viewport height
              toggleActions: 'play none none none', // Play animation once
            },
          },
        )
      })
    }, containerRef)

    return () => {
      context.revert() // Clean up animations on component unmount
    }
  }, [])

  const GradientBox = (props: { title: string; description: string; icon: React.ReactNode }) => {
    return (
      <div className="relative h-[min(380px)] w-full rounded-lg overflow-hidden fade-in">
        <div className="absolute inset-0 bg-shadow-gradient pointer-events-none"></div>
        <div className="relative z-10 p-4">
          {props.icon}
          <h3 className="text-white text-lg font-semibold mt-4">{props.title}</h3>
          <p className=" mt-4 leading-8 opacity-90 rtl:text-md rtl:leading-10">
            {props.description}
          </p>
        </div>
      </div>
    )
  }

  return (
    <section
      className="w-full min-h-[750px] mt-28 container h-full"
      id="services"
      ref={containerRef}
    >
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-2/5 h-full flex flex-col justify-start md:sticky right-0 top-[96px] items-start">
          <p className="text-[36px] font-bold fade-in">{t['heading']}</p>
          <hr className="w-28 border-2 border-primary opacity-60 mt-1 fade-in" />
          <p className="text-sm rtl:text-lg rtl:leading-10 opacity-60 mt-6 leading-9 fade-in w-full">
            {t['description']}
          </p>
          <Button
            onClick={() => {
              window.open('/docs/cv.pdf', '_blank')
            }}
            variant="outlinePrimary"
            className="mt-2 w-full rtl:text-lg"
          >
            {t['button']}
          </Button>
        </div>
        <div className="w-full md:w-3/5 mt-4 lg:mt-0 lg:mx-8 h-full flex flex-col lg:flex-row justify-evenly gap-4">
          <div className="flex flex-col gap-y-4 lg:-mt-8">
            <GradientBox
              title={t.websiteDevelopment.title}
              description={t.websiteDevelopment.description}
              icon={<SquareCodeIcon width={64} height={64} className="text-primary" />}
            />
            <GradientBox
              title={t.websiteDesign.title}
              description={t.websiteDesign.description}
              icon={<PaintbrushIcon width={64} height={64} className="text-primary" />}
            />
          </div>
          <div className="flex flex-col gap-y-4 -mt-2">
            <GradientBox
              title={t.websiteSecurity.title}
              description={t.websiteSecurity.description}
              icon={<SwordIcon width={64} height={64} className="text-primary" />}
            />
            <GradientBox
              title={t.websiteMentorship.title}
              description={t.websiteMentorship.description}
              icon={<MapIcon width={64} height={64} className="text-primary" />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
