import { TablesProvider } from "@/context/TablesContext";
import MyBookingsClient from "@/components/MyBookingsClient";
import { currentUser } from "@clerk/nextjs/server";

async function fetchBookings() {
  const user = await currentUser();
  const userEmail = user?.emailAddresses[0].emailAddress;

  const response = await fetch(
    "https://67631d5e17ec5852cae823fa.mockapi.io/api/tables/bookings"
  );
  const bookings = response.ok ? await response.json() : [];

  interface Booking {
    contactInfo: string;
  }

  const userBookings = bookings.filter(
    (booking: Booking) => booking.contactInfo === userEmail
  );

  return userBookings;
}

export default async function MyBookings() {
  const bookings = await fetchBookings();

  return (
    <TablesProvider>
      <MyBookingsClient bookings={bookings} />
    </TablesProvider>
  );
}
