import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TableCardProps = {
  tableId: string;
  name: string;
  capacity: number;
  location: string;
  status: string;
  selectedDate: Date | null;
};

export function TableCard({
  tableId,
  name,
  capacity,
  location,
  status,
  selectedDate,
}: TableCardProps) {
  const [isBooking, setIsBooking] = useState(false);

  const handleBooking = async () => {
    if (!selectedDate) {
      alert("Please select a date and time for the booking.");
      return;
    }

    setIsBooking(true);
    const newBookingId = `B${Date.now()}`;

    try {
      const response = await fetch("https://67631d5e17ec5852cae823fa.mockapi.io/api/tables/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: newBookingId,
          tableId: tableId,
          date: selectedDate,
          customerName: "Default Customer",
          contactInfo: "default.contact@example.com",
          status: "Reserved",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create booking.");
      }

      alert("Table booked successfully!");
    } catch (error) {
      console.error("Error booking table:", error);
      alert("Failed to book table. Please try again.");
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <Card className="max-w-[350px] mx-3 sm:mx-0">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          impedit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Capacity: {capacity} seats</p>
        <p>Location: {location}</p>
      </CardContent>
      <CardFooter>
        {status === "Available" ? (
          <Button className="w-full" onClick={handleBooking} disabled={isBooking}>
            {isBooking ? "Booking..." : "Book this table"}
          </Button>
        ) : (
          <Button className="w-full" disabled>
            Reserved
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}