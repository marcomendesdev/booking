export const fetchTablesAndBookings = async () => {
  const [tablesRes, bookingsRes] = await Promise.all([
    fetch("https://67631d5e17ec5852cae823fa.mockapi.io/api/tables/restaurant-tables"),
    fetch("https://67631d5e17ec5852cae823fa.mockapi.io/api/tables/bookings"),
  ]);

  const [tables, bookings] = await Promise.all([tablesRes.json(), bookingsRes.json()]);

  return { tables, bookings };
};