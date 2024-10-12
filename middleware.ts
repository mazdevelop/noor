import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const supportedLocales = ['en', 'fa'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore public files and API routes
  if (PUBLIC_FILE.test(pathname) || pathname.startsWith('/api')) {
    return;
  }

  // Check if the pathname already includes a locale
  const pathnameIsMissingLocale = supportedLocales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect to default locale if no locale is present
  if (pathnameIsMissingLocale) {
    const locale = 'fa'; // Set default locale
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
