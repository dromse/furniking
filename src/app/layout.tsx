import type { Metadata } from "next";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { rubik } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Furniking",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col h-screen justify-between ${rubik.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
