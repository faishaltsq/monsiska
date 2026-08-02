import { neon } from '@neondatabase/serverless'

let sqlClient = null

function getSql() {
  if (!sqlClient) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is missing')
    }
    sqlClient = neon(process.env.DATABASE_URL)
  }
  return sqlClient
}

export const sql = (...args) => getSql()(...args)
