"use client";

import { ThemeProvider } from "@wits/next-themes";

const Providers = ({ children }) => {
  return <ThemeProvider enableSystem={false}>{children}</ThemeProvider>;
};

export default Providers;
