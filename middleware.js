import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export async function middleware(request) {
  const path = request.nextUrl.pathname;

  // Only handle /admin/* routes
  if (!path.startsWith('/admin')) {
    return NextResponse.next();
  }

  const token = request.cookies.get('auth_token')?.value;
  const isLoginPage = path === '/admin/login';

  try {
    // If has valid token and trying to access login page, redirect to dashboard
    if (token && isLoginPage) {
      try {
        verify(token, process.env.JWT_SECRET);
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      } catch {
        // Invalid token, continue to login page
        return NextResponse.next();
      }
    }

    // If no token and not login page, redirect to login
    if (!token && !isLoginPage) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // For all other cases, continue
    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/admin/:path*']
}; 