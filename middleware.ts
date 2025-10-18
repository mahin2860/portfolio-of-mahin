import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Add security headers to prevent image hotlinking
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  // Check if the request is for an image
  const url = request.nextUrl.clone()
  if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
    // Check referer to prevent hotlinking
    const referer = request.headers.get('referer')
    const host = request.headers.get('host')
    
    if (referer && host && !referer.includes(host)) {
      // Block hotlinking by returning a 403
      return new NextResponse('Forbidden', { status: 403 })
    }
  }
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}