import { NextResponse } from 'next/server';
import {
  getTicketById,
  updateTicket,
  deleteTicket,
} from '@/app/api/database/queries';

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundTicket = await getTicketById(id);

    if (!foundTicket) {
      return new NextResponse(JSON.stringify({ error: 'Ticket not found.' }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify({ foundTicket }), { status: 200 });
  } catch (error) {
    console.error('Error fetching ticket:', error);
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

    const deletedTicket = await deleteTicket(id);

    if (!deletedTicket) {
      return new NextResponse(
        JSON.stringify({ message: 'Ticket not found.' }),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify({ message: 'Ticket Deleted' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error deleting ticket:', error);
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

    if (!updatedTicket) {
      return new NextResponse(
        JSON.stringify({ message: 'Ticket not found.' }),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify({ message: 'Ticket Updated' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error updating ticket:', error);
    return new NextResponse(JSON.stringify({ message: 'Error', error }), {
      status: 500,
    });
  }
}
