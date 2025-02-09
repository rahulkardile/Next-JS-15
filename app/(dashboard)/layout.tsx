import { Geist, Geist_Mono } from "next/font/google";
import React, { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
        <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h2>dashboard layout</h2>
        {children}
      </body>
    </html>
  );
}
