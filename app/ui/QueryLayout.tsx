"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ContextProvider } from "../context";

export const queryClient = new QueryClient();
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ContextProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ContextProvider>
  );
}
