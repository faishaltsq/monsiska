import { SESSION_COOKIE_NAME } from '@/lib/session'

export async function POST() {
  const cookieValue = `${SESSION_COOKIE_NAME}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`
  return new Response(JSON.stringify({ message: 'Logout berhasil' }), {
    status: 200,
    headers: { 'Set-Cookie': cookieValue }
  })
}
