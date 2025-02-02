import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// @ciaranjmcg0v: Added Geist UI Fonts
const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// @ciaranjmcg0v: Added DM Sans Font
const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hedge AI",
  description: "Secure your investments with Hedge AI.",
  icons: "/hedge-ai-logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dmSans.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
