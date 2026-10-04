// Copyright (c) 2026 Nexora Consulting Ltd. All rights reserved.
/**
 * Applies HTTPS redirects and nonce-based browser security headers to marketing routes.
 * Next.js invokes this proxy for all non-static requests; it accepts no CLI arguments.
 */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const MARKETING_HOSTS = new Set(['vitora.digital', 'www.vitora.digital']);

function externalOrigin(value: string | undefined): string | null {
  if (!value) return null;

  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

function createContentSecurityPolicy(nonce: string): string {
  const umamiOrigin = externalOrigin(process.env.NEXT_PUBLIC_UMAMI_URL);
  const scriptSources = ["'self'", `'nonce-${nonce}'`, "'strict-dynamic'"];
  const connectSources = ["'self'", 'https://www.google.com', 'https://www.googletagmanager.com'];

  if (umamiOrigin) {
    scriptSources.push(umamiOrigin);
    connectSources.push(umamiOrigin);
  }

  return [
    "default-src 'self'",
    `script-src ${scriptSources.join(' ')}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    `connect-src ${connectSources.join(' ')}`,
    "frame-src 'self' https://www.google.com",
    "object-src 'none'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    "form-action 'self' https://formspree.io",
    'upgrade-insecure-requests',
  ].join('; ');
}

export function proxy(request: NextRequest) {
  const forwardedProtocol = request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim();

  if (
    process.env.NODE_ENV === 'production' &&
    forwardedProtocol === 'http' &&
    MARKETING_HOSTS.has(request.nextUrl.hostname)
  ) {
    const secureUrl = request.nextUrl.clone();
    secureUrl.protocol = 'https:';
    return NextResponse.redirect(secureUrl, 308);
  }

  const nonce = crypto.randomUUID();
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set('Content-Security-Policy', createContentSecurityPolicy(nonce));
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
