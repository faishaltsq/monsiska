import { NextResponse } from 'next/server'
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/session'

export async function middleware(req) {
  const isAdminPage = req.nextUrl.pathname.startsWith('/admin')
  const isLoginRoute = req.nextUrl.pathname === '/admin/login' || req.nextUrl.pathname === '/api/admin/login'
  
  if (isAdminPage && !isLoginRoute) {
    const token = req.cookies.get(SESSION_COOKIE_NAME)?.value
    
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }

    const payload = await verifySessionToken(token)
    if (!payload) {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }
  }

  // Lindungi API admin juga (selain login)
  const isAdminApi = req.nextUrl.pathname.startsWith('/api/admin')
  if (isAdminApi && !isLoginRoute) {
    const token = req.cookies.get(SESSION_COOKIE_NAME)?.value
    
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const payload = await verifySessionToken(token)
    if (!payload) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*']
}
