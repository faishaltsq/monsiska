import { put } from '@vercel/blob'

export async function POST(req) {
  try {
    const formData = await req.formData()
    const file = formData.get('file')

    if (!file) {
      return new Response(JSON.stringify({ error: 'Tidak ada file yang diunggah' }), { status: 400 })
    }

    // Gunakan Vercel Blob untuk menyimpan file. public access.
    const blob = await put(file.name, file, { access: 'public' })

    return new Response(JSON.stringify({ 
      url: blob.url,
      name: file.name,
      type: file.type
    }), { status: 200 })
    
  } catch (error) {
    console.error('Error uploading file:', error)
    return new Response(JSON.stringify({ error: 'Gagal mengunggah file' }), { status: 500 })
  }
}
