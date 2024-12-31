import { TablesClient } from "@/components/TablesClient";

export default async function Tables() {
  async function fetchTablesAndBookings() {
    const [tablesRes, bookingsRes] = await Promise.all([
      fetch(
        "https://67631d5e17ec5852cae823fa.mockapi.io/api/tables/restaurant-tables"
      ),
      fetch(
        "https://67631d5e17ec5852cae823fa.mockapi.io/api/tables/bookings"
      ),
    ]);

    const [tables, bookings] = await Promise.all([
      tablesRes.json(),
      bookingsRes.json(),
    ]);

    return { tables, bookings };
  }

  const { tables, bookings } = await fetchTablesAndBookings();

  return (
    <TablesClient tables={tables} bookings={bookings} />
  );
}