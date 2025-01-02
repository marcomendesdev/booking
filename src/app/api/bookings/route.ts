import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
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

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const id = new URL(request.url).searchParams.get("id");

  const response = await fetch(`https://67631d5e17ec5852cae823fa.mockapi.io/api/tables/bookings/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to update booking." }, { status: 500 });
  }

  return NextResponse.json({ message: "Booking updated successfully!" });
}

export async function DELETE(request: NextRequest) {
  const id = new URL(request.url).searchParams.get("id");

  const response = await fetch(`https://67631d5e17ec5852cae823fa.mockapi.io/api/tables/bookings/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to delete booking." }, { status: 500 });
  }

  return NextResponse.json({ message: "Booking deleted successfully!" });
}