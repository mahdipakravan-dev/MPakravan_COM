'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Code2, Globe, Smartphone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const t = useTranslations('ShowcaseSection')

  useEffect(() => {
    const context = gsap.context(() => {
      const elements = gsap.utils.toArray('.showcase-item')
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
    }, containerRef)

    return () => {
      context.revert()
    }
  }, [])

  const features = [
    {
      icon: <Code2 className="w-12 h-12 text-primary" />,
      title: t('features.development.title'),
      description: t('features.development.description'),
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: t('features.web.title'),
      description: t('features.web.description'),
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: t('features.mobile.title'),
      description: t('features.mobile.description'),
    },
  ]

  return (
    <section
      ref={containerRef}
      className="w-full py-20 bg-gradient-to-b from-background to-background/80 relative overflow-hidden"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="showcase-item bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-4 rounded-full bg-primary/10">
            <div className="w-24 h-24 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ShowcaseSection 