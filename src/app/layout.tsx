import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Emerentia Novena",
    template: "%s | Emerentia Novena",
  },
  description:
    "MSc Software Development graduate with a background in foreign languages. Bridging the gap between technology and communication.",
  keywords: [
    "Emerentia Novena",
    "Software Development",
    "foreign languages",
    "technology",
    "developer",
  ],
  authors: [{ name: "Emerentia Novena", url: "https://emerentianovena.vercel.app" }],
  creator: "Emerentia Novena",
  publisher: "Emerentia Novena",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emerentianovena.vercel.app",
    title: "Emerentia Novena",
    description:
      "MSc Software Development graduate with a background in foreign languages.",
    siteName: "Emerentia Novena",
    images: [
      {
        url: "/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Emerentia Novena",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerentia Novena",
    description: "MSc Software Development graduate with a background in foreign languages.",
    creator: "@emerentianovena",
    images: ["/avatar.jpg"],
  },
  verification: {
    google: "add-your-google-verification-code-here",
  },
  category: "technology",
  other: {
    "application-name": "Emerentia Novena",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(geistSans.variable, geistMono.variable)}>
        {children}
      </body>
    </html>
  );
}
