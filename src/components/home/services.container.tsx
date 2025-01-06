import { useTranslations } from 'next-intl'
import Services from './services'

function ServicesContainer() {
  const t = useTranslations('services')
  const translations = {
    heading: t('heading'),
    description: t('description'),
    button: t('button'),
    websiteDevelopment: {
      title: t('websiteDevelopment.title'),
      description: t('websiteDevelopment.description'),
    },
    websiteDesign: {
      title: t('websiteDesign.title'),
      description: t('websiteDesign.description'),
    },
    websiteSecurity: {
      title: t('websiteSecurity.title'),
      description: t('websiteSecurity.description'),
    },
    websiteMentorship: {
      title: t('websiteMentorship.title'),
      description: t('websiteMentorship.description'),
    },
  }
  return <Services t={translations} />
}

export default ServicesContainer
