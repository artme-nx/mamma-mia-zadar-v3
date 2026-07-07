import type { Metadata } from "next";
import { Instrument_Serif, Work_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mamma Mia — Zadar | Pizzeria u vrtu na Putu Dikla, od 2007.",
  description:
    "Mamma Mia u Zadru — talijanska pizzeria i restoran u vrtu punom zelenila, od 2007. Pizza iz krušne peći, domaća pasta i legendarni cheesecake. Preko 1.300 recenzija. Rezervirajte stol.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${instrumentSerif.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
