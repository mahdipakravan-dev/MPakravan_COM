import { useRef, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import useLang from '@/hooks/useLang'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '../ui/button'
import { ArrowUpRight, Briefcase, Calendar, MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

type JobExperience = {
  title: string
  company: string
  date: string
  description: string
  location?: string
  link?: string
}

type Props = {
  experiences: JobExperience[]
}

const CareerSection = ({ experiences }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const t = useTranslations('CareerSection')
  const lang = useLang()

  useEffect(() => {
    const context = gsap.context(() => {
      const elements = gsap.utils.toArray('.career-item')
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

  return (
    <section ref={containerRef} className="relative py-24" id="career">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-card/20 opacity-50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
              animation: `float ${5 + Math.random() * 10}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-28"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Vertical line with gradient */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-primary to-primary-light" />

            {/* Job experiences */}
            <div className="space-y-16">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  className={`career-item relative ${index % 2 === 0 ? 'pr-[calc(50%+2rem)]' : 'pl-[calc(50%+2rem)]'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {/* Timeline dot with glow effect */}
                  <div className={`absolute ${index % 2 === 0 ? 'right-0' : 'left-0'} top-0 w-8 h-8 -translate-x-1/2 rounded-full bg-card flex items-center justify-center z-10`}>
                    <div className="w-3 h-3 rounded-full bg-primary relative">
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                    </div>
                  </div>

                  <div className={`bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{experience.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="w-4 h-4" />
                          <span>{experience.company}</span>
                        </div>
                        {experience.location && (
                          <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-full">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{experience.date}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">{experience.description}</p>
                    
                    {experience.link && (
                      <Button
                        variant="outline"
                        className="group bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/30"
                        onClick={() => window.open(experience.link, '_blank')}
                      >
                        {t('viewMore')}
                        <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  )
}

export default CareerSection 