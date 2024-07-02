import { NextResponse } from 'next/server';
import {
  getTicketById,
  updateTicket,
  deleteTicket,
} from '@/app/api/db/queries';

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundTicket = await getTicketById(id);
    return new NextResponse(JSON.stringify({ foundTicket }), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch ticket.' }),
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return new NextResponse(JSON.stringify({ message: 'Missing ID' }), {
        status: 400,
      });
    }

    await deleteTicket(id);
    return new NextResponse(JSON.stringify({ message: 'Ticket Deleted' }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: 'Error', error }), {
      status: 500,
    });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const { formData } = await req.json();

    if (!id) {
      return new NextResponse(JSON.stringify({ message: 'Missing ID' }), {
        status: 400,
      });
    }

    const updatedTicket = await updateTicket(id, formData);
    return new NextResponse(JSON.stringify({ message: 'Ticket Updated' }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: 'Error', error }), {
      status: 500,
    });
  }
}
