import type {
  Metadata,
} from "next";

import {
  Inter,
} from "next/font/google";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorTrail from "@/components/layout/CursorTrail";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Core Technology",

  description:
    "The Core Technology — creative technology, software and digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children:
    React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.variable
        }
      >

        <Header />

        {children}

        <Footer />

        <CursorTrail />

      </body>
    </html>
  );
}
