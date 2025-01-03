import { useState } from "react";

interface Booking {
  id: string;
  customerName: string;
  date: string;
  tableId: string;
  contactInfo: string;
  status: string;
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
    <ul className="grid sm:grid-cols-3 gap-4">
      {bookingList.map((booking) => (
        <li key={booking.id} className="border p-4 mb-2 rounded">
          <div><strong>Customer Name:</strong> {booking.customerName}</div>
          <div><strong>Date:</strong> {new Date(booking.date).toLocaleString()}</div>
          <div><strong>Table ID:</strong> {booking.tableId}</div>
          <div><strong>Contact Info:</strong> {booking.contactInfo}</div>
          <div><strong>Status:</strong> {booking.status}</div>
          <button onClick={() => handleUpdate(booking.id)} className="mr-2 bg-blue-500 text-white px-2 py-1 rounded">Update</button>
          <button onClick={() => handleDelete(booking.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
        </li>
      ))}
    </ul>
  );
}