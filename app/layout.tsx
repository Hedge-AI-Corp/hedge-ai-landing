
import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import localFont from "next/font/local";
import { Inter, DM_Sans } from "next/font/google";
import Providers from "./providers";

const clashGrotesk = localFont({
  src: "../public/fonts/clash-grotesk.woff2",
  style: "normal",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
})

const dmsans = DM_Sans({
  subsets: ["latin"],
}) 

export const metadata: Metadata = {
  title: "Home | HedgeBot",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clashGrotesk.className}
      >
        <Providers>
        {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
