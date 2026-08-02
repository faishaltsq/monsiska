import { neon } from '@neondatabase/serverless'
import { put } from '@vercel/blob'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is missing')
  process.exit(1)
}

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error('BLOB_READ_WRITE_TOKEN is missing')
  process.exit(1)
}

const sql = neon(process.env.DATABASE_URL)

// Path absolut tempat folder buku-buku lokal lo
const sourceDir = "C:\\Users\\cubeb\\OneDrive\\Documents\\Monsiskami\\buku penelitian"

async function run() {
  console.log('Mulai mass-upload ke Vercel Blob dan Database...')
  
  if (!fs.existsSync(sourceDir)) {
    console.error(`Folder tidak ditemukan: ${sourceDir}`)
    process.exit(1)
  }

  const files = fs.readdirSync(sourceDir)
  let successCount = 0

  for (const fileName of files) {
    const filePath = path.join(sourceDir, fileName)
    const stat = fs.statSync(filePath)
    
    // Lewati jika berupa folder atau bukan pdf/doc
    if (stat.isDirectory()) continue
    const ext = path.extname(fileName).toLowerCase()
    
    let fileType = ''
    if (ext === '.pdf') fileType = 'PDF'
    else if (ext === '.doc' || ext === '.docx') fileType = 'WORD'
    else continue // Lewati file selain pdf/word

    console.log(`Mengunggah [${fileType}]: ${fileName}...`)
    
    try {
      const fileBuffer = fs.readFileSync(filePath)
      
      // Upload ke Vercel Blob
      const blob = await put(`buku/${fileName}`, fileBuffer, {
        access: 'public',
        addRandomSuffix: true
      })

      const title = path.basename(fileName, ext)

      // Simpan URL ke Database
      await sql`
        INSERT INTO books (title, description, file_url, file_type, cover_url)
        VALUES (${title}, '', ${blob.url}, ${fileType}, '')
      `
      
      console.log(`✓ Selesai: ${title} -> ${blob.url}`)
      successCount++
    } catch (err) {
      console.error(`X Gagal memproses: ${fileName}`, err.message)
    }
  }

  console.log(`\nBerhasil mengunggah dan menyimpan ${successCount} buku/dokumen!`)
}

run()
