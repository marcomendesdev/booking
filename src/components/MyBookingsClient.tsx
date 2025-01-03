'use client';

import { useState } from 'react';
import BookingsList from "@/components/BookingsList";
import { DateTimePickerForm } from "@/components/Date-Picker";

interface MyBookingsClientProps {
  bookings: { id: string; customerName: string; date: string; tableId: string; contactInfo: string; status: string }[];
}

export default function MyBookingsClient({ bookings }: MyBookingsClientProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
      <div className="mb-4">
        <DateTimePickerForm onDateChange={handleDateChange} label="Pick a date to update your bookings:" buttonText="Confirm" />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Existing Bookings</h2>
        <BookingsList bookings={bookings} selectedDate={selectedDate} />
      </div>
    </div>
  );
}