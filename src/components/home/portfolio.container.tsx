import { useTranslations } from 'next-intl'
import PortfolioSection from './portfolio'

function PortfolioContainer() {
  const t = useTranslations('PortfolioSection')
  const translations = {
    greenTitle: t('greenTitle'),
    whiteTitle: t('whiteTitle'),
    description: t('description'),
  }
  return <PortfolioSection t={translations} />
}

export default PortfolioContainer
