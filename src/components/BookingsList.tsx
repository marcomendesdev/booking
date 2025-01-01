'use client';

import { useState } from 'react';

interface Booking {
  id: string;
  customerName: string;
  date: string;
  status?: string;
}

interface BookingsListProps {
  bookings: Booking[];
  selectedDate: Date | null;
}

async function updateBooking(id: string, updatedBooking: { status: string; date?: Date }) {
  const response = await fetch(`/api/bookings?id=${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedBooking),
  });
  return response.ok;
}

async function deleteBooking(id: string) {
  const response = await fetch(`/api/bookings?id=${id}`, {
    method: "DELETE",
  });
  return response.ok;
}

export default function BookingsList({ bookings, selectedDate }: BookingsListProps) {
  const [bookingList, setBookingList] = useState(bookings);

  const handleUpdate = async (id: string) => {
    const updated = await updateBooking(id, { status: "Updated", date: selectedDate ?? undefined });
    if (updated) {
      setBookingList(bookingList.map((booking) => booking.id === id ? { ...booking, status: "Updated", date: selectedDate ? selectedDate.toISOString() : booking.date } : booking));
    }
  };

  const handleDelete = async (id: string) => {
    const deleted = await deleteBooking(id);
    if (deleted) {
      setBookingList(bookingList.filter((booking) => booking.id !== id));
    }
  };

  return (
    <ul>
      {bookingList.map((booking) => (
        <li key={booking.id}>
          {booking.customerName} - {booking.date}
          <button onClick={() => handleUpdate(booking.id)}>Update</button>
          <button onClick={() => handleDelete(booking.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}