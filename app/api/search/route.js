import { NextResponse } from 'next/server';
import { searchTickets } from '@/app/api/database/queries';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get('q');

    if (!q) {
      return NextResponse.json({ tickets: [] });
    }

    const tickets = await searchTickets(q);
    return NextResponse.json({ tickets });
  } catch (error) {
    console.error('Error occurred while searching for tickets:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
