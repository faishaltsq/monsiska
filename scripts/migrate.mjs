import { neon } from '@neondatabase/serverless'
import seedPosts from './seed-data.mjs'

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL environment variable is missing')
  process.exit(1)
}

const sql = neon(process.env.DATABASE_URL)

async function createTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(255) UNIQUE NOT NULL,
      title VARCHAR(500) NOT NULL,
      category VARCHAR(100) NOT NULL,
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      author VARCHAR(255) NOT NULL,
      read_time VARCHAR(20),
      published BOOLEAN DEFAULT true,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `
  console.log('Table "posts" ready.')
}

async function seed() {
  for (const post of seedPosts) {
    const existing = await sql`SELECT id FROM posts WHERE slug = ${post.slug}`
    if (existing.length > 0) {
      console.log(`Skip (exists): ${post.slug}`)
      continue
    }
    await sql`
      INSERT INTO posts (slug, title, category, excerpt, content, author, read_time, published)
      VALUES (${post.slug}, ${post.title}, ${post.category}, ${post.excerpt}, ${post.content}, ${post.author}, ${post.readTime}, true)
    `
    console.log(`Seeded: ${post.slug}`)
  }
}

async function main() {
  await createTable()
  await seed()
  console.log('Migration complete.')
}

main().catch((err) => {
  console.error('Migration failed:', err)
  process.exit(1)
})
