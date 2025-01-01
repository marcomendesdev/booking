import { TablesProvider } from "@/context/TablesContext";
import { TablesClient } from "@/components/TablesClient";

export default function Tables() {
  return (
    <TablesProvider>
      <TablesClient />
    </TablesProvider>
  );
}
