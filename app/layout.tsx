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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://steakaville-rest-stop.bukam.chatgpt.site/";
const socialImageUrl = `${siteUrl.replace(/\/$/, "")}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Steakaville Rest Stop | Restaurant, Bar & Catering",
  description: "Fire-grilled Jamaican flavour, a welcoming bar, and catering for every celebration in Claremont, St. Ann.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Steakaville Rest Stop",
    description: "Restaurant, bar, and catering in Claremont, St. Ann. Road To Bob Marley.",
    url: siteUrl,
    siteName: "Steakaville Rest Stop",
    images: [{ url: socialImageUrl, width: 1536, height: 1024, alt: "Steakaville Rest Stop — Road To Bob Marley" }],
    locale: "en_JM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steakaville Rest Stop",
    description: "Restaurant, bar, and catering in Claremont, St. Ann.",
    images: [socialImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
