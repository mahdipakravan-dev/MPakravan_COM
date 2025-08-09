'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import useLang from '@/hooks/useLang'
import { makeImageUrl } from '@/lib/utils'
import dynamic from 'next/dynamic'

const FeedbackDescription = dynamic(() => import('./feedback.desc'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

type Props = {
  feedbacks: {
    collectionId: string
    collectionName: string
    company: string
    created: string
    description: string
    enCompany: string
    enDescription: string
    enName: string
    enPosition: string
    id: string
    name: string
    position: string
    updated: string
    img?: string
  }[]
}

function FeedbacksSection(props: Props) {
  const t = useTranslations('FeedbacksSection')
  const lang = useLang()
  const wrapperRef = useRef<HTMLDivElement>(null)

  const onClickRight = () => {
    if (wrapperRef.current) wrapperRef.current.scrollLeft += 300
  }
  const onClickLeft = () => {
    if (wrapperRef.current) wrapperRef.current.scrollLeft -= 300
  }

  return (
    <section
      id="feedback"
      className="w-full mt-12 h-[750px] md:h-[460px] mb-[120px] relative overflow-hidden"
      style={{ backgroundColor: '#142a20' }} // زمینه هماهنگ با بدنه
    >
      {/* لایه‌ی خطوط (حالت Lines) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none animate-grid-pan opacity-30 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(43,101,77,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(43,101,77,0.08) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(900px 600px at 10% 30%, rgba(43,101,77,0.12), transparent 60%), radial-gradient(700px 500px at 85% 70%, rgba(43,101,77,0.08), transparent 55%)',
          mixBlendMode: 'screen',
        }}
      />

      <div className="container flex flex-col md:flex-row justify-between items-center h-full">
        <div className="w-full h-full flex flex-col items-start justify-center">
          <h6 className="text-3xl font-bold">{t('title')}</h6>
          <p className="mt-8 leading-8 ltr:pr-6 rtl:text-lg rtl:leading-10">{t('description')}</p>
          <Button variant="outline" disabled className="mt-4">
            {t('showMore')}
          </Button>
        </div>

        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute left-0 top-0 h-full overflow-x-hidden overflow-y-visible">
            <div
              className="flex justify-between items-center h-full space-x-2 md:px-6 feedback-wrapper animated-x"
              ref={wrapperRef}
            >
              {props.feedbacks.map((feedback) => (
                <div
                  key={`fe_${feedback.id}`}
                  className="min-w-[300px] relative py-4 border border-primary/20 px-4 feedback-round bg-black/10 backdrop-blur-[0.5px]"
                >
                  <div className="absolute inset-0 bg-shadow-gradient pointer-events-none feedback-round" />
                  <Image
                    src={makeImageUrl(
                      feedback.collectionId,
                      feedback.id,
                      feedback.img || 'default.png',
                    )}
                    alt="avatar"
                    width={100}
                    height={100}
                    className="absolute rounded-full -top-10 left-[30%]"
                  />
                  <FeedbackDescription
                    description={lang === 'en' ? feedback.enDescription : feedback.description}
                  />
                  <div className="flex mt-2 justify-start items-start">
                    <div className="flex flex-col justify-start">
                      <span className="text-md font-bold block text-foreground">
                        {lang === 'en' ? feedback.enName : feedback.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {lang === 'en' ? feedback.enPosition : feedback.position}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {lang === 'en' ? feedback.enCompany : feedback.company}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="absolute h-full top-0 left-2 flex flex-col justify-center"
            onClick={onClickLeft}
          >
            {/* Replace with Icon */}
          </div>
        </div>

        <div
          className="absolute h-full top-0 right-2 flex flex-col justify-center"
          onClick={onClickRight}
        >
          {/* Replace with Icon */}
        </div>
      </div>

      {/* فید پایین برای همگنی با پس‌زمینه */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#142a20] via-[#142a20]/80 to-transparent pointer-events-none" />
    </section>
  )
}

export default FeedbacksSection
