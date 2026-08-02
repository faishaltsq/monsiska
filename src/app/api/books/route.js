import { sql } from '@/lib/db'

export async function GET() {
  try {
    const books = await sql`
      SELECT id, title, description, file_url, file_type, cover_url, created_at 
      FROM books 
      ORDER BY created_at ASC
    `
    return new Response(JSON.stringify(books), { status: 200 })
  } catch (error) {
    console.error('Error fetching public books:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch books' }), { status: 500 })
  }
}
