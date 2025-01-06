import { useTranslations } from 'next-intl'
import ContactMeSection from './contact-me'

function ContactMeContainer() {
  const t = useTranslations('ContactMeSection')
  const translations = {
    contactMeTitleWhite: t('contactMeTitleWhite'),
    contactMeTitleGreen: t('contactMeTitleGreen'),
    contactUs: t('contactUs'),
    developDream: t('developDream'),
    name: t('name'),
    phoneNumber: t('phoneNumber'),
    message: t('message'),
    placeholderName: t('placeholderName'),
    placeholderPhone: t('placeholderPhone'),
    placeholderMessage: t('placeholderMessage'),
    button: t('button'),
    loremText: t('loremText'),
    phone: t('phone'),
    instagram: t('instagram'),
    github: t('github'),
  }

  return <ContactMeSection t={translations} />
}

export default ContactMeContainer
