import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import useLang from '@/hooks/useLang'
import { BlogPost } from '@/lib/rss'

interface BlogPostsSectionProps {
  blogPosts: BlogPost[]
}

export default function BlogPostsSection({ blogPosts }: BlogPostsSectionProps) {
  const lang = useLang()
  const t = useTranslations('AIBlogSection')

  if (blogPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          {lang === 'fa' ? 'در حال بارگذاری پست‌های وبلاگ...' : 'Loading blog posts...'}
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
      {blogPosts.map((post) => (
        <Link
          key={post.id}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-lg bg-transparent border border-border/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
        >
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            
            {/* Category Badge */}
            <div className={clsx(
              "absolute top-4 z-20",
              lang === 'fa' ? 'right-4' : 'left-4'
            )}>
              <span className="px-3 py-1 text-xs font-medium bg-primary/80 text-white rounded-full backdrop-blur-sm">
                {post.category}
              </span>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-15" />
          </div>

          {/* Content */}
          <div className="p-6 relative z-20 bg-transparent">
            <h3 className={clsx(
              "text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300",
              lang === 'fa' ? 'text-right' : 'text-left'
            )}>
              {post.title}
            </h3>
            <p className={clsx(
              "text-sm text-muted-foreground line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300",
              lang === 'fa' ? 'text-right' : 'text-left'
            )}>
              {post.description}
            </p>
            
            {/* Author and Date */}
            <div className={clsx(
              "mt-3 text-xs text-muted-foreground",
              lang === 'fa' ? 'text-right' : 'text-left'
            )}>
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{new Date(post.publishedAt).toLocaleDateString(lang === 'fa' ? 'fa-IR' : 'en-US')}</span>
            </div>
            
            {/* Read More Arrow */}
            <div className={clsx(
              "mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300",
              lang === 'fa' ? 'flex-row-reverse' : 'flex-row',
              lang === 'fa' ? 'transform translate-x-0 group-hover:-translate-x-2' : 'transform translate-x-0 group-hover:translate-x-2'
            )}>
              <span className="text-sm font-medium">{t('readMore')}</span>
              <svg
                className={clsx(
                  "w-4 h-4 transition-transform duration-300",
                  lang === 'fa' ? 'ml-0 mr-2 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
        </Link>
      ))}
    </div>
  )
} 