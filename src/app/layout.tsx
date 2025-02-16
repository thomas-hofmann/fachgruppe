import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import Navigation from '@/components/navigation';
import Headline from '@/components/main-heading';

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
      </div>
      </body>
    </html>
  );
}
