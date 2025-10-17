import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import Navbar from "@/components/navbar";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});


export const metadata: Metadata = {
  title: "wallp",
  description: "Your friendly AI Wallpaper Destination",
  icons: [
    {
      rel: "icon",
      url: "/wplogo.ico",
      type: "image/x-icon",
      sizes: "32x32",
    },
    {
      rel: "icon",
      url: "/wplogo.ico",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      url: "/wplogo.ico",
      sizes: "180x180",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <link rel="icon" href="/wplogo.png" type="image/png" sizes="32x32" />
      <link rel="apple-touch-icon" href="/wplogo.png" sizes="180x180" /> */}
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
