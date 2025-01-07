import { useTranslations } from 'next-intl'
import { Navbar } from './navbar'
import MobileNav from './mobile-nav'

function NavbarContainer() {
  const t = useTranslations('Sections')

  const translations = {
    home: t('home'),
    services: t('services'),
    feedbacks: t('feedbacks'),
    portfolio: t('portfolio'),
    contact: t('contact'),
    blog: t('blog'),
    language: t('language'),
  }
  return (
    <>
      <Navbar translations={translations} />
      <MobileNav translations={translations} />
    </>
  )
}

export default NavbarContainer
