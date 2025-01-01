"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

type Table = {
  id: number;
  name: string;
  capacity: number;
  location: string;
  status: string;
};

type Booking = {
  id: number;
  tableId: number;
  customerName: string;
  contactInfo: string;
  date: string;
};

type TablesContextType = {
  tables: Table[];
  bookings: Booking[];
  refreshTables: () => void;
};

const TablesContext = createContext<TablesContextType | undefined>(undefined);

export const TablesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tables, setTables] = useState<Table[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const fetchTablesAndBookings = useCallback(async () => {
    const [tablesRes, bookingsRes] = await Promise.all([
      fetch("https://67631d5e17ec5852cae823fa.mockapi.io/api/tables/restaurant-tables"),
      fetch("https://67631d5e17ec5852cae823fa.mockapi.io/api/tables/bookings"),
    ]);

    const [tables, bookings] = await Promise.all([tablesRes.json(), bookingsRes.json()]);

    setTables(tables);
    setBookings(bookings);
  }, []);

  useEffect(() => {
    fetchTablesAndBookings();
  }, [fetchTablesAndBookings]);

  const refreshTables = () => {
    fetchTablesAndBookings();
  };

  return (
    <TablesContext.Provider value={{ tables, bookings, refreshTables }}>
      {children}
    </TablesContext.Provider>
  );
};

export const useTables = () => {
  const context = useContext(TablesContext);
  if (!context) {
    throw new Error("useTables must be used within a TablesProvider");
  }
  return context;
};