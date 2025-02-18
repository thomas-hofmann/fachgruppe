import type { Metadata } from "next";
import "./globals.css";
import "./styles/base.css";

export const metadata: Metadata = {
  title: "Medieninformatik",
  description: "Übersichsseite für Medieninformatik",
};

import Navigation from '@/components/navigation';
import Headline from '@/components/main-heading';
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-400 dark:bg-black text-gray-900 dark:text-white">
      <div className="container border border-sky-500/50 mx-auto p-6 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded m-4">
        <Headline />
        <Navigation />
        {children}
        <Footer />
      </div>
      </body>
    </html>
  );
}
