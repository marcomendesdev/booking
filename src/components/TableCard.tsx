"use client";

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
  onBookingSuccess: () => void;
};

export function TableCard({
  tableId,
  name,
  capacity,
  location,
  status,
  selectedDate,
  onBookingSuccess,
  dateSelected, // Add this prop
}: TableCardProps & { dateSelected: boolean }) {
  const [isBooking, setIsBooking] = useState(false);

  const handleBooking = async () => {
    if (!selectedDate) {
      alert("Please select a date and time for the booking.");
      return;
    }

    setIsBooking(true);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: `B${Date.now()}`,
          tableId,
          date: selectedDate,
          customerName: "Default Customer",
          contactInfo: "default.contact@example.com",
          status: "Reserved",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create booking.");
      }

      const result = await response.json();
      alert(result.message);
      onBookingSuccess();
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
        {status === "Available" && dateSelected ? ( // Conditionally render the button
          <Button className="w-full" onClick={handleBooking} disabled={isBooking}>
            {isBooking ? "Booking..." : "Book this table"}
          </Button>
        ) : dateSelected && (
          <Button className="w-full" disabled>
            {status === "Available" ? "Select a date" : "Reserved"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}