import { createHmac, randomUUID } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

function buildNonceHeaders(secret?: string): Record<string, string> {
  if (!secret) return {};

  const nonce = randomUUID();
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const signature = createHmac('sha256', secret)
    .update(`${nonce}:${timestamp}`)
    .digest('hex');

  return {
    'X-Pricing-Nonce': nonce,
    'X-Pricing-Timestamp': timestamp,
    'X-Pricing-Signature': signature,
  };
}

export async function POST(req: NextRequest) {
  const backendBase = process.env.PRICING_API_BASE;
  if (!backendBase) {
    return NextResponse.json({ detail: 'PRICING_API_BASE is not configured' }, { status: 500 });
  }

  const backendUrl = `${backendBase.replace(/\/$/, '')}/api/pricing/quote/`;
  const payload = await req.json();

  const res = await fetch(backendUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...buildNonceHeaders(process.env.PRICING_NONCE_SECRET),
    },
    body: JSON.stringify(payload),
    cache: 'no-store',
  });

  let data: unknown = null;
  try {
    data = await res.json();
  } catch {
    data = { detail: 'Pricing service returned a non-JSON response.' };
  }

  return NextResponse.json(data, { status: res.status });
}
