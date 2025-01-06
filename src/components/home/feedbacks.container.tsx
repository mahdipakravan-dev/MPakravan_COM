import { useTranslations } from 'next-intl'
import FeedbacksSection from './feedbacks'

async function FeedbacksContainer() {
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
  return <FeedbacksSection t={translations} />
}

export default FeedbacksContainer
