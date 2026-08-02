import { neon } from '@neondatabase/serverless'

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL environment variable is missing')
  process.exit(1)
}

const sql = neon(process.env.DATABASE_URL)

async function createTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS books (
      id SERIAL PRIMARY KEY,
      title VARCHAR(500) NOT NULL,
      description TEXT,
      file_url TEXT NOT NULL,
      file_type VARCHAR(10) NOT NULL,
      cover_url TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `
  console.log('Table "books" ready.')
}

async function main() {
  await createTable()
  console.log('Migration complete. Table books has been created.')
}

main().catch((err) => {
  console.error('Migration failed:', err)
  process.exit(1)
})
