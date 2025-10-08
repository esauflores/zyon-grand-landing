import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if accessing admin dashboard without being on login page
  if (pathname.startsWith('/admin/dashboard')) {
    const sessionCookie = request.cookies.get('admin-session')
    
    if (!sessionCookie || sessionCookie.value !== 'authenticated') {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  // Redirect from admin root to login
  if (pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
}
