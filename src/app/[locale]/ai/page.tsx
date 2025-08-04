import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import clsx from 'clsx'
import NavbarContainer from '@/components/shared/navbar.container'
import StarryBackground from '@/components/shared/StarryLayout'
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
      <StarryBackground rootClassName="min-h-screen">
        <header className="absolute w-full top-4 md:top-10 z-[4]">
            
          <div className="container flex justify-between items-center">
            {lang === 'en' ? <LogoEn /> : <LogoFa />}
            <NavbarContainer />
          </div>
        </header>

        <div className="container pt-32 pb-16">
          {/* Page Header */}
          <div className={clsx(
            "text-center mb-16 animate-fade-in",
            lang === 'fa' ? 'text-right' : 'text-left'
          )}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              {t('title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>

          {/* Blog Grid */}
          <BlogPostsContainer />

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className={clsx(
              "inline-flex items-center gap-4 p-6 bg-transparent border border-border/30 rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg",
              lang === 'fa' ? 'flex-row-reverse' : 'flex-row'
            )}>
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className={clsx(
                "text-left",
                lang === 'fa' ? 'text-right' : 'text-left'
              )}>
                <h3 className="font-semibold text-foreground">{t('stayUpdated')}</h3>
                <p className="text-sm text-muted-foreground">{t('stayUpdatedDescription')}</p>
              </div>
            </div>
          </div>
        </div>
      </StarryBackground>
    </>
  )
} 