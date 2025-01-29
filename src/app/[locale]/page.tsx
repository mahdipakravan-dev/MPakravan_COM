import ContactMeContainer from '@/components/home/contact-me.container'
import FeedbacksContainer from '@/components/home/feedbacks.container'
import FooterContainer from '@/components/home/footer.container'
import PortfolioContainer from '@/components/home/portfolio.container'
import ServicesContainer from '@/components/home/services.container'
import VideoPlayer from '@/components/home/video'
import NavbarContainer from '@/components/shared/navbar.container'
import StarryBackground from '@/components/shared/StarryLayout'
import useLang from '@/hooks/useLang'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { LogoEn, LogoFa } from '../../components/logo'

type Props = {
  params: any
}

export default function Page({ params: { locale } }: Props) {
  setRequestLocale(locale)
  const lang = useLang()
  const t = useTranslations()

  const hasBanner = false

  return (
    <>
      {hasBanner && (
        <Link
          href={'https://b2n.ir/m08485'}
          className={clsx(
            'fixed cursor-pointer top-0 left-0 w-full h-24 z-[3] flex justify-center items-center overflow-hidden bg-black',
          )}
        >
          <Image src={'/images/cover.png'} width={1024} height={200} alt="cover" />
        </Link>
      )}
      <StarryBackground rootClassName={clsx('h-[90vh] md:h-[80vh]', hasBanner && 'h-[80vh]')}>
        <header
          className={clsx(
            'absolute w-full top-4 md:top-10 z-[4] ',
            hasBanner && 'top-28 md:top-32',
          )}
        >
          <div className="container flex justify-between items-center ">
            {lang === 'en' ? <LogoEn /> : <LogoFa />}

            <NavbarContainer />
          </div>
        </header>

        <div className="h-full flex flex-col md:flex-row justify-center items-center container   relative">
          <div className="flex flex-col justify-center items-center relative  animate-fade-in">
            <h1 className="text-xl md:text-3xl font-bold mb-4 !text-center">
              {t('HomePageHero.hi')}
              <span className="animate-pulse ">{t('HomePageHero.name')}</span>{' '}
              {t('HomePageHero.finisher')}
            </h1>
            <h2 className="text-[16px] !text-center sm:text-lg font-semibold text-primary mb-6">
              {t('HomePageHero.job')}
            </h2>

            <p className="mx-auto max-w-2xl rtl:max-w-xl rtl:text-xl rtl:leading-[40px] ltr:leading-[30px] text-md text-mt-8 opacity-80 md:px-14 !text-center leading-9">
              {t('HomePageHero.description')}
            </p>
          </div>
        </div>
      </StarryBackground>
      <VideoPlayer />

      <ServicesContainer />
      <FeedbacksContainer />
      <PortfolioContainer />
      <ContactMeContainer />
      <FooterContainer />
    </>
  )
}
