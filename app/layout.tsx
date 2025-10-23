import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "White Star Web Solutions | Building Digital Futures",
  description: "White Star Web Solutions is a technology and software solutions holding company that incubates and manages innovative businesses and products across digital marketing, SaaS, e-commerce, and wellness sectors.",
  keywords: ["technology", "software solutions", "digital marketing", "SaaS", "e-commerce", "wellness", "AI", "innovation"],
  authors: [{ name: "White Star Web Solutions" }],
  openGraph: {
    title: "White Star Web Solutions | Building Digital Futures",
    description: "Powering innovative software and technology-driven businesses",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
