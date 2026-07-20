import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ quoteId: string }> }
) {
  const backendBase = process.env.PRICING_API_BASE;
  if (!backendBase) {
    return NextResponse.json({ detail: 'PRICING_API_BASE is not configured' }, { status: 500 });
  }

  const { quoteId } = await context.params;
  const backendUrl = `${backendBase.replace(/\/$/, '')}/api/pricing/quotes/${encodeURIComponent(quoteId)}/`;

  const res = await fetch(backendUrl, {
    method: 'GET',
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
