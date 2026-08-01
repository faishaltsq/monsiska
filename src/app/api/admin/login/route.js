import { verifyCredentials } from '@/lib/auth'
import { SESSION_COOKIE_NAME, getSecret } from '@/lib/session'
import { SignJWT } from 'jose'

const SESSION_DURATION = '7d'

export async function createSessionToken(username) {
  return new SignJWT({ username })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(SESSION_DURATION)
    .sign(getSecret())
}

export async function POST(req) {
  try {
    const body = await req.json()
    const { username, password } = body

    if (!username || !password) {
      return new Response(
        JSON.stringify({ error: 'Username dan password wajib diisi' }),
        { status: 400 }
      )
    }

    const isValid = await verifyCredentials(username, password)
    if (!isValid) {
      return new Response(
        JSON.stringify({ error: 'Username atau password salah' }),
        { status: 401 }
      )
    }

    const token = await createSessionToken(username)
    const cookieValue = `${SESSION_COOKIE_NAME}=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${7 * 24 * 60 * 60}`

    return new Response(JSON.stringify({ message: 'Login berhasil' }), {
      status: 200,
      headers: { 'Set-Cookie': cookieValue }
    })
  } catch (error) {
    console.error('Login error:', error)
    return new Response(JSON.stringify({ error: 'Gagal login' }), { status: 500 })
  }
}
