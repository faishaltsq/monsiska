import { sql } from '@/lib/db'

export async function GET() {
  try {
    const posts = await sql`SELECT * FROM posts ORDER BY created_at DESC`
    return new Response(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    console.error('Error fetching admin posts:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch posts' }), { status: 500 })
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    const { slug, title, category, excerpt, content, author, read_time, published } = body

    if (!slug || !title || !content) {
      return new Response(JSON.stringify({ error: 'Slug, title, dan content wajib diisi' }), { status: 400 })
    }

    // Cek slug unique
    const existing = await sql`SELECT id FROM posts WHERE slug = ${slug}`
    if (existing.length > 0) {
      return new Response(JSON.stringify({ error: 'Slug sudah digunakan' }), { status: 400 })
    }

    const result = await sql`
      INSERT INTO posts (slug, title, category, excerpt, content, author, read_time, published)
      VALUES (${slug}, ${title}, ${category || 'Uncategorized'}, ${excerpt || ''}, ${content}, ${author || 'Admin'}, ${read_time || '5 min'}, ${published ?? true})
      RETURNING *
    `

    return new Response(JSON.stringify(result[0]), { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return new Response(JSON.stringify({ error: 'Failed to create post' }), { status: 500 })
  }
}
