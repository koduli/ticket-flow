import { NextResponse } from 'next/server';
import { searchTickets } from '@/app/api/database/queries';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q');

  if (!q) {
    return NextResponse.json({ tickets: [] });
  }

  try {
    const tickets = await searchTickets(q);
    return NextResponse.json({ tickets });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
