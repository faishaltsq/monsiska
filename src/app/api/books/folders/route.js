import { sql } from '@/lib/db'

export async function GET() {
  try {
    const folders = await sql`
      SELECT 
        folder_slug, 
        folder_name, 
        COUNT(id) as item_count,
        MAX(cover_url) as folder_cover
      FROM books 
      WHERE folder_slug IS NOT NULL
      GROUP BY folder_slug, folder_name
      ORDER BY folder_name ASC
    `
    return new Response(JSON.stringify(folders), { status: 200 })
  } catch (error) {
    console.error('Error fetching folders:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch folders' }), { status: 500 })
  }
}
