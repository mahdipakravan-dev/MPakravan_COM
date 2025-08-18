'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import React, { useEffect, useRef } from 'react'
import { Code, Sparkles, Cpu } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
  const t = useTranslations('about')
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // const ctx = gsap.context(() => {
    //   const items = gsap.utils.toArray<HTMLElement>('.about-fade')
    //   items.forEach((el) => {
    //     gsap.fromTo(
    //       el,
    //       { opacity: 0, y: 50 },
    //       {
    //         opacity: 1,
    //         y: 0,
    //         duration: 1,
    //         ease: 'power2.out',
    //         scrollTrigger: {
    //           trigger: el,
    //           start: 'top 80%',
    //           toggleActions: 'play none none reverse',
    //         },
    //       },
    //     )
    //   })
    //   if (gridRef.current) {
    //     gsap.to(gridRef.current, {
    //       backgroundPositionY: '+=240',
    //       duration: 12,
    //       ease: 'none',
    //       repeat: -1,
    //     })
    //   }
    // }, containerRef)
    // return () => ctx.revert()
  }, [])

  return (
    <section id="about-me" ref={containerRef} className="relative container min-h-[70vh] py-24">
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-primary/40 via-emerald-500/30 to-cyan-400/30" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-fuchsia-500/30 via-purple-500/30 to-sky-400/30" />

      <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
        <div className="w-full lg:w-5/12 about-fade">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/30 via-emerald-400/20 to-cyan-400/20 opacity-60 blur transition duration-500 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl">
              <Image
                src="/images/about.jpg"
                alt={t('imageAlt')}
                width={400}
                height={1125}
                className="w-full h-auto object-cover aspect-[4/5] scale-[1.01] transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 about-fade">
          <div className="ltr:text-left rtl:text-right">
            <p className="inline-flex items-center gap-2 text-xs tracking-widest uppercase opacity-70">
              <span className="h-2 w-2 rounded-full bg-primary inline-block" />
              {t('heading')}
            </p>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold leading-tight">{t('heading')}</h2>
            <hr className="w-28 border-2 border-primary/70 mt-4" />
            <p className="mt-6 text-base md:text-lg leading-8 opacity-85">{t('description')}</p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 ltr:justify-start rtl:justify-end">
              <a
                href="/docs/cv.pdf"
                target="_blank"
                className="px-5 py-3 rounded-xl bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition about-fade"
              >
                {t('downloadCV')}
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-xl ring-1 ring-white/15 bg-white/5 backdrop-blur font-medium hover:bg-white/10 transition about-fade"
              >
                {t('contactMe')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
