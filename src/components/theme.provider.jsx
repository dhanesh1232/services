"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class" // Adds "dark" or "light" class to <html>
      defaultTheme="system" // Use system preference by default
      enableSystem={true} // Enable automatic system theme detection
    >
      {children}
    </NextThemesProvider>
  );
}
