import { neon } from '@neondatabase/serverless'

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL environment variable is missing')
  process.exit(1)
}

const sql = neon(process.env.DATABASE_URL)

async function alterTable() {
  console.log('Menambahkan kolom folder_slug dan folder_name ke tabel books...')
  
  try {
    // Tambah kolom jika belum ada
    await sql`ALTER TABLE books ADD COLUMN IF NOT EXISTS folder_slug VARCHAR(255)`
    await sql`ALTER TABLE books ADD COLUMN IF NOT EXISTS folder_name VARCHAR(255)`
    
    // Set default value untuk data yang sudah ada (Buku Penelitian)
    await sql`UPDATE books SET folder_slug = 'buku-penelitian', folder_name = 'Buku Penelitian' WHERE folder_slug IS NULL`
    
    console.log('Update tabel berhasil. Data lama telah dimasukkan ke folder "Buku Penelitian".')
  } catch (err) {
    console.error('Gagal alter table:', err)
  }
}

alterTable().then(() => process.exit(0))
