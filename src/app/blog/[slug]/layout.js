import { sql } from '@/lib/db'

// Fungsi Next.js untuk bikin meta tags SEO berdasarkan slug
export async function generateMetadata({ params }) {
  const { slug } = await params
  
  try {
    const posts = await sql`SELECT title, excerpt, category, author FROM posts WHERE slug = ${slug} AND published = true`
    const post = posts[0]

    if (!post) {
      return {
        title: 'Artikel Tidak Ditemukan | Monsiskami'
      }
    }

    return {
      title: `${post.title} | Monsiskami`,
      description: post.excerpt,
      authors: [{ name: post.author }],
      keywords: `konsultasi penelitian, ${post.category}, jasa skripsi, statistik, monsiskami`,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        authors: [post.author],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
      }
    }
  } catch (error) {
    return {
      title: 'Blog | Monsiskami'
    }
  }
}

export default function BlogDetailLayout({ children }) {
  return children
}
