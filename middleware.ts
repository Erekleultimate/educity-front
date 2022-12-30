import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = (req: NextRequest) => {
  const token = req.cookies.get('token');

  if (req.nextUrl.pathname === '/dashboard') {
    return NextResponse.redirect(new URL('/dashboard/user', req.url));
  }

  if (req.nextUrl.pathname === '/dashboard/user' && !token) {
    return NextResponse.redirect(new URL('/', req.url));
  }
};
