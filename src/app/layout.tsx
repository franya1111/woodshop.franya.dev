import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "WOODWAVE HOME — Handcrafted Willow, Rattan & Solid Wood Furniture",
  description:
    "Handcrafted furniture woven from willow and rattan over solid oak, walnut and ash. Dining chairs, beds, sideboards, pendants — made by hand, built to outlive you. Free delivery, 2-year warranty, 14-day returns.",
  keywords: [
    "WOODWAVE",
    "rattan furniture",
    "willow furniture",
    "handcrafted furniture",
    "cane furniture",
    "woven furniture",
    "solid wood furniture",
    "oak furniture",
  ],
  authors: [{ name: "WOODWAVE HOME" }],
  openGraph: {
    title: "WOODWAVE HOME — Handcrafted Willow, Rattan & Wood Furniture",
    description: "Handcrafted furniture woven from willow and rattan over solid oak.",
    siteName: "WOODWAVE HOME",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="woodwave-dark">
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
