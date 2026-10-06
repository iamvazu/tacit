import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Protect /admin and /api/admin
  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    const adminUser = process.env.ADMIN_USER;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // If unset in local development, allow through
    if (!adminUser || !adminPassword) {
      if (process.env.NODE_ENV !== 'production') {
        return NextResponse.next();
      }
    }

    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Basic ')) {
      return new NextResponse('Authentication Required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Tacit Admin"',
          'Content-Type': 'text/plain',
        },
      });
    }

    try {
      const base64 = authHeader.split(' ')[1];
      const decoded = Buffer.from(base64, 'base64').toString('ascii');
      const [user, ...passParts] = decoded.split(':');
      const pass = passParts.join(':');

      if (user !== adminUser || pass !== adminPassword) {
        return new NextResponse('Invalid Credentials', {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Tacit Admin"',
            'Content-Type': 'text/plain',
          },
        });
      }
    } catch {
      return new NextResponse('Authentication Error', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Tacit Admin"',
          'Content-Type': 'text/plain',
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
