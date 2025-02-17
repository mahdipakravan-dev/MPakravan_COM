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
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft += 300
    }
  }

  const onClickLeft = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft -= 300
    }
  }

  return (
    <section
      className="w-full mt-12 bg-[rgba(110,125,135,0.1)] h-[750px] md:h-[460px] mb-[120px] relative"
      id="feedback"
    >
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
              {props.feedbacks.map((feedback, index) => (
                <div
                  key={`fe_${feedback.id}`}
                  className="min-w-[300px] relative py-4 border border-[#6e7d8752] px-4 feedback-round"
                >
                  <div className="absolute inset-0 bg-shadow-gradient pointer-events-none feedback-round"></div>
                  <Image
                    src={makeImageUrl(
                      feedback.collectionId,
                      feedback.id,
                      feedback.img || 'default.png',
                    )}
                    alt={'ALt'}
                    width={100}
                    height={100}
                    className="absolute rounded-full -top-10 left-[30%]"
                  />
                  <FeedbackDescription
                    description={lang === 'en' ? feedback.enDescription : feedback.description}
                  />
                  <div className="flex mt-2 justify-start items-start">
                    <div className="flex flex-col justify-start">
                      <span className="text-md font-bold block text-white">
                        {lang === 'en' ? feedback.enName : feedback.name}
                      </span>
                      <span className="text-sm text-secondary">
                        {lang === 'en' ? feedback.enPosition : feedback.position}
                      </span>
                      <span className="text-xs text-secondary">
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
    </section>
  )
}

export default FeedbacksSection
