'use client';

import { useState } from 'react';
import BookingsList from "@/components/BookingsList";
import { DateTimePickerForm } from "@/components/Date-Picker";

interface MyBookingsClientProps {
  bookings: { id: string; customerName: string; date: string; [key: string]: unknown }[]; // Replace with the appropriate type if known
}

export default function MyBookingsClient({ bookings }: MyBookingsClientProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>My Bookings</h1>
      <DateTimePickerForm onDateChange={handleDateChange} />
      <div>
        <h2>Existing Bookings</h2>
        <BookingsList bookings={bookings} selectedDate={selectedDate} />
      </div>
    </div>
  );
}