import { TablesProvider } from "@/context/TablesContext";
import MyBookingsClient from "@/components/MyBookingsClient";

async function fetchBookings() {
  const response = await fetch("https://67631d5e17ec5852cae823fa.mockapi.io/api/tables/bookings");
  return response.ok ? response.json() : [];
}

export default async function MyBookings() {
  const bookings = await fetchBookings();

  return (
    <TablesProvider>
      <MyBookingsClient bookings={bookings} />
    </TablesProvider>
  );
}