import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEWLAND PHOTOBOOK | Professional Digital Lab & Album Design",
  description: "Excellence in every pixel. Professional-grade printing, precision cutting, and bespoke album design for photographers and creatives.",
  keywords: ["photo printing", "album design", "print and cut", "digital lab", "professional photography"],
};

import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
