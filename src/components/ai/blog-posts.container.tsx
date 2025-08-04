import { fetchBlogPosts } from '@/lib/rss'
import BlogPostsSection from './blog-posts'

async function BlogPostsContainer() {
  const blogPosts = await fetchBlogPosts()

  return <BlogPostsSection blogPosts={blogPosts} />
}

export default BlogPostsContainer 