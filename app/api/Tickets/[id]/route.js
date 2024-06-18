import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundTicket = await Ticket.findOne({ _id: id });
    // Set the status code directly in the NextResponse constructor
    return new NextResponse(JSON.stringify({ foundTicket }), { status: 200 });
  } catch (error) {
    // Set the status code directly in the NextResponse constructor for error handling
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch ticket." }),
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    if (!id) {
      // Set the status code directly in the NextResponse constructor for missing ID
      return new NextResponse(JSON.stringify({ message: "Missing ID" }), {
        status: 400,
      });
    }

    await Ticket.findByIdAndDelete(id);
    // Set the status code directly in the NextResponse constructor for successful deletion
    return new NextResponse(JSON.stringify({ message: "Ticket Deleted" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    // Set the status code directly in the NextResponse constructor for error handling
    return new NextResponse(JSON.stringify({ message: "Error", error }), {
      status: 500,
    });
  }
}
