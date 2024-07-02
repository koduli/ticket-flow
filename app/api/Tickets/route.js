import { NextResponse } from 'next/server';
import { createTicket, getAllTickets } from '@/app/api/db/queries';

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    const newTicket = await createTicket(ticketData);
    return NextResponse.json(
      { message: 'Ticket created successfully.', ticket: newTicket },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating ticket:', error);
    return NextResponse.json(
      { error: 'Failed to create ticket.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const tickets = await getAllTickets();
    return NextResponse.json({ tickets });
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tickets.' },
      { status: 500 }
    );
  }
}
