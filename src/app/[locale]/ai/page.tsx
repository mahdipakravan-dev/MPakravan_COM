import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import clsx from 'clsx'
import NavbarContainer from '@/components/shared/navbar.container'
import ParallaxHero from '@/components/shared/ParallaxHero'
import { LogoEn, LogoFa } from '@/components/logo'
import useLang from '@/hooks/useLang'
import BlogPostsContainer from '@/components/ai/blog-posts.container'

type Props = {
  params: any
}

export default function AIPage({ params: { locale } }: Props) {
  setRequestLocale(locale)
  const lang = useLang()
  const t = useTranslations('AIBlogSection')

  return (
    <>
      <ParallaxHero rootClassName="min-h-screen" variant="default">
        <header className="fixed w-full top-4 md:top-10 z-[4]">
          <div className="container flex justify-between items-center">
            {lang === 'en' ? <LogoEn /> : <LogoFa />}
            <NavbarContainer />
          </div>
        </header>

        <div className="container pt-32 pb-16 min-h-screen">
          {/* Page Header */}
          <div className={clsx(
            "text-center mb-16 animate-fade-in",
            lang === 'fa' ? 'text-right' : 'text-left'
          )}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {t('title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>

          {/* Blog Posts */}
          <BlogPostsContainer />

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className={clsx(
              "bg-card/50 backdrop-blur-sm border rounded-lg p-8 max-w-2xl mx-auto",
              lang === 'fa' ? 'text-right' : 'text-left'
            )}>
              <div className={clsx(
                "space-y-2",
                lang === 'fa' ? 'text-right' : 'text-left'
              )}>
                <h3 className="font-semibold text-foreground">{t('stayUpdated')}</h3>
                <p className="text-sm text-muted-foreground">{t('stayUpdatedDescription')}</p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxHero>
    </>
  )
} 