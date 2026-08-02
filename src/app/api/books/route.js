import { sql } from '@/lib/db'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const folderSlug = searchParams.get('folder')

    let query;
    if (folderSlug) {
      query = sql`
        SELECT id, title, description, file_url, file_type, cover_url, created_at, folder_name 
        FROM books 
        WHERE folder_slug = ${folderSlug}
        ORDER BY created_at ASC
      `
    } else {
      query = sql`
        SELECT id, title, description, file_url, file_type, cover_url, created_at, folder_name 
        FROM books 
        ORDER BY created_at ASC
      `
    }

    const books = await query;
    return new Response(JSON.stringify(books), { status: 200 })
  } catch (error) {
    console.error('Error fetching public books:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch books' }), { status: 500 })
  }
}
