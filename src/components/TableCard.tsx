import * as React from "react";

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
  name: string;
  capacity: number;
  location: string;
  status: string;
};

export function TableCard({
  name,
  capacity,
  location,
  status,
}: TableCardProps) {
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
        { status === "Available" ? <Button className="w-full">Book this table</Button> : <Button className="w-full" disabled>Reserved</Button> }
      </CardFooter>
    </Card>
  );
}
