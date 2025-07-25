import useLang from '@/hooks/useLang'
import StarryBackground from '../shared/StarryLayout'
import { LogoEn, LogoFa } from '../logo'
import NavbarContainer from '../shared/navbar.container'
import Image from 'next/image'
import { Icon } from '../icon'
import { useTranslations } from 'next-intl'
import LoadingAnimation from '../shared/loading-animation'

function Header() {
  const lang = useLang()
  const t = useTranslations('HomePageHero')
  return (
    <>
      <LoadingAnimation />

      <StarryBackground rootClassName="h-[80vh]">
        <header className="absolute w-full top-4 md:top-12 z-[4] ">
          <div className="container flex justify-between items-center ">
            {lang === 'en' ? <LogoEn /> : <LogoFa />}

            <NavbarContainer />
          </div>
        </header>

        <div className="h-full flex flex-col md:flex-row justify-center items-center container   relative">
          <div className="flex flex-col justify-center items-center relative  animate-fade-in">
            <h1 className="text-xl md:text-3xl font-bold mb-4 !text-center">
              {t('hi')}
              <span className="animate-pulse mx-3">{t('name')}</span>
            </h1>
            <h2 className="text-[18px] !text-center sm:text-lg font-semibold text-primary mb-6">
              {t('job')}
            </h2>

            <p className="mx-auto max-w-3xl rtl:max-w-xl rtl:text-xl rtl:leading-[40px] ltr:leading-[30px] text-md text-mt-8 opacity-80 md:px-14 !text-center leading-9">
              {t('description')}
            </p>
          </div>
        </div>
      </StarryBackground>

      <div className="w-full flex justify-center items-center -translate-y-10 container relative z-[2]">
        <video
          className="rounded shadow-lg z-[0]"
          src={t('video')}
          poster="/images/movie-preview.png"
          muted
          autoPlay
          width={'100%'}
          height={300}
        />
        <div className="absolute left-0 top-0 z-[3] w-full h-full flex justify-center items-center">
          <div className="rounded-full flex items-center justify-center bg-[rgba(0,0,0,0.6)] w-20 h-20 cursor-pointer">
            <Icon name="play" />
          </div>
        </div>
        <Image
          src="/images/shallows/shallow-green.png"
          alt="logo"
          width={1500}
          height={1000}
          className="absolute animate-shallow z-[-1]"
        />
      </div>
    </>
  )
}

export default Header
