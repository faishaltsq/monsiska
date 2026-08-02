import bcrypt from 'bcryptjs'

const password = process.argv[2]

if (!password) {
  console.error('Usage: node scripts/generate-hash.mjs <your-password>')
  process.exit(1)
}

const salt = bcrypt.genSaltSync(10)
const hash = bcrypt.hashSync(password, salt)

console.log('\nPassword:', password)
console.log('Hash    :', hash)
console.log('\nCopy hash di atas ke ADMIN_PASSWORD_HASH di .env / Vercel')
