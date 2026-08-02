import { sql } from '@/lib/db'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const slug = searchParams.get('slug')

    if (slug) {
      const posts = await sql`SELECT * FROM posts WHERE slug = ${slug} AND published = true`
      if (posts.length === 0) {
        return new Response(JSON.stringify({ error: 'Post not found' }), { status: 404 })
      }
      return new Response(JSON.stringify(posts[0]), { status: 200 })
    }

    // Kalau gaada slug, ambil semua (list mode)
    const posts = await sql`
      SELECT id, slug, title, category, excerpt, author, read_time, created_at 
      FROM posts 
      WHERE published = true 
      ORDER BY created_at DESC
    `
    return new Response(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    console.error('Error fetching public posts:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch posts' }), { status: 500 })
  }
}
