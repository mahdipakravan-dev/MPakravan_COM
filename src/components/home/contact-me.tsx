'use client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GithubIcon, InstagramIcon, SmartphoneIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(ScrollTrigger)

const CustomInput = ({
  label,
  placeholder,
  type,
  name,
  textArea,
}: {
  label: string
  placeholder: string
  type: string
  name: string
  textArea?: boolean
}) => (
  <div>
    <label htmlFor={name} className="pl-1 opacity-80 rtl:text-xl">
      {label}
    </label>
    {textArea ? (
      <textarea
        id={name}
        name={name}
        rows={8}
        placeholder={placeholder}
        className="rtl:text-lg rtl:pb-0 resize-none mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground"
      />
    ) : (
      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="mt-1 rtl:text-lg py-2"
      />
    )}
  </div>
)

const ContactMeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const t = useTranslations('ContactMeSection')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

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
    }, containerRef)

    return () => {
      context.revert()
    }
  }, [])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setIsLoading(true)

      const inputs = {
        name: (e.currentTarget.name as any)?.value,
        emailOrPhone: (e.currentTarget.emailOrPhone as any)?.value,
        message: (e.currentTarget.message as any)?.value,
      }

      if (!inputs.name || !inputs.emailOrPhone || !inputs.message) {
        setIsLoading(false)
        return
      }

      const res = await fetch('https://api.mpakravan.com/api/collections/contact/records', {
        method: 'POST',
        body: JSON.stringify(inputs),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      await res.json()
      setIsLoading(false)
      setIsSuccess(true)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
      setIsSuccess(false)
    }
  }

  return (
    <section
      ref={containerRef}
      id="contact"
      className="mt-24 mb-12 relative overflow-hidden py-12"
      style={{ backgroundColor: '#142a20', borderRadius: 8 }}
    >
      <div className="container">
        {/* --- Lines background layer (مثل ParallaxHero: variant 'lines') --- */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none animate-grid-pan opacity-30 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(43,101,77,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(43,101,77,0.08) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      {/* هاله‌ی ملایم برای عمق */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(800px 540px at 8% 20%, rgba(43,101,77,0.12), transparent 60%), radial-gradient(680px 480px at 92% 80%, rgba(43,101,77,0.08), transparent 55%)',
          mixBlendMode: 'screen',
        }}
      />
      {/* فید پایین برای یک‌دستی با بدنه */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#142a20] via-[#142a20]/80 to-transparent pointer-events-none -z-10" />

      <h2 className="text-left text-[36px] font-bold relative z-10">
        <span className="text-primary">{t('contactMeTitleWhite')} </span>
        {t('contactMeTitleGreen')}
      </h2>

      <div className="flex flex-col lg:flex-row h-auto mt-4 relative z-10">
        {/* Contact Form Section */}
        <div className="w-full lg:w-2/5 bg-card/30 rounded-tl-md rounded-bl-md p-6 backdrop-blur-[0.5px]">
          <span className="text-md block opacity-80">{t('contactUs')}</span>
          <span className="text-2xl font-bold block mt-3">{t('developDream')}</span>

          <form className="mt-6 flex flex-col gap-6" onSubmit={onSubmit}>
            <CustomInput
              label={t('name')}
              placeholder={t('placeholderName')}
              type="text"
              name="name"
            />
            <CustomInput
              label={t('emailOrPhone')}
              placeholder={t('placeholderPhone')}
              type="text"
              name="emailOrPhone"
            />
            <CustomInput
              label={t('message')}
              placeholder={t('placeholderMessage')}
              type="text"
              name="message"
              textArea
            />
            {isSuccess && (
              <span className="text-primary font-semibold fade-in">
                Your Message has Successfully sent to me !
              </span>
            )}
            <Button variant="outlinePrimary" disabled={isLoading || isSuccess}>
              {isLoading ? t('loading') : t('button')}
            </Button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="hidden lg:flex w-full lg:w-3/5 relative flex-col justify-center items-center">
          <Image src="/images/contact-bg.png" fill alt="ALT" className="block" />
          <p className="text-md rtl:text-lg rtl:leading-10 opacity-80 w-[86%] leading-8 mt-6">
            {t('loremText')}
          </p>
          <div className="w-[86%] flex justify-between mt-12">
            {[
              { icon: SmartphoneIcon, label: t('phone'), value: '+98 9369514975' },
              { icon: InstagramIcon, label: t('instagram'), value: 'mpakravan.ir' },
              { icon: GithubIcon, label: t('github'), value: 'mahdipakravan-dev' },
            ].map(({ icon: Icon, label, value }, index) => (
              <div key={index} className="flex">
                <Icon width={40} height={40} className="mr-1 pt-2 text-white" />
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">{label}</span>
                  <span className="font-semibold text-sm opacity-80">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default ContactMeSection
