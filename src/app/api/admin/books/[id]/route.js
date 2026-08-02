import { sql } from '@/lib/db'

export async function GET(req, { params }) {
  try {
    const { id } = await params
    const result = await sql`SELECT * FROM books WHERE id = ${id}`
    
    if (result.length === 0) {
      return new Response(JSON.stringify({ error: 'Book not found' }), { status: 404 })
    }
    
    return new Response(JSON.stringify(result[0]), { status: 200 })
  } catch (error) {
    console.error('Error fetching book:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch book' }), { status: 500 })
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = await params
    const body = await req.json()
    const { title, description, cover_url, folder_name } = body

    if (!title || !folder_name) {
      return new Response(JSON.stringify({ error: 'Judul dan Nama Folder wajib diisi' }), { status: 400 })
    }

    const folder_slug = folder_name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

    const result = await sql`
      UPDATE books 
      SET 
        title = ${title}, 
        description = ${description || ''}, 
        cover_url = ${cover_url || ''}, 
        folder_name = ${folder_name}, 
        folder_slug = ${folder_slug}
      WHERE id = ${id}
      RETURNING *
    `

    if (result.length === 0) {
      return new Response(JSON.stringify({ error: 'Book not found' }), { status: 404 })
    }

    return new Response(JSON.stringify(result[0]), { status: 200 })
  } catch (error) {
    console.error('Error updating book:', error)
    return new Response(JSON.stringify({ error: 'Failed to update book' }), { status: 500 })
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params
    const result = await sql`DELETE FROM books WHERE id = ${id} RETURNING id`
    
    if (result.length === 0) {
      return new Response(JSON.stringify({ error: 'Book not found' }), { status: 404 })
    }
    
    return new Response(JSON.stringify({ message: 'Book deleted' }), { status: 200 })
  } catch (error) {
    console.error('Error deleting book:', error)
    return new Response(JSON.stringify({ error: 'Failed to delete book' }), { status: 500 })
  }
}
