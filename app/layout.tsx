import "./globals.css";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "PARASOLHUIS | Premium Dutch Parasols",
  description: "Luxury outdoor umbrellas with Dutch design excellence",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
