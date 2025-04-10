
"use client";

import { createContext, useContext, useEffect } from "react";

type ThemeProviderState = {
  theme: "default";
};

const initialState: ThemeProviderState = {
  theme: "default",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add("default");
    
    // Apply gradient background to body
    document.body.style.background = "linear-gradient(to bottom right, #0A1929, #2D1B69)";
    document.body.style.backgroundAttachment = "fixed";
  }, []);

  // Fix: Use the literal type "default" instead of a generic string
  const value: ThemeProviderState = {
    theme: "default",
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
