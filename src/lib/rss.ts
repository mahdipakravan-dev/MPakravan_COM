import Parser from 'rss-parser'

const parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'media'],
      ['content:encoded', 'content'],
      ['dc:creator', 'author'],
      ['category', 'categories']
    ]
  }
})

export interface BlogPost {
  id: string
  title: string
  description: string
  link: string
  image: string
  category: string
  publishedAt: string
  author: string
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const feed = await parser.parseURL('https://virgool.io/feed/@mahdipakravan.dev')
    
    return feed.items.map((item, index) => {
      // Extract image from content or use default
      let image = '/images/ai-blog-default.jpg'
      if (item.media && item.media.$ && item.media.$.url) {
        image = item.media.$.url
      } else if (item.content) {
        // Try to extract image from content
        const imgMatch = item.content.match(/<img[^>]+src="([^"]+)"/)
        if (imgMatch) {
          image = imgMatch[1]
        }
      }

      // Extract description
      let description = item.contentSnippet || item.content || ''
      // Remove HTML tags and limit length
      description = description.replace(/<[^>]*>/g, '').substring(0, 150) + '...'

      // Extract category
      let category = 'یادگیری ماشین' // Default category
      if (item.categories && item.categories.length > 0) {
        category = Array.isArray(item.categories) ? item.categories[0] : item.categories
      }

      return {
        id: item.guid || item.link || `post-${index}`,
        title: item.title || 'بدون عنوان',
        description,
        link: item.link || '#',
        image,
        category,
        publishedAt: item.pubDate || new Date().toISOString(),
        author: item.creator || item.author || 'مهدی پاکروان'
      }
    }).slice(0, 8) // Limit to 8 posts
  } catch (error) {
    console.error('Error fetching RSS feed:', error)
    return []
  }
} 