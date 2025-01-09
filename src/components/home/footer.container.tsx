import { useTranslations } from 'next-intl'
import FooterSection from './footer'

function FooterContainer() {
  const t = useTranslations('FooterSection')
  const translations = {
    col2Title: t('col2Title'),
    col3Title: t('col3Title'),
    copyRight: t('copyRight'),
    description: t('description'),
    version : t("version")
  }
  return <FooterSection t={translations} />
}

export default FooterContainer
