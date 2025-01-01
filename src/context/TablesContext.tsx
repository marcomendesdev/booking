// src/context/TablesContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { fetchTablesAndBookings } from "@/services/tablesService";

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

  const fetchAndSetTablesAndBookings = useCallback(async () => {
    const { tables, bookings } = await fetchTablesAndBookings();
    setTables(tables);
    setBookings(bookings);
  }, []);

  useEffect(() => {
    fetchAndSetTablesAndBookings();
  }, [fetchAndSetTablesAndBookings]);

  const refreshTables = () => {
    fetchAndSetTablesAndBookings();
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