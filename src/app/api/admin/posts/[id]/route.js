import { sql } from '@/lib/db'

export async function GET(req, { params }) {
  try {
    // Await params di Next.js 15
    const { id } = await params
    const posts = await sql`SELECT * FROM posts WHERE id = ${id}`
    
    if (posts.length === 0) {
      return new Response(JSON.stringify({ error: 'Post not found' }), { status: 404 })
    }
    
    return new Response(JSON.stringify(posts[0]), { status: 200 })
  } catch (error) {
    console.error('Error fetching post:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch post' }), { status: 500 })
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = await params
    const body = await req.json()
    const { slug, title, category, excerpt, content, author, read_time, published } = body

    if (!slug || !title || !content) {
      return new Response(JSON.stringify({ error: 'Slug, title, dan content wajib diisi' }), { status: 400 })
    }

    // Cek slug unique untuk post lain
    const existing = await sql`SELECT id FROM posts WHERE slug = ${slug} AND id != ${id}`
    if (existing.length > 0) {
      return new Response(JSON.stringify({ error: 'Slug sudah digunakan oleh post lain' }), { status: 400 })
    }

    const result = await sql`
      UPDATE posts 
      SET slug = ${slug}, 
          title = ${title}, 
          category = ${category}, 
          excerpt = ${excerpt}, 
          content = ${content}, 
          author = ${author}, 
          read_time = ${read_time}, 
          published = ${published},
          updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `

    if (result.length === 0) {
      return new Response(JSON.stringify({ error: 'Post not found' }), { status: 404 })
    }

    return new Response(JSON.stringify(result[0]), { status: 200 })
  } catch (error) {
    console.error('Error updating post:', error)
    return new Response(JSON.stringify({ error: 'Failed to update post' }), { status: 500 })
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params
    const result = await sql`DELETE FROM posts WHERE id = ${id} RETURNING id`
    
    if (result.length === 0) {
      return new Response(JSON.stringify({ error: 'Post not found' }), { status: 404 })
    }
    
    return new Response(JSON.stringify({ message: 'Post deleted' }), { status: 200 })
  } catch (error) {
    console.error('Error deleting post:', error)
    return new Response(JSON.stringify({ error: 'Failed to delete post' }), { status: 500 })
  }
}
