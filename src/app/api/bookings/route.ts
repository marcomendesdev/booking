import { NextResponse } from "next/server";

export async function POST(request: { json: () => unknown; }) {
  const body = await request.json();

  const response = await fetch("https://67631d5e17ec5852cae823fa.mockapi.io/api/tables/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to create booking." }, { status: 500 });
  }

  return NextResponse.json({ message: "Table booked successfully!" });
}
