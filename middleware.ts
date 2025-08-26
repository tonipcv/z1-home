import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Sets a lightweight 'country' cookie so client code can switch language early.
export function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Prefer Vercel geolocation header; fallback to empty
  const country = req.headers.get('x-vercel-ip-country') || ''

  const existing = req.cookies.get('country')?.value
  if (!existing && country) {
    // Set cookie for 7 days
    res.cookies.set('country', country, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'lax',
    })
  }

  return res
}

export const config = {
  matcher: [
    // Run on all pages except static assets and API routes
    '/((?!_next/static|_next/image|favicon.ico|icon.png|favicon.png|site.webmanifest|robots.txt|sitemap.xml|api).*)',
  ],
}
