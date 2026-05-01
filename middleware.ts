import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Protect /admin routes
  if (path.startsWith('/admin')) {
    const authHeader = request.headers.get('authorization');

    if (!authHeader) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Access"',
        },
      });
    }

    const authValue = authHeader.split(' ')[1];
    const decodedAuth = atob(authValue).split(':');
    const user = decodedAuth[0];
    const pass = decodedAuth[1];

    if (
      user === process.env.ADMIN_USERNAME &&
      pass === process.env.ADMIN_PASSWORD
    ) {
      return NextResponse.next();
    }

    return new NextResponse('Invalid credentials', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Admin Access"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
