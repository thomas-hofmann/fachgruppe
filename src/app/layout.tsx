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
    <html lang="en">
      <body>
      <div className='container border border-sky-500/50 mx-auto p-6 bg-gray-800 rounded m-4'>
        <Headline />
        <Navigation />
        {children}
        <Footer />
      </div>
      </body>
    </html>
  );
}
