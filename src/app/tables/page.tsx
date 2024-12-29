import { DateTimePickerForm } from "@/components/Date-Picker";
import { TableCard } from "@/components/TableCard";

type Table = {
  id: number;
  name: string;
  capacity: number;
  location: string;
  status: string;
};

export default async function Tables() {
  const response = await fetch(
    "https://67631d5e17ec5852cae823fa.mockapi.io/api/tables/restaurant-tables"
  );
  const tables = await response.json();

  return (
    <div className="px-6">
      <h1 className="text-2xl font-bold py-10">Tables</h1>
      <div className="pb-6">
        <DateTimePickerForm />
      </div>
      <ul className="grid sm:grid-cols-3 gap-4">
        {tables.map((table: Table) => (
          <li key={table.id}>
            <TableCard
              name={table.name}
              capacity={table.capacity}
              location={table.location}
              status={table.status}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
