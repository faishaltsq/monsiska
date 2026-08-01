import { jwtVerify } from 'jose'

export const SESSION_COOKIE_NAME = 'admin_session'

export function getSecret() {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is missing')
  }
  return new TextEncoder().encode(process.env.JWT_SECRET)
}

export async function verifySessionToken(token) {
  try {
    const { payload } = await jwtVerify(token, getSecret())
    return payload
  } catch {
    return null
  }
}
