'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'

function FeedbacksSection() {
  const t = useTranslations('FeedbacksSection')
  const translations = {
    title: t('title'),
    description: t('description'),
    showMore: t('showMore'),
    feedback: {
      alt: t('feedback.alt'),
      comment: t('feedback.comment'),
      name: t('feedback.name'),
      role: t('feedback.role'),
      company: t('feedback.company'),
    },
  }
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
              className="flex justify-between items-center h-full space-x-4 md:px-12 feedback-wrapper animated-x"
              ref={wrapperRef}
            >
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="min-w-[300px] relative py-4 border border-[#6e7d8752] px-4 feedback-round"
                >
                  <div className="absolute inset-0 bg-shadow-gradient pointer-events-none feedback-round"></div>
                  <Image
                    src="/images/testimonials/alipanah.jpg"
                    alt={'ALt'}
                    width={100}
                    height={100}
                    className="absolute rounded-full -top-10 left-[30%]"
                  />
                  <span className=" text-secondary block mt-16 leading-6">
                    {translations.feedback.comment}
                  </span>
                  <div className="flex mt-2 justify-start items-start">
                    <div className="flex flex-col justify-start">
                      <span className="text-md font-bold block text-white">
                        {translations.feedback.name}
                      </span>
                      <span className="text-sm text-secondary">{translations.feedback.role}</span>
                      <span className="text-xs text-secondary">
                        {translations.feedback.company}
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
