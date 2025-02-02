import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Landing/Navbar";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hedge AI",
  description: "Secure your investments with Hedge AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ActiveSectionContextProvider>
        <Navbar />
        {children}
        <Analytics />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
