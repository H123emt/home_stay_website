import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
 import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Misthaven | Luxury Homestay in Meghalaya",
  description:
    "An exclusive luxury eco-retreat nestled in the living root bridge forests of Cherrapunjee, Meghalaya. Immersive nature, unmatched serenity.",
  keywords: ["Meghalaya", "luxury homestay", "eco-tourism", "Cherrapunjee", "nature retreat"],
  openGraph: {
    title: "Misthaven | Luxury Homestay in Meghalaya",
    description: "Immersive luxury in the Scotland of the East.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-[#F9FBF9] font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}