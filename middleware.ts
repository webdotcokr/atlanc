import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get('admin_session')?.value;

  // Protect admin dashboard routes - require session cookie
  if (pathname.startsWith('/admin/dashboard')) {
    if (!sessionToken) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  // If user has session cookie and tries to access /admin login page, redirect to dashboard
  if (pathname === '/admin' && sessionToken) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
