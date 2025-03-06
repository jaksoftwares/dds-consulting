import type { ReactNode } from "react";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>DDS Consulting</title>
        <meta name="description" content="Professional business consultancy services." />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="w-full py-2">{children}</main>
        <Footer />
      </body>
    </html>
  );
}