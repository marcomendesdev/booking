"use client";

import { useTables } from "@/context/TablesContext";
import { DateTimePickerForm } from "@/components/Date-Picker";
import { TableCard } from "@/components/TableCard";
import { formatISO } from "date-fns";
import { useState, useEffect, useCallback } from "react";

type TablesClientProps = {
  primaryEmail: string;
  fullName: string;
};

export function TablesClient({ primaryEmail, fullName }: TablesClientProps) {
  const { tables, bookings, refreshTables } = useTables();
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    console.log("Current selected date:", date);
  }, [date]);

  const isTableBooked = useCallback((tableId: number, bookingDate: string): boolean => {
    const result = bookings.some((book) => {
      const bookingDateTime = new Date(book.date).getTime();
      const bookingEndTime = bookingDateTime + 60 * 60 * 1000; 
      const nowTime = new Date(bookingDate).getTime();
      const isBooked =
        book.tableId === tableId &&
        nowTime >= bookingDateTime &&
        nowTime <= bookingEndTime;
      if (isBooked) {
        console.log(
          `Table ${tableId} is booked. Booking time: ${book.date}, Now time: ${bookingDate}`
        );
      }
      return isBooked;
    });
    return result;
  }, [bookings]);

  const handleDateChange = (selectedDate: Date | null) => {
    if (selectedDate) {
      const formattedDate = formatISO(selectedDate);
      console.log("New date selected:", formattedDate);
      setDate(formattedDate);
    } else {
      console.log("No date selected.");
      setDate(null);
    }
  };

  return (
    <div className="px-6">
      <h1 className="text-2xl font-bold py-10">Tables</h1>
      <div className="pb-6">
        <DateTimePickerForm onDateChange={handleDateChange} label="Choose a date to book your table:" buttonText="Check" />
      </div>
      <ul className="grid sm:grid-cols-3 gap-4">
        {tables.map((table) => (
          <li key={table.id}>
            <TableCard
              tableId={table.id.toString()}
              name={table.name}
              capacity={table.capacity}
              location={table.location}
              status={date && isTableBooked(table.id, date) ? "Reserved" : "Available"}
              selectedDate={date ? new Date(date) : null}
              onBookingSuccess={refreshTables}
              dateSelected={!!date} 
              primaryEmail={primaryEmail}
              fullName={fullName}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}