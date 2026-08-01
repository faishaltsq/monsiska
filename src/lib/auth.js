import bcrypt from 'bcryptjs'

export async function verifyCredentials(username, password) {
  if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD_HASH) {
    throw new Error('ADMIN_USERNAME or ADMIN_PASSWORD_HASH environment variable is missing')
  }
  if (username !== process.env.ADMIN_USERNAME) return false
  return bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH)
}
