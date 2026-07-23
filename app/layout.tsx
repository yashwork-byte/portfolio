import type { Metadata } from "next";
import { Anton, Oswald } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

// Condensed sports display — matchday poster energy.
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

// Condensed workhorse for kickers, buttons, scoreboard digits, nav.
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cond",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.tagline}`,
  description: profile.tagline,
  openGraph: {
    title: profile.name,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
