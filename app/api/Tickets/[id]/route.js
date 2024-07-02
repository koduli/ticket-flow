import Ticket from '@/app/(models)/Ticket';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundTicket = await Ticket.findOne({ _id: id });
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

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      await Ticket.findByIdAndDelete(id, { session });
      await session.commitTransaction();
      return new NextResponse(JSON.stringify({ message: 'Ticket Deleted' }), {
        status: 200,
      });
    } catch (error) {
      await session.abortTransaction();
      return new NextResponse(JSON.stringify({ message: 'Error', error }), {
        status: 500,
      });
    } finally {
      session.endSession();
    }
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

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      await Ticket.findByIdAndUpdate(id, formData, { session });
      await session.commitTransaction();
      return new NextResponse(JSON.stringify({ message: 'Ticket Updated' }), {
        status: 200,
      });
    } catch (error) {
      await session.abortTransaction();
      return new NextResponse(JSON.stringify({ message: 'Error', error }), {
        status: 500,
      });
    } finally {
      session.endSession();
    }
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: 'Error', error }), {
      status: 500,
    });
  }
}
