"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={false} themes={["green", "dark", "monzo"]}>
      <div suppressHydrationWarning={true}>{children}</div>
    </ThemeProvider>
  );
};

export default Providers;

//<ThemeProvider themes={['pink', 'red', 'blue']}>
