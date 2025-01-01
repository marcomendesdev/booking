import { TablesProvider } from "@/context/TablesContext";
import { TablesClient } from "@/components/TablesClient";
import { currentUser } from "@clerk/nextjs/server";

export default async function Tables() {
  const user = await currentUser();

  const primaryEmail = user.emailAddresses.find(
    (email) => email.id === user.primaryEmailAddressId
  )?.emailAddress;

  const fullName = user.firstName + " " + user.lastName;

  console.log({ user, primaryEmail, fullName });

  return (
    <TablesProvider>
      <TablesClient primaryEmail={primaryEmail} fullName={fullName} />
    </TablesProvider>
  );
}
