import { sql } from '@/lib/db'

export async function GET() {
  try {
    const books = await sql`SELECT * FROM books ORDER BY created_at DESC`
    return new Response(JSON.stringify(books), { status: 200 })
  } catch (error) {
    console.error('Error fetching admin books:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch books' }), { status: 500 })
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    const { title, description, file_url, file_type, cover_url, folder_name } = body

    if (!title || !file_url || !file_type || !folder_name) {
      return new Response(JSON.stringify({ error: 'Judul, File, dan Nama Folder wajib diisi' }), { status: 400 })
    }

    const folder_slug = folder_name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

    const result = await sql`
      INSERT INTO books (title, description, file_url, file_type, cover_url, folder_name, folder_slug)
      VALUES (${title}, ${description || ''}, ${file_url}, ${file_type}, ${cover_url || ''}, ${folder_name}, ${folder_slug})
      RETURNING *
    `
    return new Response(JSON.stringify(result[0]), { status: 201 })
  } catch (error) {
    console.error('Error creating book:', error)
    return new Response(JSON.stringify({ error: 'Failed to create book' }), { status: 500 })
  }
}
