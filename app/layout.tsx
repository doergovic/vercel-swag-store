import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";

import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Swag Store",
    template: "%s | Swag Store",
  },
  description: "Premium swag for developers who build with Vercel.",
  openGraph: {
    siteName: "Swag Store",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="flex min-h-dvh flex-col bg-background font-sans text-foreground antialiased">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
