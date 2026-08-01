import { put } from '@vercel/blob'

export async function POST(req) {
  try {
    const formData = await req.formData()
    const file = formData.get('file')

    if (!file) {
      return new Response(JSON.stringify({ error: 'Tidak ada file yang diunggah' }), { status: 400 })
    }

    // Jika store Blob disetting private oleh Vercel, ini tidak akan masalah
    // asalkan kita hapus { access: 'public' } dan biarkan default.
    // Namun untuk gambar blog, pembaca butuh akses langsung, sehingga file ini 
    // akan bergantung pada security token dari Blob saat dirender.
    const blob = await put(file.name, file, { 
      access: 'public' 
    }).catch(async (e) => {
      // Jika Vercel nolak karena store-nya private, kita upload secara private (default)
      return await put(file.name, file, {
        multipart: true
      })
    })

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
