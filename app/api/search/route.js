// app/api/search/route.js
import { NextResponse } from "next/server";
import Ticket from "../../(models)/Ticket";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");
  console.log("Search query:", q);

  if (!q) {
    return NextResponse.json({ tickets: [] });
  }

  try {
    const tickets = await Ticket.find(
      { $text: { $search: q } },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });
    console.log("Found tickets:", tickets);

    return NextResponse.json({ tickets });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
