import "./globals.css";
import type { Metadata } from "next";
import { Raleway, Montserrat } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martin Petr | Software Engineer",
  description: "Hey! I’m Martin, a software engineer from Czech Republic.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
