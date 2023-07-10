import "./globals.css";
import { League_Spartan } from "next/font/google";

import Providers from "./Providers";

const league = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Calculator",
  description: "frontendmentor.io",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Providers>
        <body suppressHydrationWarning={true} className={league.className}>
          {children}
        </body>
      </Providers>
    </html>
  );
}
