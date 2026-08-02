import { sql } from '@/lib/db'

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
