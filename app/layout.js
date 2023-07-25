import "./globals.css";
import { League_Spartan } from "next/font/google";

import { ServerThemeProvider } from "@wits/next-themes";
import Providers from "./Providers";

const league = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Calculator",
  description: "frontendmentor.io",
};

export default function RootLayout({ children }) {
  return (
    <ServerThemeProvider>
      <html lang="en">
        <body className={league.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
