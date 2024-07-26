import { NextResponse } from 'next/server';

export function middleware(request) {
  // return Response.json({
  //   message: 'hello there',
  // });
  //! redirect - for restricted requests
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  // ! setup to restrict matching routes
  matcher: ['/about/:path*'],
};
